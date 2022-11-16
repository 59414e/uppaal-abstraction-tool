import * as xml2js from 'xml2js';
import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';
import { DEBUG, INFO, WARN } from '../simpleLogger.js';
// ======================================================



const INT16_MIN = -32768;
const INT16_MAX = 32767;
const ULABEL_KINDS = ['select', 'guard', 'synchronisation', 'assignment'];

class ULabel {
	constructor(_content) {
		this.content = _content;
	}
	toString() {
		return this.content ?? '';
	}
}

class SelectULabel extends ULabel {
	static ruleName = 'select_label';
	constructor(_content) {
		super(_content);
		if (_content?.length > 0) {
			assignParseTree.call(this, _content, SelectULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences))
			
			// <ID> to <VtypeContext>
			this.pairs = this.tree.getTypedRuleContexts(
				yagParser.Select_pairContext
			).reduce(
				(acc, pairCtx) => (
					acc[pairCtx.vid.getText()] = pairCtx.range, 
					acc
				), 
				{}
			)
		} else {
			this.vars = new Set();
		}
	}

	computeChoiceSpace(){
		let arr = [];
		for(const key in this.pairs){
			let max = Number(this.pairs[key].bound.bmax.getText());
			let min = Number(this.pairs[key].bound.bmin.getText());
			arr.push(
				Array.from(
					{length:max-min+1},
					(k,v)=>v+min
				)
			)
		}
		if(Object.keys(this.pairs).length===1){
			return cartesianProduct(...arr).map(x=>[x])
		}else{
			return cartesianProduct(...arr);
		}
	}

	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
		return this?.templateFunction.call(ctxContext) ?? '';
	}
}

class AssignmentULabel extends ULabel {
	static ruleName = 'assignment_label';
	constructor(_content) {
		super(_content);

		if (_content.length > 0) {
			assignParseTree.call(this, _content, AssignmentULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences));
			// list of individual <Assignment_stmtContext> components
			this.atomic = this.tree.getTypedRuleContexts(yagParser.Assignment_stmtContext);
			this.pairs = this.tree.getTypedRuleContexts(yagParser.Assignment_stmtContext).map( ctx=>{
				return [
					ctx.lhs.vid.getText(),	// identifier
					ctx.lhs?.dim ? ctxTemplateEval(ctx.lhs.dim) : '',  // evaluator of an arr index
					ctxTemplateEval(ctx.rhs)	// evaluator of a rhs
				]
			});
		} else {
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
		return this?.templateFunction.call(ctxContext) ?? '';
	}


	// all needed dict keys must be present
	atomicEvalWithContext(ctxContext = {}){
		let n = this.pairs.length;
		for(let i=0; i<n; i++){
			if(this.pairs[i][1]){
				ctxContext[this.pairs[i][0]][(this.pairs[i][1].call(ctxContext))] = (this.pairs[i][2].call(ctxContext))
			}else{
				ctxContext[this.pairs[i][0]] = (this.pairs[i][2].call(ctxContext))
			}
		}
		return ctxContext;		
	}
}

// must be in DNF (+ only `==` or `!=` operators)
class GuardULabel extends ULabel {
	static ruleName = 'expr';
	constructor(_content) {
		super(_content);

		if (_content.length > 0) {
			assignParseTree.call(this, _content, GuardULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);
			this.templateEval = ctxTemplateEval(this.tree);
			
			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences))
		} else {
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
		return this?.templateFunction.call(ctxContext) ?? '';
	}

	evalWithContext(ctxContext = {}){
		return this.templateEval.call(ctxContext);
	}
}

