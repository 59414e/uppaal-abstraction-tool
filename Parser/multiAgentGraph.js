import * as xml2js from 'xml2js';
import fs from 'fs';
import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';
import { DEBUG, ERRR, WARN } from '../simpleLogger.js';
import { INT16_MIN, INT16_MAX, MASParser, parseTreeWalk, ctxTemplateWithCallback, assignParseTree, cleanUpStr } from './masParser.js';
import { ULABEL_KINDS, SelectULabel, GuardULabel, SynchronisationULabel, AssignmentULabel, ctxTemplateFunction} from './uLabel.js';
import { cartesianProduct, arrayRange, arrayClone } from './utils.js';

// ======================================================
const UPPER_APPROX = 1;
const LOWER_APPROX = 2;
const UNIVERSE_PLACEHOLDER = `*`;

function mapUnion(trg, donor){
	if(trg.has(UNIVERSE_PLACEHOLDER)){
		DEBUG(`Unexpected union on the <wildcard> "*" took place.`)
	}else{
		if(Array.isArray(donor)){
			donor.forEach(entry=>{
				let key = entry.join(',');
				if(!trg.has(key))trg.set(key, entry)
			})
		}else{
			donor.forEach((val,key)=>{
				if(!trg.has(key))trg.set(key, val)
			})
		}
	}
	return trg;
}

function mapIntersection(trg, donor){
	if(trg.has(UNIVERSE_PLACEHOLDER)){
		trg.delete(UNIVERSE_PLACEHOLDER)
		return mapUnion(trg,donor)
	}else if(donor === UNIVERSE_PLACEHOLDER || donor?.has(UNIVERSE_PLACEHOLDER)){
		return trg;
	}else{
		if(Array.isArray(donor)){
			let candidates = new Set(donor.map(entry=>entry.join(',')));
			trg.forEach((val,key,map)=>{
				if(!candidates.has(key))map.delete(key)
			})
		}else{
			trg.forEach((val,key,map)=>{
				if(!donor.has(key))map.delete(key)
			})
		}
		return trg;
	}
}

// class AgentGraph{
// 	constructor(){
// 		this.nodes = {};
// 		this.edges = [];
// 	}

// 	fromXML(obj){
		
// 	}

// 	setLocal(_local){
// 		this.local = _local;
// 		assignParseTree.call(this, this.local, 'translation')
// 	}
// }

const LCOLOR_WHITE = 1;
const LCOLOR_GREY = 2;
const LCOLOR_BLACK = 3;

class MASGraph {
	constructor(){
		this.global = ''
		this.agents = {};
		this._consumedConst = false;
	}

	setGlobalDeclarations(_global){
		this.global = _global;
		assignParseTree.call(this, this.global, 'translation');
	}

	setLocalDeclarations(_local, agentName){
		let agent = this.agents[agentName];
		agent.local = _local ?? '';
		assignParseTree.call(agent, agent.local, 'translation');
	}

