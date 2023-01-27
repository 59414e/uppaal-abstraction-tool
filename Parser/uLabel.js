import yagParser from './YetAnotherGrammar/yagParser.js';
import { assignParseTree, ctxTemplateWithCallback, cleanUpStr, parseTreeWalk } from './masParser.js';
import { arrayClone, cartesianProduct } from './utils.js';
import { DEBUG } from '../simpleLogger.js';

const ULABEL_KINDS = ['select', 'guard', 'synchronisation', 'assignment'];

class ULabel {
	constructor(_content) {
		this.content = _content ?? '';
	}
	toString() {
		return this.content;
	}
}

// TODO: add lazy-load for all ULabel child classes
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
            this.selectors = new Set(Object.keys(this.pairs));

		} else {
			this.vars = new Set();
            this.selectors = null;
		}
	}

	computeChoiceSpace(){
		let arr = [];        
		for(const key in this.pairs){
			let max = eval(this.pairs[key].bound.bmax.getText());
			let min = eval(this.pairs[key].bound.bmin.getText());
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
        this.extended = false; // lazy-load properties on demand
	}
    
    get vars(){
        if(this.content!='' && !this.extended){
            DEBUG("trying to access AssignmentULabel vars before extending, running extend");
            this.extendProperties();
            return this.vars;
        }else{
            return new Set();
        }
    }

    get atomicVars(){
        if(this.content!='' && !this.extended){
            DEBUG("trying to access AssignmentULabel atomicVars before extending, running extend");
            this.extendProperties();
            return this.atomicVars;
        }else{
            return [];
        }
    }

    extendProperties(){
        Object.defineProperty(this, "atomicVars", {
            value: []
        })
        if (this.content.length > 0) {
			assignParseTree.call(this, this.content, AssignmentULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);

            let n = this.tree.getChildCount();
            
            this.atomic = [];
            
            // this.atomicVars = [];
            for(let i=0;i<n;i++){
                let ctx = this.tree.getChild(i);
                if(ctx?.ruleIndex === yagParser.RULE_assignment_stmt){
                    // DEBUG(`stmt = ${ctx.getText()}`)
                    this.atomic.push([
                        'stmt',
                        ctx,
                        ctx.lhs?.vid.getText(),
                        ctx.lhs?.dim ? ctxTemplateEval(ctx.lhs.dim) : '',
                        ctxTemplateEval(ctx.rhs),
                    ])
                    let temp = ctx.lhs?.vid.getText() ?? '';
                    // this.atomicVars.push(Object.keys(parseTreeWalk(ctx.getText() ?? '', 'assignment_stmt').parser._varOccurences) ?? []) // all variables from stmt
                    this.atomicVars.push(Object.keys(parseTreeWalk(ctx.getText() ?? '', 'assignment_stmt').parser._varOccurences).filter(x=>x!=temp) ?? []) // all variables from stmt except vid from LHS
                    // this.atomicVars.push(Object.keys(parseTreeWalk(ctx.rhs.getText() ?? '', 'expr').parser._varOccurences) ?? []) // only variables from RHS
                }else if(ctx?.ruleIndex === yagParser.RULE_fcall){
                    // DEBUG(`fcall = ${ctx.getText()}`)
                    this.atomic.push([
                        'fcall',
                        ctx,
                        ctx?.fid?.text,
                        ctx?.fargs ? ctxTemplateEval(ctx.fargs) : ''
                    ])
                    // DEBUG(`fid = ${ctx?.fid?.text}`)
                    // DEBUG(`fargs = ${ctx?.fargs?.getText()}`)
                    if(ctx?.fargs){
                        this.atomicVars.push(Object.keys(parseTreeWalk(ctx.fargs?.getText() ?? '', 'expr_list').parser._varOccurences) ?? [])
                    }else{
                        this.atomicVars.push([])
                    }
                    
                }
            }
			// flat list of (non-const) variable identifiers
			// this.vars = new Set(Object.keys(this.parser._varOccurences));
            Object.defineProperty(this, "vars", {
                value: new Set(Object.keys(this.parser._varOccurences) ?? [])
            })
		}
        this.extended = true;
    }

	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
        if(this.content=='' || Object.keys(ctxContext).length==0)return this.content;
        if(!this.extended)this.extendProperties();
		return this?.templateFunction.call(ctxContext) ?? '';
	}

    // toList(){
    //     if(!this.extended)this.extendProperties();
    //     return this.atomic?.map( ctx=>
    //         [ctx.lhs.vid.getText(), ctx.lhs?.dim?.getText(), ctx.rhs.getText()]
    //     )
    // }

    // ignores function calls
    // getParameters(exceptSet = new Set()){
    //     if(!this.extended)this.extendProperties();
    //     return this?.atomic?.flatMap(ctx=>{
    //         if(!exceptSet.has(ctx.lhs.vid.getText())){
    //             return Object.keys(parseTreeWalk(ctx.rhs.getText(), 'expr').parser._varOccurences)
    //         }else{
    //             return [];
    //         }
    //     }) ?? [];   
    // }


	// all needed dict keys must be present
	atomicEvalWithContext(ctxContextOrig = {}, inplace = true){
        if(!this.extended)this.extendProperties();
        let n = this.atomic.length;
        if(n==0)return;

        let ctxContext = inplace ? ctxContextOrig : Object.assign({}, ctxContextOrig); 
        // deep copy array if not inplace
        if(!inplace){
            for(const p in ctxContext){
                if(Array.isArray(ctxContext[p])){
                    ctxContext[p] = arrayClone(ctxContext[p]);
                }
            }
        }

        for(let i=0; i<n; i++){
            if(this.atomic[i][0]==='stmt'){
                // let ctx = this.atomic[i][1];
                let lhs = this.atomic[i][2];
                let dim = this.atomic[i][3];
                let rhs = this.atomic[i][4];
                if(dim){
                    ctxContext[lhs][dim.call(ctxContext)] = rhs.call(ctxContext)
                }else{
                    ctxContext[lhs] = rhs.call(ctxContext)
                }       
            }else if(this.atomic[i][0]=='fcall'){ // 
                // do nothing
            }else{
                console.error(`AssignmentULabel - unexpected type of atomic statement ${this.atomic[i][0]}`)
            }
		}
		// let n = this.pairs.length;
		// for(let i=0; i<n; i++){
		// 	if(this.pairs[i][1]){
		// 		ctxContext[this.pairs[i][0]][(this.pairs[i][1].call(ctxContext))] = (this.pairs[i][2].call(ctxContext))
		// 	}else{
		// 		ctxContext[this.pairs[i][0]] = (this.pairs[i][2].call(ctxContext))
		// 	}
		// }
		return ctxContext;		
	}
}