class SynchronisationULabel extends ULabel {
	static ruleName = 'synchronisation_label';
	constructor(_content) {
		super(_content);

		if (_content.length > 0) {
			assignParseTree.call(this, _content, SynchronisationULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// channel name
			this.chan = this.tree.chan.vid.getText();
			// `!` - emanate, `?` - receive
			this.symb = this.tree.symb.text;
			// arguments/parameters (e.g. array indices)
			this.vars = new Set(Object.keys(this.parser._varOccurences).filter(n => n != this.tree.chan.vid.getText()))
		} else {
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
		return this?.templateFunction.call(ctxContext) ?? '';
	}
}


const UPPER_APPROX = 1;
const LOWER_APPROX = 2;
const UNIVERSE_PLACEHOLDER = `*`;

// DomainApproximation is a mutable object, whose values are updated "in-place"
// If immutable (and refined by assigning a reference to a value returned by an union/intersection) garbage collector would need to be considered

//todo: consider using maps over objects
class DomainApproximation {
	constructor(_isEmptySet) {
		this.vals = _isEmptySet ? {} : UNIVERSE_PLACEHOLDER;
	}

	get size() {
		return this.vals === UNIVERSE_PLACEHOLDER ? Infinity : Object.keys(this.vals).length;
	}

	// _vals - other localDomain or arr of valueVectors
	cap(_vals) {
		if (_vals === UNIVERSE_PLACEHOLDER) return;

		if (Array.isArray(_vals)) {
			_vals = _vals.reduce((acc, v) => (acc[v.join(',')] = v, acc), {})
		}

		if (this.vals === UNIVERSE_PLACEHOLDER) {
			this.vals = _vals;
		} else {
			for (const key in this.vals) {
				if (!_vals.hasOwnProperty(key)) {
					delete this.vals[key];
				}
			}
		}
	}

	cup(_vals) {
		if (this.vals === UNIVERSE_PLACEHOLDER || _vals === UNIVERSE_PLACEHOLDER) {
			DEBUG(`Unexpected union on the <wildcard> "*" took place.`)
			this.vals = UNIVERSE_PLACEHOLDER;
		} else {
			if (Array.isArray(_vals)) {
				_vals = _vals.reduce((acc, v) => (acc[v.join(',')] = v, acc), {})
			}
			for (const key in _vals) {
				this.vals[key] = _vals[key];
			}
		}
	}
}

// class AgentGraph{
// 	constructor(_declaration, _nodes, _edges){

// 	}

// 	fromXML(){

// 	}
// }

const LCOLOR_WHITE = 1;
const LCOLOR_GREY = 2;
const LCOLOR_BLACK = 3;


class MASGraph {
	constructor(str) {
		const xmlParser = new xml2js.Parser({
			trim: true // trim the whitespace at the beginning and end of text nodes
		});

		xmlParser.parseString(str, function (err, res) {
			// global declarations
			this.global = res.nta.declaration[0] ?? '';

			assignParseTree.call(this, this.global, 'translation')

			let agents = {};

			res.nta.template.forEach(t => {
				let tname = t.name[0]?._ ?? t.name[0];

				// temp pointer to an agent graph/template
				let obj = {};

				obj.local = t.declaration[0] ?? '';

				assignParseTree.call(obj, obj.local, 'translation')
				
				t.constDict = Object.assign({}, obj.parser.constDict, this.parser.constDict);

				// init location property is extracted outside to ensure consistency
				obj.init = t.init[0]?.$?.ref;

				obj.nodes = t.location.reduce((acc, el) => (
					acc[el.$.id] = {
						name: el.name?.[0]?._ ?? el.$.id,
						pos: {
							x: el.$.x,
							y: el.$.y
						},
						edgesTo: {}
					}, acc
				), {});

				const REG_TPARAM = /int(\[([^\],\[]+),([^\],\[]+)\])?([^\],\s\[]+)/gm;
				if(t?.parameter?.[0]){
					obj.tparam = {};
					let matches = t?.parameter?.[0].replace(/\s+/g, '').matchAll(REG_TPARAM);
					for(const m of matches){
						obj.tparam[ m[4] ] = [ m[2] ?? INT16_MIN, m[3] ?? INT16_MAX]
					}
				}else{
					obj.tparam = null;
				}
				
				obj.edges = t.transition?.map(t => {
					let e = {
						src: t.source[0]?.$.ref,
						trg: t.target[0]?.$.ref,
						select: '',
						guard: '',
						assignment: '',
						synchronisation: '',
						vars: new Set()
					};

					for (const l of t.label || []) {
						e[l.$.kind] = l._;
					}

					e["select"] = new SelectULabel(e["select"]);
					e["guard"] = new GuardULabel(e["guard"]);
					e["assignment"] = new AssignmentULabel(e["assignment"]);
					e["synchronisation"] = new SynchronisationULabel(e["synchronisation"]);

					return e;
				})

				agents[tname] = obj;
			})
			this.agents = agents;
		}.bind(this))

		this.updateEdgesToForAll();
	}

	// after const-subst
	unfoldSelectEdges(updateEdgesTo = true){
		for(const a in this.agents){
			let t = this.agents[a];
			t.edges = t.edges.flatMap(e=>{
				if(e.select.content){
					let res = [];
					let choices = e.select.computeChoiceSpace();
					// DEBUG(`${Object.keys(e.select.pairs).join(',')} hav following choices:`);
					// DEBUG(choices);
					for(let ch of choices){
						let ctxContext = Object.keys(e.select.pairs).reduce((acc,val,ind)=>(acc[val]=ch[ind],acc),{});
						
						res.push({
							src: e.src,
							trg: e.trg,
							select: '',
							guard: e["guard"].content ? new GuardULabel(e["guard"].stringWithContext(ctxContext)) : new GuardULabel(''),
							assignment: e["assignment"].content ? new AssignmentULabel(e["assignment"].stringWithContext(ctxContext)) : new AssignmentULabel(''),
							synchronisation: e["synchronisation"].content ? new SynchronisationULabel(e["synchronisation"].stringWithContext(ctxContext)) : new SynchronisationULabel(''),
							vars: new Set()
						});
					}
					return res;
				}else{
					return e;
				}
			})
		}
		if(updateEdgesTo)this.updateEdgesToForAll();
	}

	// must never be followed by computing the product (i.e., either prod->unfold->approx or unfold->approx)
	unfoldAlternatives(){
		// select choices
		this.unfoldSelectEdges(false)

		// disjunction terms
		for(const a in this.agents){
			let t = this.agents[a];
			t.edges = t.edges.flatMap(e=>{
				if(e.guard.content){
					let res = [];
					let disjunctiveTerms = e.guard.content.split('||');
				
					for(let conj of disjunctiveTerms){
						res.push({
							src: e.src,
							trg: e.trg,
							select: '',
							guard: new GuardULabel(conj),
							assignment: e["assignment"].content ? new AssignmentULabel(e["assignment"].content) : new AssignmentULabel(''),
							synchronisation: e["synchronisation"].content ? new SynchronisationULabel(e["synchronisation"].content) : new SynchronisationULabel(''),
							vars: new Set()
						});
					}
					return res;
				}else{
					return e;
				}
			})
		}

		// unfold the tparams (i.e., substitute their occurences with literals)
		for(const a in this.agents){
			let t = this.agents[a];

			if(!t.tparam){
				// DEBUG(`Agent ${a} has no tparams`);
				continue;
			}

			let tparamNames = Object.keys(t.tparam);

			for(const tparamName of tparamNames){
				t.edges = t.edges.flatMap(e=>{
					if(
						e.guard.vars.has(tparamName) ||
						e.assignment.vars.has(tparamName) ||
						e.synchronisation.vars.has(tparamName)
					){
						let res = [];
						for(let tparamVal of t.tparam[tparamName]){
							let ctxContext = {
								[tparamName]:tparamVal
							}
							// console.log(e["assignment"].content);
							res.push({
								src: e.src,
								trg: e.trg,
								select: '',
								guard: e["guard"].content ? new GuardULabel(`${tparamName}==${tparamVal} && (${e["guard"].stringWithContext(ctxContext)})`) : new GuardULabel(`${tparamName}==${tparamVal}`),
								assignment: e["assignment"].content ? new AssignmentULabel(e["assignment"].stringWithContext(ctxContext)) : new AssignmentULabel(''),
								synchronisation: e["synchronisation"].content ? new SynchronisationULabel(e["synchronisation"].stringWithContext(ctxContext)) : new SynchronisationULabel(''),
								vars: new Set()
							});
						}
						return res;
					}else{
						return e;
					}
				})
			}
		}
		this.updateEdgesToForAll();
	}

	updateEdgesToForAll(){
		for(const a in this.agents){
			this.updateEdgesToFor(a);
		}
	}
	updateEdgesToFor(a){
		let t = this.agents[a];
		for(const n in t.nodes){
			t.nodes[n].edgesTo = {};
		}
		t.edges.forEach(e=>{
			if (t.nodes[e.src].edgesTo.hasOwnProperty(e.trg)) {
				t.nodes[e.src].edgesTo[e.trg].push(e);
			} else {
				t.nodes[e.src].edgesTo[e.trg] = [e];
			}
		})
	}

	//todo
	checkAssumptions() {
		// var name collisions/shadowing
	}

	//todo
	toExtended() {
		// let res = {};
		// let numberOfAgents = Object.keys(this.agents);
	}

	// currently, in-place reduction 
	reduceToMayTemplate(tname) {
		this.agents = {
			[tname]: this.agents[tname]
		}

		// drop synchronisations labels
		for (const edge of this.agents[tname].edges) {
			edge.synchronisation = new SynchronisationULabel('');
		}
	}

	// currently, in-place reduction 
	reduceToMustTemplate(tname) {
		this.agents = {
			[tname]: copy.agents[tname]
		}

		// drop synchronisations edges
		this.agents[tname].edges = this.agents[tname].edges.filter(edge => edge.synchronisation.content.length == 0)
	}



	toXML() {
		// todo
	}

	// (temp) for debug
	printEdges(){
		for(const a in this.agents){
			console.log(`Agent ${a}`);
			console.group();
			this.agents[a].edges.forEach(e => {
				console.log(`${e.src} --[${e.select.content ? e.select.content+' ' : ''} ${e.guard.content || 'T'} : ${e.synchronisation.content}${e.assignment.content || '_'} ]-> ${e.trg}`)
			});
			console.groupEnd();
		}
	}
}


// class ApproximationParameters{
// 	constructor(){
// 	}
// }

// always operates on an agent graph (either G_ext(MG) or G_template)
function approximateLocalDomain(masGraph, params, approxType) {
	if (approxType !== UPPER_APPROX && approxType !== LOWER_APPROX) {
		WARN(`Unrecognized approximation type ${approxType} was passed.`)
		return -1;
	}
	// todo: derive varType and varInit from varName
	let targetVars = params.targetVars;
	let targetVarIndexOf = targetVars.reduce((acc,el,ind)=>(acc[el]=ind, acc), {});

	let targetAgent = params.targetTemplate ? masGraph.agents[params.targetTemplate] : masGraph.agents[agentNames[0]];


	let loc = targetAgent.nodes; // <locID> to <location> dict
	let locNames = Object.keys(loc);

	let edges = targetAgent.edges;	// edge array
	let locIni = targetAgent.init;	// loc ID

	// template-based approximation (NOT instance-based)
	if (params.targetTemplate) {
		// recompute edgesTo as it contain references
		loc = locNames.reduce((acc, x) => (acc[x] = { ...loc[x] }, acc[x].edgesTo = {}, acc), {})

		// if must-abstraction, then drop edges with sync
		if (approxType === LOWER_APPROX) {
			edges = edges.filter(x => x["synchronisation"].content.length === 0);
		}

		// if may-abstraction, then drop sync labels, but keep the edge
		edges = edges.map(x => ({ ...x })).map(x => {
			x["select"] = new SelectULabel(x["select"].content ?? '');
			x["guard"] = new GuardULabel(x["guard"].content ?? '');
			x["assignment"] = new AssignmentULabel(x["assignment"].content ?? '');
			x["synchronisation"] = new SynchronisationULabel("");

			if (loc[x.src].edgesTo.hasOwnProperty(x.trg)) {
				loc[x.src].edgesTo[x.trg].push(x);
			} else {
				loc[x.src].edgesTo[x.trg] = [x];
			}
			return x;
		});
	}

	// eval+merge the varDecDom
	
	for(const p in masGraph.parser.varDecDom){
		masGraph.parser.varDecDom[p].range = [eval(masGraph.parser.varDecDom[p].range[0]),eval(masGraph.parser.varDecDom[p].range[1])]
		masGraph.parser.varDecDom[p].dim = eval(masGraph.parser.varDecDom[p].dim);
	}

	for(const p in targetAgent.parser.varDecDom){
		targetAgent.parser.varDecDom[p].range = [eval(targetAgent.parser.varDecDom[p].range[0]),eval(targetAgent.parser.varDecDom[p].range[1])]
		targetAgent.parser.varDecDom[p].dim = eval(targetAgent.parser.varDecDom[p].dim);
	}

	// targetAgent's local variables (except parameter) together with global ones
	let varDomainView = Object.assign({}, masGraph.parser.varDecDom, targetAgent.parser.varDecDom)
	
	// populate the varDomainView with values
	for(const p in varDomainView){
		let vals = Array.from({length:varDomainView[p].range[1]-varDomainView[p].range[0]+1}, (k,v)=>v+varDomainView[p].range[0]);
		if(varDomainView[p].dim){		
			varDomainView[p] = cartesianProduct(...Array.from({length:varDomainView[p].dim}, (k,v)=>[...vals]))
		}else{
			varDomainView[p] = vals;
		}
	}
	if(targetAgent.tparam){
		for(const v in targetAgent.tparam){
			varDomainView[v] = arrayRange(targetAgent.tparam[v][0], targetAgent.tparam[v][1]);
		}
	}

	// console.log(varDomainView);
	// return;

	let priority = reachabilityMap(locNames, edges) ?? [];

	// compute adjList
	let adjList = locNames.reduce((acc, lid) => (
		acc[lid] = Object.keys(loc[lid].edgesTo).filter(x => x != lid),
		acc
	), {});

	// console.log(adjList)
	// return;

	// filter out edge labels, where target variables do not occur
	edges.forEach(edge => {
		// initialize `ignore` to true by default
		ULABEL_KINDS.forEach(kind => edge[kind].ignore = true)
		// unless `targetVars` appear anywhere
		for (const el of targetVars) {
			ULABEL_KINDS.forEach(kind => {
				if (edge[kind].vars.has(el)) {
					edge[kind].ignore = false;
				}
			})
		}
		// we will only need those from guard and assignment
		edge.vars = new Set([...edge.guard.vars, ...edge.assignment.vars].filter(v=>!targetVarIndexOf.hasOwnProperty(v)));
		edge.ignore = ULABEL_KINDS.reduce((acc, kind) => acc && edge[kind].ignore, true)
		// console.log(edge.vars);
		// console.log(varDomainView);
		edge.paramSpaceSize = [...edge.vars].reduce((acc,el)=>(acc*varDomainView[el].length), 1)
	})

	const startEmpty = (approxType === UPPER_APPROX);
	const approxOp = (approxType === UPPER_APPROX) ? 'cup' : 'cap';
	
	// maps <loc> with Object<string:vector>		
	let localDomain = locNames.reduce(
		(acc, el) => (
			acc[el] = new DomainApproximation(startEmpty),
			acc),
		{}
	);

	localDomain[locIni].vals = {
		[params.initVal.join(',')]:[...params.initVal]
	}

	let pi = locNames.reduce(
		(acc, el) => (
			acc[el] = new Set(),
			acc),
		{}
	);

	let color = locNames.reduce(
		(acc, el) => (
			acc[el] = LCOLOR_WHITE, 
			acc), 
		{}
	);

	let q = new Set([locIni]);

	while (q.size != 0) {
		let curr = extractMax(q, priority);
		DEBUG(`Visit to ${curr}`)

		// store previous cardinality value
		let cardinality = localDomain[curr].size;

		pi[curr].forEach(l => processEdgesBetween(l, curr));
		if (cardinality != localDomain[curr].size) {
			color[curr] = LCOLOR_GREY;
		}

		while (true) {
			// update the previous cardinality value
			cardinality = localDomain[curr].size;
			processEdgesBetween(curr, curr);
			if (cardinality != localDomain[curr].size) {
				color[curr] = LCOLOR_GREY;
			} else {
				// cardinality did not change, i.e. local domain approx. is stable
				break;
			}
		}

		if (color[curr] !== LCOLOR_BLACK) {
			adjList[curr].forEach(l => {
				q.add(l);
				pi[l].add(curr);
			});
			color[curr] = LCOLOR_BLACK;
		}
	}

	DEBUG(`local domain`);
	DEBUG(localDomain);
	return localDomain;


	function processEdgesBetween(src, trg) {
		if (!loc[src].edgesTo.hasOwnProperty(trg)) {
			return;
		}
		
		loc[src].edgesTo[trg].forEach(edge => {
			DEBUG(`Processing an edge from ${src} to ${trg}`)
			if (edge.ignore) {
				DEBUG(`edge.ignore flag - propagating the src's approximation`)
				localDomain[trg][approxOp](localDomain[src].vals);
			}else{
				// assuming unfolded edges
				// let prodSize = 1;
				let prodSize = edge.paramSpaceSize;
				let res = {};
				
				// [...edge.vars].forEach(v=>{
				// 	console.log(v);
				// 	prodSize *= varDomainView[v].length;
				// })

				for(const currVec in localDomain[src].vals){
					let ctxContext = {};

					// fill vars from ld
					for(const v of targetVars){
						ctxContext[v] = currVec[targetVarIndexOf[v]]
					}
					// fill remaining vars
					for(let i=0;i<prodSize;i++){
						let k = i;
						
						for(const v of edge.vars){
							let l = varDomainView[v].length;
							ctxContext[v] = varDomainView[v][k%l];
							k/=l;
						}
	
						if(!edge.guard.ignore && !edge.guard.evalWithContext(ctxContext)){
							continue;
						}
						if(!edge.assignment.ignore){
							edge.assignment.atomicEvalWithContext(ctxContext)
							let tmpVec = targetVars.map(v=>ctxContext[v]);

							res[tmpVec.join(',')] = tmpVec;
						}
					}	
				}

				if(Object.keys(res).length!=0){
					localDomain[trg][approxOp](res);
				}
			}
		})
	}
}


class MASParser extends yagListener {
	constructor() {
		super();

		this._varOccurences = {};

		// maps <ID> to its <VDEC> ctx
		this._varDeclarations = {}; // NOTE, it is disjoint with constDict

		this.varDecDom = {};

		this.constDict = {};

		// satelite data
		this.data = {};
	}

	// Enter a parse tree produced by yagParser#translation.
	enterTranslation(ctx) {
	}

	// Exit a parse tree produced by yagParser#translation.
	exitTranslation(ctx) {
	}

	// Enter a parse tree produced by yagParser#select_label.
	enterSelect_label(ctx) {
		// <ID> to <vtype_CTX>
		// this.data["select"] = {};
	}

	// Exit a parse tree produced by yagParser#select_label.
	exitSelect_label(ctx) {
	}


	// Enter a parse tree produced by yagParser#select_pair.
	enterSelect_pair(ctx) {
		// this.data["select"][ctx.vid.getText()] = ctx.range;
	}

	// Exit a parse tree produced by yagParser#select_pair.
	exitSelect_pair(ctx) {
	}


	// Enter a parse tree produced by yagParser#assignment_label.
	enterAssignment_label(ctx) {
		// children of the <ctxType> = <Assignment_stmtContext> 
		// this.data["assignment"] = ctx.getTypedRuleContexts(yagParser.Assignment_stmtContext) ?? [];
	}

	// Exit a parse tree produced by yagParser#assignment_label.
	exitAssignment_label(ctx) {
	}


	// Enter a parse tree produced by yagParser#synchronisation_label.
	enterSynchronisation_label(ctx) {
		// find the outter array identifier (if any)
		// let curr = ctx.chan;
		// while(curr.getChildCount()!=1){
		// 	curr = curr.getChild(0);
		// }
	}

	// Exit a parse tree produced by yagParser#synchronisation_label.
	exitSynchronisation_label(ctx) {
		// let chanName = ctx.chan.vid.getText()
		// let chanArgs = {};
		// for(const vid in this._varOccurences){
		// 	if(vid!=chanName){
		// 		chanArgs[vid] = this._varOccurences[vid];
		// 	}
		// }

		// this.data['synchronisation'] = {
		// 	name: ctx.chan.vid.getText(),
		// 	args: Object.keys(this._varOccurences).filter(n=>n!=ctx.chan.vid.getText()),
		// 	symb: ctx.symb.text,
		// }
	}


	// Enter a parse tree produced by yagParser#vdec_list.
	enterVdec_list(ctx) {
	}

	// Exit a parse tree produced by yagParser#vdec_list.
	exitVdec_list(ctx) {
	}


	// Enter a parse tree produced by yagParser#vdec.
	enterVdec(ctx) {
		if (ctx.parentCtx?._constant) {
			// this.constDict[ctx.vid.getText()] = ctx;
			this.constDict[ctx.vid.getText()] = ctx.init.getText();
		} else {
			this._varDeclarations[ctx.vid.getText()] = ctx;
			
			// ignore chans
			if(!ctx.parentCtx.type.ch){
				this.varDecDom[ctx.vid.getText()] = {
					range: ctx.parentCtx.type.bound ? [ctx.parentCtx.type.bound.bmin.getText(), ctx.parentCtx.type.bound.bmax.getText()] : [INT16_MIN, INT16_MAX], 
					dim: ctx.dim ? (ctx.dim.getText()) : 0
				}			
			}
		}
	}

	// Exit a parse tree produced by yagParser#vdec.
	exitVdec(ctx) {
	}


	// Enter a parse tree produced by yagParser#arr_size.
	enterArr_size(ctx) {
	}

	// Exit a parse tree produced by yagParser#arr_size.
	exitArr_size(ctx) {
	}


	// Enter a parse tree produced by yagParser#fdec.
	enterFdec(ctx) {
	}

	// Exit a parse tree produced by yagParser#fdec.
	exitFdec(ctx) {
	}


	// Enter a parse tree produced by yagParser#fparam_list.
	enterFparam_list(ctx) {
	}

	// Exit a parse tree produced by yagParser#fparam_list.
	exitFparam_list(ctx) {
	}


	// Enter a parse tree produced by yagParser#fparam.
	enterFparam(ctx) {
	}

	// Exit a parse tree produced by yagParser#fparam.
	exitFparam(ctx) {
	}


	// Enter a parse tree produced by yagParser#block.
	enterBlock(ctx) {
	}

	// Exit a parse tree produced by yagParser#block.
	exitBlock(ctx) {
	}


	// Enter a parse tree produced by yagParser#statement.
	enterStatement(ctx) {
	}

	// Exit a parse tree produced by yagParser#statement.
	exitStatement(ctx) {
	}


	// Enter a parse tree produced by yagParser#assignment_stmt.
	enterAssignment_stmt(ctx) {
	}

	// Exit a parse tree produced by yagParser#assignment_stmt.
	exitAssignment_stmt(ctx) {
	}


	// Enter a parse tree produced by yagParser#case_block.
	enterCase_block(ctx) {
	}

	// Exit a parse tree produced by yagParser#case_block.
	exitCase_block(ctx) {
	}


	// Enter a parse tree produced by yagParser#expr.
	enterExpr(ctx) {
	}

	// Exit a parse tree produced by yagParser#expr.
	exitExpr(ctx) {
	}

	// Enter a parse tree produced by yagParser#var_identifier.
	enterVar_identifier(ctx) {
		let id = ctx.getText();

		if (!this._varOccurences.hasOwnProperty(id)) {
			this._varOccurences[id] = [ctx];
		} else {
			this._varOccurences[id].push(ctx)
		}
	}

	// Exit a parse tree produced by yagParser#var_identifier.
	exitVar_identifier(ctx) {
	}


	// Enter a parse tree produced by yagParser#expr_list.
	enterExpr_list(ctx) {
	}

	// Exit a parse tree produced by yagParser#expr_list.
	exitExpr_list(ctx) {
	}


	// Enter a parse tree produced by yagParser#bound_range.
	enterBound_range(ctx) {
	}

	// Exit a parse tree produced by yagParser#bound_range.
	exitBound_range(ctx) {
	}


	// Enter a parse tree produced by yagParser#vtype.
	enterVtype(ctx) {
		if (ctx?.constant) {
			ctx.parentCtx._constant = true;
		}
	}

	// Exit a parse tree produced by yagParser#vtype.
	exitVtype(ctx) {
	}


	// Enter a parse tree produced by yagParser#assignmentOp.
	enterAssignmentOp(ctx) {
	}

	// Exit a parse tree produced by yagParser#assignmentOp.
	exitAssignmentOp(ctx) {
	}
}

// invoke with function.prototype.call method to 
function assignParseTree(input, ruleName) {
	({ tree: this.tree, parser: this.parser } = parseTreeWalk(input, ruleName));
}

function parseTreeWalk(input, ruleName = 'translation') {
	const chars = new antlr4.InputStream(input);
	const lexer = new yagLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new yagParser(tokens);
	parser.buildParseTrees = true;
	const tree = parser[ruleName]();
	const myListener = new MASParser();
	// tokens.fill()
	// console.log(tokens.getTokens(0,tokens.getNumberOfOnChannelTokens())?.filter(x=>x.type==66).map(x=>x.text));

	antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
	return {
		"tree": tree,
		"parser": myListener
	}
}

// recursively constructs string template (raw, w/o interpolation)
function ctxTemplateRec(ctx) {
	if (!ctx) {
		return '';
	} else {
		let n = ctx.getChildCount();

		if (n == 0) {
			if (ctx.symbol.type == yagParser.ID) {
				// nullish coalescing to keep 0-values
				return `$\{this["${ctx.getText()}"] ?? "${ctx.getText()}"\}`;
			} else {
				return ctx.getText();
			}
		} else {
			// str concat and arr-push-join has almost the same performance
			let str_arr = [];
			for (let i = 0; i < n; i++) {
				str_arr.push(ctxTemplateRec(ctx.getChild(i)));
			}
			return str_arr.join(' ')
		}
	}
}

// returns a string template interpolation function
function ctxTemplateFunction(ctx) {
	let templateString = cleanUpStr(ctxTemplateRec(ctx));
	return new Function("return `" + templateString + "`;");
}


// auxiliary to ctxTemplateEval AST to stringTemplate procedure
function ctxTemplateEvalRec(ctx) {
	if (!ctx) {
		return '';
	} else {
		let n = ctx.getChildCount();

		if (n == 0) {
			if (ctx.symbol.type == yagParser.ID) {
				// nullish coalescing to keep 0-values
				return `this["${ctx.getText()}"]`;
			} else {
				return ctx.getText();
			}
		} else {
			// str concat and arr-push-join has almost the same performance
			let str_arr = [];
			for (let i = 0; i < n; i++) {
				str_arr.push(ctxTemplateEvalRec(ctx.getChild(i)));
			}
			return str_arr.join(' ')
		}
	}
}

// A faster alternative for an eval()
function ctxTemplateEval(ctx){
	let templateString = cleanUpStr(ctxTemplateEvalRec(ctx));
	return new Function("return (" + templateString + ");");
}

function stringWithContext(templateFunction, templateVars) {
	return templateFunction.call(templateVars);
}

function cleanUpStr(str) {
	return (
		str.replace(/\s\.\s/g, '\.')     // remove whitepaces around dot
			.replace(/[\s\,]*;/g, ';')   // remove "hanging" whitespace before semi-colon
			.replace(/\s*\,/g, ',')      // remove whitespace preceeding the comma
			.replace(/\,+/g, ',')         // remove left-over commas
			.replace(/\s+(\?|\!)/g, '$1')	// remove whitespace preceeding ? or !
	)
}

function extractMax(q, priority) {
	if (q.size == 0) {
		DEBUG(`Attempting to extract from an empty queue`)
		return -1;
	}
	let max = [...q].reduce((a, b) => (priority[a] > priority[b] ? a : b));
	q.delete(max);
	return max;
}

// arr - array of arrays
function cartesianProduct(...arr){
    return arr.reduce(
        // acc initialized with first arr
        (acc, b) => acc.flatMap(
            d => b.map(
                e => [d, e].flat()
            )
        ),
    );
}


function arrayRange(from, to, inclusive = true){
	return Array.from({length: to - from + (inclusive ? 1 : 0)}, (k,v)=>v+from);
}

/**
 * 
 * @param {Array<String>} nodes 
 * @param {Array<Object>} edges 
 * @returns 
 */
function reachabilityMap(nodes, edges) {
	let n = nodes.length;
	let nodeToIndex = nodes.reduce((acc, el, ind) => (acc[el] = ind, acc), {});

	let adjMatrix = Array.from(Array(n), () => new Array(n).fill(0));

	edges.forEach(e => {
		let src = nodeToIndex[e.src];
		let trg = nodeToIndex[e.trg];
		adjMatrix[src][trg] = 1;
	})

	let d = adjMatrix;

	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				d[i][j] = d[i][j] || d[i][k] && d[k][j];
			}
		}
	}

	// clear out main diagonal
	for (let i = 0; i < n; i++) {
		d[i][i] = 0;
	}

	return nodes.reduce((acc, el, ind) => (
		acc[el] = d[ind].reduce((a, b) => a += b, 0),
		acc
	), {});
}

export default MASGraph;
export { MASGraph, approximateLocalDomain };