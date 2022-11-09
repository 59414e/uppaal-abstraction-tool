import * as xml2js from 'xml2js';
import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';
import { DEBUG, INFO, WARN } from '../simpleLogger.js';
// ======================================================

const ULABEL_KINDS = ['select', 'guard', 'synchronisation', 'assignment'];

class ULabel{
	constructor(_content){
		this.content = _content;
	}
	toString(){
		return this.content ?? '';
	}
}

class SelectULabel extends ULabel{
	static ruleName = 'select_label';
	constructor(_content){
		super(_content);
		if(_content.length>0){
			assignParseTree.call(this, _content, SelectULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences))
			this.vars = new Set(Object.keys(this.parser._varOccurences))

			// <ID> to <VtypeContext>
			this.pairs = this.tree.getTypedRuleContexts(yagParser.Select_pairContext).reduce((acc,pairCtx)=>(acc[pairCtx.vid.getText()] = pairCtx.range, acc),{})
		}else{
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext={}){
		return this?.templateFunction.call(ctxContext) ?? '';
	}	
}

class AssignmentULabel extends ULabel{
	static ruleName = 'assignment_label';
	constructor(_content){
		super(_content);
		
		if(_content.length>0){
			assignParseTree.call(this, _content, AssignmentULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences));
			// list of individual <Assignment_stmtContext> components
			this.atomic = this.tree.getTypedRuleContexts(yagParser.Assignment_stmtContext);
		}else{
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext={}){
		return this?.templateFunction.call(ctxContext) ?? '';
	}	
}

class GuardULabel extends ULabel{
	static ruleName = 'expr';
	constructor(_content){
		super(_content);
		
		if(_content.length>0){
			assignParseTree.call(this, _content, GuardULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences))
		}else{
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext={}){
		return this?.templateFunction.call(ctxContext) ?? '';
	}	
}

class SynchronisationULabel extends ULabel{
	static ruleName = 'synchronisation_label';
	constructor(_content){
		super(_content);
		
		if(_content.length>0){
			assignParseTree.call(this, _content, SynchronisationULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);
			
			// channel name
			this.chan = this.tree.chan.vid.getText();
			// `!` - emanate, `?` - receive
			this.symb = this.tree.symb.text;
			// arguments/parameters (e.g. array indices)
			this.vars = new Set(Object.keys(this.parser._varOccurences).filter(n=>n!=this.tree.chan.vid.getText()))
		}else{
			this.vars = new Set();
		}
	}
	// call string interpolation on a template
	stringWithContext(ctxContext={}){
		return this?.templateFunction.call(ctxContext) ?? '';
	}	
}

const UPPER_APPROX = 1;
const LOWER_APPROX = 2;
const UNIVERSE_PLACEHOLDER = `*`;

// DomainApproximation is a mutable object, whose values are updated "in-place"
// If immutable (and refined by assigning a reference to a value returned by an union/intersection) garbage collector would need to be considered
class DomainApproximation{
	constructor(empty){
		this.vals = empty ? {} : UNIVERSE_PLACEHOLDER;
	}

	get size(){
		return this.vals === UNIVERSE_PLACEHOLDER ? Infinity : Object.keys(this.vals).length;
	}

	// _vals - other localDomain or arr of valueVectors
	cap(_vals){
		if(_vals===UNIVERSE_PLACEHOLDER)return;

		if(Array.isArray(_vals)){
			_vals = _vals.reduce((acc,v)=>(acc[v.join(',')]=v,acc),{})
		}

		if(this.vals===UNIVERSE_PLACEHOLDER){
			this.vals = _vals;
		}else{
			for(const key in this.vals){
				if(!_vals.hasOwnProperty(key)){
					delete this.vals[key];
				}
			}
		}
	}

	cup(_vals){
		if(this.vals===UNIVERSE_PLACEHOLDER || _vals===UNIVERSE_PLACEHOLDER){
			DEBUG(`Unexpected union on the <wildcard> "*" took place.`)
			this.vals = UNIVERSE_PLACEHOLDER;
		}else{
			if(Array.isArray(_vals)){
				_vals = _vals.reduce((acc,v)=>(acc[v.join(',')]=v,acc),{})
			}
			for(const key in _vals){
				this.vals[key] = _vals[key];
			}	
		}		
	}
}

const LCOLOR_WHITE = 1;
const LCOLOR_GREY = 2;
const LCOLOR_BLACK = 3;