	fromString(str) {
		const xmlParser = new xml2js.Parser({
			trim: true // trim the whitespace at the beginning and end of text nodes
		});
		
		xmlParser.parseString(str, function (err, res) {
			// global declarations
			this.setGlobalDeclarations(res.nta.declaration[0] ?? '')
			// this.global = res.nta.declaration[0] ?? '';
			// assignParseTree.call(this, this.global, 'translation')

			let agents = {};

			res.nta.template.forEach(t => {
				let tname = t.name[0]?._ ?? t.name[0];

				// temp pointer to an agent graph/template
				let obj = {};

				obj.local = t.declaration[0] ?? '';

				assignParseTree.call(obj, obj.local, 'translation')
				
				// t.constDict = Object.assign({}, obj.parser.constDict, this.parser.constDict);

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
					
			DEBUG(`${a} had ${t.edges.length} edges`);
			t.edges = t.edges.flatMap(e=>{
				if(e.select?.content){
					let res = [];
					let choices = e.select.computeChoiceSpace();
					DEBUG(`${Object.keys(e.select.pairs).join(',')} has following choices:`);
					DEBUG(choices);
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
			DEBUG(`${a} has ${t.edges.length} edges`);
			
		}
		if(updateEdgesTo)this.updateEdgesToForAll();
	}

	unfoldGuardEdges(updateEdgesTo = true){
		// disjunction terms
		for(const a in this.agents){
			let t = this.agents[a];
			t.edges = t.edges.flatMap(e=>{
				if(e.guard?.content){
					let res = [];
					let disjunctiveTerms = e.guard.content.split('||');
					console.log(disjunctiveTerms)
					for(let conj of disjunctiveTerms){
						res.push({
							src: e.src,
							trg: e.trg,
							select: new SelectULabel(e.select?.content ?? ''),
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
		if(updateEdgesTo)this.updateEdgesToForAll();
	}
	

	unfoldTparamEdges(updateEdgesTo = true){
		// unfold the tparams (i.e., substitute their occurences with literals)
		for(const a in this.agents){
			let t = this.agents[a];

			if(!t.tparam){
				DEBUG(`Agent ${a} has no tparams`);
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
						let taparamValues = arrayRange(Number(t.tparam[tparamName][0]), Number(t.tparam[tparamName][1]))
						
						for(let tparamVal of taparamValues){
							let ctxContext = {
								[tparamName]:tparamVal
							}
							// console.log(e["assignment"].content);
							res.push({
								src: e.src,
								trg: e.trg,
								select: new SelectULabel(e.select?.content ?? ''),
								guard: e["guard"].content ? new GuardULabel(`${tparamName}==${tparamVal} && ${e["guard"].stringWithContext(ctxContext)}`) : new GuardULabel(`${tparamName}==${tparamVal}`),
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
				if(e.guard?.content){
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
								guard: e["guard"].content ? new GuardULabel(`${tparamName}==${tparamVal} && ${e["guard"].stringWithContext(ctxContext)}`) : new GuardULabel(`${tparamName}==${tparamVal}`),
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

	// todo[6]: invoke on demand for .edgesTo (when not up-to-date)
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


	// TOFIX: add tparam parsing
	toXML() {
		let str = 
`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
    <declaration>${escapeHtml(cleanUpStr(this.global))}</declaration>`
		for(const a in this.agents){
			let agent = this.agents[a];
			str += `
	<template>
		<name>${a}</name>`
			if(agent.tparam){
				str+=`
		<parameter>`
				let tempArr = [];
				for(const x in agent.tparam){
					tempArr.push(`int[${agent.tparam[x][0]},${agent.tparam[x][1]}] ${x}`)
				}
				str += tempArr.join(',')
				str+=`</parameter>`
			}
			str += `
		<declaration>${escapeHtml(cleanUpStr(agent.local))}
		</declaration>`
			for(const n in agent.nodes){
				str+=`
		<location id="${n}"${agent.nodes[n].pos.x ? " x=\""+agent.nodes[n].pos.x+"\"" : ''}${agent.nodes[n].pos.y ? " y=\""+agent.nodes[n].pos.y+"\"" : ''}>
			<name>${agent.nodes[n].name}</name>
		</location>`
			}
			str += `
		<init ref="${agent.init}"/>`
			for(const e of agent.edges){
				str+=`
		<transition>
			<source ref="${e.src}"/>
			<target ref="${e.trg}"/>`
				ULABEL_KINDS.forEach(kind=>{
					if(e[kind]?.content){
						str+=`
				<label kind="${kind}">${escapeHtml(cleanUpStr(e[kind].content))}</label>`
					}
				})
				str+=`
		</transition>`
			}
			str+=`
	</template>`
		}

		str+=`
	<system>
		system ${Object.keys(this.agents).join(',')};
    </system>
    <queries>
        <query>
            <formula></formula>
            <comment></comment>
        </query>
    </queries>
</nta>`
		return str;
	}

	// (temp) for debug
	printEdges(){
		for(const a in this.agents){
			console.log(`Agent ${a}`);
			console.group();
			this.agents[a].edges.forEach(e => {
				console.log(`${e.src} --[${e.select?.content ? e.select.content+' ' : ''} ${e.guard?.content || 'T'} : ${e?.synchronisation?.content ?? ''}${e.assignment?.content || '_'} ]-> ${e.trg}`)
			});
			console.groupEnd();
		}
	}


	consumeConst(userDefined){
		// can be consumed only once (even if new userDefined dict is provided)
		if(this?._consumedConst)return;
		
		let constDict = this.parser.constDict;
		
		// hook for (possible) future use
		if(typeof userDefined !== 'undefined'){
			constDict = Object.assign({}, constDict, userDefined)
		}

		let updatedGlobal = substituteConsts(this.tree, constDict);
		this.setGlobalDeclarations(updatedGlobal);

		// merge local consts and make required (unshadowed) substitutions
		for(const a in this.agents){
			let t = this.agents[a]; // reference to template

			// todo[6]: omit assigning `tconstDec` if model is free of local const declarations
			// let tconstDict = Object.assign({}, constDict, t.parser.constDict);
			
			let tconstDict;
			if(t?.parser?.constDict && Object.entries(t.parser.constDict).length !== 0){
				tconstDict = Object.assign({}, constDict, t.parser.constDict);
			}else{
				tconstDict = constDict;
			}
			t.local = substituteConsts(t.tree, tconstDict);
			assignParseTree.call(t, t.local, 'translation');
			
			// substitute bounded int range in tparam (if any)
			for(const k in t.tparam){		
				[0,1].forEach(ind => {
					let x = t.tparam[k][ind];
					
					// temporary fix
					if(isNaN(x)){
						Object.entries(tconstDict).forEach(([k,v])=>{
							x = x.replace(k,v)
						})
					}
					t.tparam[k][ind] = eval(x);

					// if(isNaN(x) && tconstDict.hasOwnProperty(x)){
					// 	t.tparam[k][ind] = tconstDict[x];
					// }	
				});
			}

			t.edges = t.edges.map(e=>edgeWithContext(e, tconstDict))
		}

		this._consumedConst = true;
		this.updateEdgesToForAll();
	}
}

function printEdge(e, inline=true){
	// let str = `${e.src} --[ ${e.select?.content ? e.select.content+' . ' : ''} ${e.guard?.content || 'T'} : ${e?.synchronisation?.content ?? ''}${e.assignment?.content || '_'} ]-> ${e.trg}`;
	let str = `${e.src} --[` + 
		'\x1b[33m' + `${e.select?.content ? e.select.content+'. ' : ''}` + 
		'\x1b[32m' + `${e.guard?.content || 'T'}: ` + 
		'\x1b[36m' + `${e?.synchronisation?.content ? (e.synchronisation.content + ' ') : ''}` +
		'\x1b[34m' + `${e.assignment?.content || '_'}` +
		'\x1b[0m'  + `]-> ${e.trg}`;
	if(inline){
		str = str.replace(/[\s]+/g, ' ');
	}
	console.log(str)
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

	let agentNames = Object.keys(masGraph.agents);
	let targetAgent = params.targetTemplate ? masGraph.agents[params.targetTemplate] : masGraph.agents[agentNames[0]];

	// console.log(targetAgent);
	

	let loc = targetAgent.nodes; // <locID> to <location> dict
	let locNames = Object.keys(loc);

	let edges = targetAgent.edges;	// edge array
	let locIni = targetAgent.init;	// loc ID

	// template-based approximation (i.e., NOT instance-based)
	if (params.targetTemplate) {
		// params.targetVars must be local variables
		if(!targetVars.reduce((acc, v)=>acc && targetAgent.parser._varDeclarations.hasOwnProperty(v), true)){
			WARN(`For template-based approximation, target variables must be owned by the target template!`)
			return -1;
		}

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
	for(const p in masGraph.parser?.varDecDom){
		masGraph.parser.varDecDom[p].range = [eval(masGraph.parser.varDecDom[p].range[0]),eval(masGraph.parser.varDecDom[p].range[1])]
		// masGraph.parser.varDecDom[p].dim = eval(masGraph.parser.varDecDom[p].dim);
		masGraph.parser.varDecDom[p].dim = (''+masGraph.parser.varDecDom[p].dim).split(/[\]\[]+/).filter(x=>x).map(a=>eval(a)).reduce((acc,el)=>acc*Number(el), 1)
	}

	for(const p in targetAgent.parser?.varDecDom){
		targetAgent.parser.varDecDom[p].range = [eval(targetAgent.parser.varDecDom[p].range[0]),eval(targetAgent.parser.varDecDom[p].range[1])]
		targetAgent.parser.varDecDom[p].dim = eval(targetAgent.parser.varDecDom[p].dim);
	}

	// targetAgent's local variables (except parameter) together with global ones
	let varDomainView = Object.assign({}, masGraph?.parser?.varDecDom, targetAgent?.parser?.varDecDom)
	
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
			varDomainView[v] = arrayRange(Number(targetAgent.tparam[v][0]), Number(targetAgent.tparam[v][1]));
		}
	}

	// fs.writeFileSync('./output_files/temp.txt', JSON.stringify(varDomainView, null, 4))
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
		console.log(edge.vars);
		console.log(varDomainView);
		edge.paramSpaceSize = [...edge.vars].reduce((acc,el)=>(acc*varDomainView[el].length), 1)
	})

	
	const approxOp = (approxType === UPPER_APPROX) ? mapUnion : mapIntersection;
	
	// maps <loc> with Object<string:vector>		
	let localDomain = 
	approxType === UPPER_APPROX ? 
	locNames.reduce(
		(acc, el) => (
			acc[el] = new Map(),
			acc),
		{}
	) :
	locNames.reduce(
		(acc, el) => (
			acc[el] = new Map(UNIVERSE_PLACEHOLDER),
			acc),
		{}
	) ;

	localDomain[locIni].set(params.initVal.join(','), [...params.initVal])
	

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
	
	
	return Object.entries(localDomain);


	function processEdgesBetween(src, trg) {
		if (!loc[src].edgesTo.hasOwnProperty(trg)) {
			return;
		}
		
		loc[src].edgesTo[trg].forEach(edge => {
			DEBUG(`Processing an edge from ${src} to ${trg}`)
			if (edge.ignore) {
				DEBUG(`edge.ignore flag - propagating the src's approximation`)
				approxOp(localDomain[trg], localDomain[src]);
			}else{
				// assuming unfolded edges
				let prodSize = edge.paramSpaceSize;
				let res = {};
				
				for(const currVec of localDomain[src].values()){
					let ctxContext = {};

					// fill vars from ld
					for(const v of targetVars){
						ctxContext[v] = currVec[targetVarIndexOf[v]];
						// if array - make its copy to avoid changing the original values
						if(Array.isArray(ctxContext[v])){
							ctxContext[v] = arrayClone(ctxContext[v]);
						}
					}

					// fill remaining vars
					for(let i=0;i<prodSize;i++){
						let edgeContext = Object.assign({}, ctxContext);
						
						let k = i;
						
						for(const v of edge.vars){
							let l = varDomainView[v].length;
							edgeContext[v] = varDomainView[v][k%l];
							if(Array.isArray(edgeContext[v])){
								edgeContext[v] = arrayClone(edgeContext[v]);
							}
							k=Math.floor(k/l);
						}
						
						
						if(!edge.guard.ignore && !edge.guard.evalWithContext(edgeContext)){						
							continue;
						}
						if(!edge.assignment.ignore){
							edge.assignment.atomicEvalWithContext(edgeContext)
							let tmpVec = targetVars.map(v=>edgeContext[v]);
							res[tmpVec.join(',')] = tmpVec;
						}else{
							// [changed on 10.01] - propagate the result from the guard
							let tmpVec = targetVars.map(v=>edgeContext[v]);
							res[tmpVec.join(',')] = tmpVec;
						}
					}	
				}

				if(Object.keys(res).length!=0){
					approxOp(localDomain[trg],Object.values(res));
				}
			}
		})
	}
}


function substituteConsts(tree, dict){
	if(!tree)return '';
	let str_arr = [];
	let n = tree.getChildCount();
	for(let i=0;i<n;i++){
		let curr = tree.getChild(i);
		// remove const declarations
		if(curr?.type?.constant){
			// DEBUG(`Consumed const declaration: "${curr.getText()}"`);
			continue;
		}
		// substitute const occurences
		str_arr.push( ctxTemplateWithCallback(curr, (x)=> dict[x.getText()] ?? x.getText()) )
	}
	// newly formed string
	return cleanUpStr(str_arr.join('\n'));
}

function prependVarIds(tree, prefix){
	return ctxTemplateWithCallback(tree, (x)=>(prefix + x.getText()))
}

// in-place computation
function unfoldTemplates(mg){
	let agentNames = Object.keys(mg.agents);
	let numberOfAgents = Object.keys(mg.agents).length;
	let agents = {}

	let constDict = mg.parser.constDict;
	let sharedVars = Object.keys(mg.parser._varDeclarations).reduce((acc,x)=>(acc[x]=1,acc),{});
	// let sharedVars = new Set(Object.keys(this.parser._varDeclarations));

	let global = substituteConsts(mg.tree, constDict);

	
	// extract constants and remove+substitute tparam occurrences
	for(const a in mg.agents){
		let t = mg.agents[a];

		let tconstDict;
		if(t?.parser?.constDict){
			tconstDict = Object.assign({}, constDict, t.parser.constDict);
		}else{
			tconstDict = Object.assign({}, constDict);
		}

		t.local = substituteConsts(t.tree, tconstDict);
		// todo[1]: check if substitution is desired
		assignParseTree.call(t, t.local, 'translation')
		
		if(!t.tparam){
			agents[a] = t;
			t.edges = t.edges.map(e=>{
				let res = {
					"src": e.src,
					"trg": e.trg,
					"select": new SelectULabel(e["select"]?.content ? e["select"].stringWithContext(tconstDict) : ''),
					"guard": new GuardULabel(e["guard"]?.content ? e["guard"].stringWithContext(tconstDict) : ''),
					"synchronisation": new SynchronisationULabel(e["synchronisation"]?.content ? e["synchronisation"].stringWithContext(tconstDict) : ''),
					"assignment": new AssignmentULabel(e["assignment"]?.content ? e["assignment"].stringWithContext(tconstDict) : ''),
				}
				return res;
			})
			continue;
		}

		
		let tparamNames = Object.keys(t.tparam);
		let tparamRanges = tparamNames.map(p=>{
			let left = constDict.hasOwnProperty(t.tparam[p][0]) ? constDict[t.tparam[p][0]]: t.tparam[p][0];
			let right = constDict.hasOwnProperty(t.tparam[p][1]) ? constDict[t.tparam[p][1]]: t.tparam[p][1];
			return arrayRange(Number(left), Number(right));
		})
		// let tparamVals = cartesianProduct(tparamNames.map(p=>t.tparam[p]));
		let tparamVals = cartesianProduct(...tparamRanges);

		// DEBUG(`${a} is a template with parameters ${tparamNames.join(',')}:`)
		let i = 1;
		for(let tparamVal of tparamVals){
			let instanceName = `${a}_${i++}`;
			let obj = {};
			if(!Array.isArray(tparamVal))tparamVal = [tparamVal];
			let paramContext1 = tparamVal.reduce((acc,el,ind)=>(acc[tparamNames[ind]]=el,acc), {});
			paramContext1 = Object.assign({}, tconstDict, paramContext1)
			const handler = {
				get(target, prop, receiver) {
					if ( !paramContext1.hasOwnProperty(prop) && !sharedVars.hasOwnProperty(prop)) {
					  return instanceName + '_' + prop;
					}
					return Reflect.get(...arguments);
				  },
			}

			// dummy rename for local-scope variables
			const paramContext = new Proxy(paramContext1, handler)
			
			obj.local = substituteConsts(t.tree, paramContext);
			assignParseTree.call(obj, obj.local, 'translation')
			
			// obj.local = prependVarIds(obj.tree, instanceName+'_')
			// assignParseTree.call(obj, obj.local, 'translation')

			obj.nodes = Object.keys(t.nodes).reduce((acc,el)=>(
				acc[el] = {
					name: t.nodes[el].name,
					pos: {
						x: t.nodes[el].pos.x,
						y: t.nodes[el].pos.y
					},
					edgesTo:{}
				}, acc
			),{})

			obj.init = t.init;

			obj.tparam = null;

			obj.edges = t.edges.map(e=>{
				let res = {
					"src": e.src,
					"trg": e.trg,
					"select": new SelectULabel(e["select"]?.content ? e["select"].stringWithContext(paramContext) : ''),
					"guard": new GuardULabel(e["guard"]?.content ? e["guard"].stringWithContext(paramContext) : ''),
					"synchronisation": new SynchronisationULabel(e["synchronisation"]?.content ? e["synchronisation"].stringWithContext(paramContext) : ''),
					"assignment": new AssignmentULabel(e["assignment"]?.content ? e["assignment"].stringWithContext(paramContext) : ''),
				}
				return res;
			})

			agents[instanceName] = obj;
		}
	}

	mg.setGlobalDeclarations(global)
	mg.agents = agents;
	mg.updateEdgesToForAll();
	return mg;
}


// for the extended edges that originate from a non-synched local transition there is no need to re-initialize the labels with their parsing (thus merely pointers will be used)
function computeExtMAS(mg, keepLocationNames = true){
	let agentNames = Object.keys(mg.agents);
	let numberOfAgents = Object.keys(mg.agents).length;
	let xlocationChunks = {}; // maps extended location {string} to its components {Array.<string>}

	let xinitChunks = agentNames.map(t=>mg.agents[t].init); // extended initial location
	let xinit = xinitChunks.join(',')
	let xedges = [];

	let lidToName = Object.entries(mg.agents).map(([k,a])=>Object.keys(a.nodes).reduce((acc,lid)=>(acc[lid]=a.nodes[lid].name,acc),{}) )
	// let lidToName = agentNames.map(Object.keys(mg.agents[a].nodes).reduce((acc,lid)=>(acc[lid]=mg.agents[a].nodes[lid].name),{}));
	console.log(lidToName);
	
	
	xlocationChunks[xinit] = xinitChunks;
	let myq = [xinit];

	// extract/copy sync'd from edgesTo
	for(const a in mg.agents){
		for(const n in mg.agents[a].nodes){
			let syncEdges = {
				'?':{},
				'!':{}
			};
			for(const trg in mg.agents[a].nodes[n].edgesTo){
				for(const e of mg.agents[a].nodes[n].edgesTo[trg]){
					if(e.synchronisation?.content){
						let symb = e.synchronisation.symb;
						let chan = e.synchronisation.chan;
						if(syncEdges[symb].hasOwnProperty(chan)){
							syncEdges[symb][chan].push(e)
						}else{
							syncEdges[symb][chan] = [e]
						}
					}
				}
			}
			mg.agents[a].nodes[n].syncEdges = syncEdges;
		}
	}

	while(myq.length!=0){
		let xcurr = myq.shift();
		DEBUG(`current location ${xcurr}`)
		let chunks = xlocationChunks[xcurr];
		for(let i=0;i<numberOfAgents;i++){
			let currAgentGraph = mg.agents[agentNames[i]];
			let currAgentChunk = chunks[i];
			for(const trg in currAgentGraph.nodes[currAgentChunk].edgesTo){
				// equivalent to flatmat iteration over all outgoing edges
				// let xtrgChunks = chunks.map((el,ind)=> ind==i ? trg: el);
				let xtrgChunks = [...chunks];
				xtrgChunks[i] = trg;
				let xtrg = xtrgChunks.join(',');
				for(const e of currAgentGraph.nodes[currAgentChunk].edgesTo[trg]){
					if(e.synchronisation?.content){
						// todo[3]: introduce a filter to skip those
						continue;
					}else{
						xedges.push({
							"src": xcurr,
							"trg": xtrg, 
							"select": e.select,
							"synchronisation": e.synchronisation,
							"guard": e.guard,
							"assignment": e.assignment
						})
					}
				}
				// add trg to the list of locations if new
				if(!xlocationChunks.hasOwnProperty(xtrg)){
					DEBUG(`adding new location ${xtrg}`)
					xlocationChunks[xtrg]=xtrgChunks;
					myq.push(xtrg);
				}
			}
			
		}
		// process sync'd transitions
		for(let i=0;i<numberOfAgents;i++){
			let currAgentGraph = mg.agents[agentNames[i]];
			let currAgentChunk = chunks[i];
			
			for(let j=0;j<numberOfAgents;j++){
				if(i==j)continue;
				let otherAgentGraph = mg.agents[agentNames[j]];
				let otherAgentChunk = chunks[j];
				
				for(const chan in currAgentGraph.nodes[currAgentChunk].syncEdges['!']){
					
					if(otherAgentGraph.nodes[otherAgentChunk].syncEdges['?'].hasOwnProperty(chan)){
						let sndEdges = currAgentGraph.nodes[currAgentChunk].syncEdges['!'][chan];
						let rcvEdges = otherAgentGraph.nodes[otherAgentChunk].syncEdges['?'][chan];
						
						for(const e1 of sndEdges){
							for(const e2 of rcvEdges){
								let xtrgChunks = [...chunks];
								xtrgChunks[i] = e1.trg;
								xtrgChunks[j] = e2.trg;							
								let xtrg = xtrgChunks.join(',');

								let unformatttedLabels = ["select", "guard", "assignment"].reduce((acc,kind)=>{
									acc[kind] = [e1[kind].content, e2[kind].content].filter(x=>x.length);
									return acc;
								}, {})
								
								xedges.push({
									"src": xcurr,
									"trg": xtrg, 
									"select": new SelectULabel(unformatttedLabels["select"].join(',\n')),
									"synchronisation": '',
									"guard": new GuardULabel(unformatttedLabels["guard"].join(' && ')),
									"assignment": new AssignmentULabel(unformatttedLabels["assignment"].join(',\n'))
								})

								// add trg to the list of locations if new
								if(!xlocationChunks.hasOwnProperty(xtrg)){
									xlocationChunks[xtrg]=xtrgChunks;
									myq.push(xtrg);
								}
							}
						}
					}
				}
			}			
		}		
	}


	// parse results into a MASGraph instance

	let res = new MASGraph();
	res.setGlobalDeclarations(mg.global);

	

	let obj = {
		nodes: Object.keys(xlocationChunks).reduce((acc,el)=>(acc[el]={
			name: keepLocationNames ? el.split(',').map((x,i)=>lidToName[i][x]).join('_') :  el.replace(/\,/g,'_'), 
			pos:{}
		},acc),{}),
		edges: xedges,
		local: Object.keys(mg.agents).reduce((acc,a)=>(acc+=mg.agents[a].local), '')
	}
	assignParseTree.call(obj, obj.local, 'translation')
	obj.init = xinit;
	res.agents = {
		"ext": obj
	}
	
	return res;
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

function edgeClone(e, callbackOnLabel){
	return {
		'src':e.src,
		'trg':e.trg,
		"select": new SelectULabel(callbackOnLabel(e.select) ?? ''),
		"synchronisation": new SynchronisationULabel(callbackOnLabel(e.synchronisation) ?? ''),
		"guard": new GuardULabel(callbackOnLabel(e.guard) ?? ''),
		"assignment": new AssignmentULabel(callbackOnLabel(e.assignment) ?? '')
	}
}

function edgeWithContext(e, paramContext){
	return {
		"src": e.src,
		"trg": e.trg,
		"select": new SelectULabel(e["select"]?.content ? e["select"].stringWithContext(paramContext) : ''),
		"guard": new GuardULabel(e["guard"]?.content ? e["guard"].stringWithContext(paramContext) : ''),
		"synchronisation": new SynchronisationULabel(e["synchronisation"]?.content ? e["synchronisation"].stringWithContext(paramContext) : ''),
		"assignment": new AssignmentULabel(e["assignment"]?.content ? e["assignment"].stringWithContext(paramContext) : ''),
	}
}


function escapeHtml(str){
	return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}


/**
 * 
 * @param {Array.<string>} nodes 
 * @param {Array.<Object>} edges 
 * @returns {Object.<string,number>} maps node name to its reachability index
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
export { MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates, UPPER_APPROX, LOWER_APPROX, mapUnion, mapIntersection }