// must be in DNF (+ only `==` or `!=` operators)
class GuardULabel extends ULabel {
	static ruleName = 'dnf';
	constructor(_content) {
		super(_content);
        this.extended = false;
	}

    get vars(){
        if(!this.extended){
            // DEBUG("trying to access GuardULabel vars before extending, running extend");
            this.extendProperties();
        }
        return this.vars;
    }

    extendProperties(){
        Object.defineProperty(this, 'vars', {
            writable: true,
            enumerable: true,
            value: undefined
        })
        
        if (this.content.length > 0) {
			assignParseTree.call(this, this.content, GuardULabel.ruleName);
			this.templateFunction = ctxTemplateFunction(this.tree);
			this.templateEval = ctxTemplateEval(this.tree);
			
			// flat list of (non-const) variable identifiers
			this.vars = new Set(Object.keys(this.parser._varOccurences))
		} else {
			this.vars = new Set();
		}
    }

    // todo: add ctxContext param
    shortCircuit(){
        if(!this.extended){
            this.extendProperties();
        }
        // todo: add tautology evaluation (e.g., A || !A, A && !A)
        let n = this.tree.getChildCount();
        let res = false; // neutral element for disj
        for(let i=0;i<n;i++){
            let ctx = this.tree.getChild(i);
            // conj OR conj
            if(ctx?.ruleIndex == yagParser.RULE_conjuction){
                // literal AND literal
                let m = ctx.getChildCount();
                let conj_eval = true; // neutral element for conj
                for(let j=0;j<m;j++){
                    let curr = ctx.getChild(j);
                    if(curr?.ruleIndex == yagParser.RULE_literal){
                        try {
                            let short = (new Function("return " + curr.getText() + ";"))();
                            if(!short){
                                conj_eval = false; 
                                break;
                            }else{
                                continue; // while curr is true
                            }
                        }catch(error) {
                            conj_eval = undefined; 
                            continue;
                        }
                    }
                }
                if(conj_eval===false){  
                    continue; // while conjunctions are false
                }else if(conj_eval===true){
                    return true;
                }else{ 
                    res = undefined;
                    continue;
                }
            }
        }
        return res;
    }

	// call string interpolation on a template
	stringWithContext(ctxContext = {}) {
        if(!this.extended){
            this.extendProperties();
        }
		return this?.templateFunction.call(ctxContext) ?? '';
	}

	evalWithContext(ctxContext = {}){
        if(!this.extended){
            this.extendProperties();
        }
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

// returns a string template interpolation function
function ctxTemplateFunction(ctx) {
	// let templateString = cleanUpStr(ctxTemplateRec(ctx));
	let templateString = cleanUpStr(ctxTemplateWithCallback(ctx, (x)=>`$\{this["${x.getText()}"] ?? "${x.getText()}"\}`));
	return new Function("return `" + templateString + "`;");
}

// A faster alternative for an eval()
function ctxTemplateEval(ctx){
	// let templateString = cleanUpStr(ctxTemplateEvalRec(ctx));
	let templateString = cleanUpStr(ctxTemplateWithCallback(ctx, (x)=>`this["${x.getText()}"]`));
	return new Function("return (" + templateString + ");");
}

export default {};
export {
    ULABEL_KINDS, 
    SelectULabel, 
    GuardULabel, 
    SynchronisationULabel, 
    AssignmentULabel,
    ctxTemplateFunction
}