export default class MASGraph {
    constructor(str){
        const xmlParser = new xml2js.Parser({
            trim:true // trim the whitespace at the beginning and end of text nodes
        });

        xmlParser.parseString(str, function (err, res) {
            // global declarations
            this.global = res.nta.declaration[0] ?? '';

			assignParseTree.call(this, this.global, 'translation')
			
            let agents = {};

            res.nta.template.forEach(t=>{
                let tname = t.name[0]?._ ?? t.name[0];
                
                // temp pointer to an agent graph/template
                let obj = {};

                obj.local = t.declaration[0] ?? '';

				assignParseTree.call(obj, obj.local, 'translation')

                // init location property is extracted outside to ensure consistency
                obj.init = t.init[0]?.$?.ref;
                
                obj.nodes = t.location.reduce( (acc, el)=>(
                    acc[el.$.id] = {
                        name: el.name?.[0]?._ ?? el.$.id, 
                        pos: {
                            x:el.$.x, 
                            y:el.$.y
                        },
                        edgesOut:[], 
                        edgesIn:[]  
                    },acc
                ), {});

                obj.parameter = t?.parameter?.[0] ?? '';

                obj.edges = t.transition?.map(t=>{
                    let e = {
                        src: t.source[0]?.$.ref,
                        trg: t.target[0]?.$.ref,
                        select: '',
                        guard: '',
                        assignment: '',
                        synchronisation: '',
						vars: new Set()
                    };

                    for(const l of t.label || []){
                        e[l.$.kind] = l._;
                    }

					e["select"] = new SelectULabel(e["select"]);
					e["guard"] = new GuardULabel(e["guard"]);
					e["assignment"] = new AssignmentULabel(e["assignment"]);
					e["synchronisation"] = new SynchronisationULabel(e["synchronisation"]);

                    // add entry for the out-/in-going edges
                    obj.nodes[e.src].edgesOut.push(e);
                    obj.nodes[e.trg].edgesIn.push(e);
                    
                    return e;
                })
                agents[tname] = obj;
            })
            this.agents = agents;
        }.bind(this))
    }
	

	//todo
	checkAssumptions(){
		// var name collisions/shadowing
	}

	//todo
	toExtended(){
		// let res = {};
		// let numberOfAgents = Object.keys(this.agents);
	}


	reduceToMayTemplate(tname){
		
	}

	reduceToMustTemplate(tname){

	}

	// always operates on an agent graph (either G_ext(MG) or G_template)
	approximateLocalDomain(params, approxType, targetTemplate){
		if(approxType!==UPPER_APPROX && approxType!==LOWER_APPROX){
			WARN(`Unrecognized approximation type ${approxType} was passed.`)
			return -1;
		}
		// todo: derive varType and varInit from varName

		let targetVars = params.vars;

		let agentNames = Object.keys(this.agents);
		if(agentNames.length!=1){
			WARN(`Can only approximate local domain for an ext. graph or template`);
			return -1;
		}
		

		let loc = agentNames[0].nodes;
		let edges = agentNames[0].edges;
		let locIni = agentNames[0].init;
		
		let priority = reachabilityMap(Object.keys(loc), this.agents.Voter.edges) ?? [];

		// compute adjList
		loc.forEach(l=>{
			adjList[l] = [...(new Set(l.edgesOut.map(e=>e.trg)))].filter(x=>x!=l);
		})

		// filter out edge labels, where target variables do not occur
		edges.forEach(edge=>{
			// blank by default
			ULABEL_KINDS.forEach(kind=>edge[kind].ignore=true)
			// use SelectULabel.ignore for input correctness check
			for(const el of targetVars){
				ULABEL_KINDS.forEach(kind=>{
					if(edge[kind].vars.has(el)){
						edge[kind].ignore = false;
					}
				})
			}
			edge.ignore = ULABEL_KINDS.reduce((acc,kind)=>acc&&edge[kind].ignore, true)
		})


		const startEmpty = (approxType === UPPER_APPROX);
		const approxOp = (approxType === UPPER_APPROX) ? 'cup' : 'cap';
		// maps <loc> with Object<string:vector>		
		let localDomain = loc.reduce((acc,el)=>(acc[el]=new DomainApproximation(startEmpty),acc),{});

		let pi = loc.reduce((acc,el)=>(acc[el]=new Set(),acc),{});
		let color = loc.reduce((acc,el)=>(acc[el]=LCOLOR_WHITE,acc),{});

		let q = new Set([locIni]);

		while(q.size!=0){
			let curr = extractMax(q, priority);
			
			// store previous cardinality value
			let cardinality = localDomain[curr].size;

			pi[curr].forEach(l=>processEdgesBetween(l,curr));
			if( cardinality != localDomain[curr].size ){
				color[curr] = LCOLOR_GREY;
			}

			while(true){
				// update the previous cardinality value
				cardinality = localDomain[curr].size;
				processEdgesBetween(curr,curr);
				if( cardinality != localDomain[curr].size ){
					color[curr] = LCOLOR_GREY;
				}else{
					// cardinality did not change, i.e. local domain approx. is stable
					break;
				}
			}
			
			if(color[curr] !== LCOLOR_BLACK){
				adjList[curr].forEach(l=>q.add(l));
				color[curr] = LCOLOR_BLACK;
			}
		}

		return localDomain;

		
		function processEdgesBetween(src, trg){
			src.edgesOut[trg].forEach(edge=>{
				DEBUG(`Processing an edge from ${src} to ${trg}`)
				if(edge.ignore){
					DEBUG(`edge.ignore flag - propagating the src's approximation`)
					
					localDomain[trg][approxOp](localDomain[src].vals);
				}
			})
		}
	}

    toXML(){
        // todo
    }
}






class MASParser extends yagListener{
    constructor(){
        super();

		this._varOccurences = {};

		// maps <ID> to its <VDEC> ctx
		this._varDeclarations = {}; // NOTE, it is disjoint with constDict
		
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
		if(ctx.parentCtx?._constant){
			// this.constDict[ctx.vid.getText()] = ctx;
			this.constDict[ctx.vid.getText()] = ctx.init.getText();
		}else{
			this._varDeclarations[ctx.vid.getText()] = ctx;
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

		if(!this._varOccurences.hasOwnProperty(id)){
			this._varOccurences[id] = [ctx];
		}else{
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
		if(ctx?.constant){
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
function assignParseTree(input, ruleName){
	({tree:this.tree, parser:this.parser} = parseTreeWalk(input, ruleName));
}

function parseTreeWalk(input, ruleName = 'translation'){
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
function ctxTemplateRec(ctx){
	if (!ctx){ 
		return '';
	}else{
		let n = ctx.getChildCount();

		if(n==0){
			if(ctx.symbol.type == yagParser.ID){
				// nullish coalescing to keep 0-values
				return `$\{this["${ctx.getText()}"] ?? "${ctx.getText()}"\}`; 
			}else{
				return ctx.getText(); 
			}
		}else{
			// str concat and arr-push-join has almost the same performance
			let str_arr = []; 
			for(let i=0;i<n;i++){
				str_arr.push(ctxTemplateRec(ctx.getChild(i)));
			}
			return str_arr.join(' ')
		}
	}
}

// returns a string template interpolation function
function ctxTemplateFunction(ctx){
	let templateString = cleanUpStr(ctxTemplateRec(ctx));
	return new Function("return `"+templateString +"`;");
}

function stringWithContext(templateFunction, templateVars){
	return templateFunction.call(templateVars);
}

function cleanUpStr(str) {
    return (
        str.replace(/\s\.\s/g, '\.')     // remove whitepaces around dot
            .replace(/[\s\,]*;/g, ';')   // remove "hanging" whitespace before semi-colon
            .replace(/\s*\,/g, ',')      // remove whitespace preceeding the comma
            .replace(/\,+/g,',')         // remove left-over commas
    )
}

function extractMax(q, priority){
	if(q.size==0){
		DEBUG(`Attempting to extract from an empty queue`)
		return -1;
	}
	let max = [...q].reduce((a,b)=>(priority[a] > priority[b] ? a : b));
	q.delete(max);
	return max;
}

function reachabilityMap(nodes, edges){
	let n = nodes.length;
	let nodeToIndex = nodes.reduce((acc,el,ind)=>(acc[el]=ind, acc), {});

	let adjMatrix = Array.from(Array(n), ()=>new Array(n).fill(0));
	edges.forEach(e=>{
		let src = nodeToIndex[e.src];
		let trg = nodeToIndex[e.trg];
		adjMatrix[src][trg] = 1;
	})

	let d = adjMatrix;

	for(let k=0;k<n;k++){
		for(let i=0;i<n;i++){
			for(let j=0;j<n;j++){
				d[i][j] = d[i][j] ||  d[i][k] && d[k][j];
			}
		}
	}

	 // clear out the diagonal
	for(let i=0;i<n;i++){
		d[i][i] = 0;
	}


	return nodes.reduce((acc,el,ind)=>(
		acc[el]=d[ind].reduce((a,b)=>a+=b,0),
		acc
	),{});
}

