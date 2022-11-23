import yagParser from './YetAnotherGrammar/yagParser.js';
import { assignParseTree, ctxTemplateWithCallback, cleanUpStr } from './masParser.js';
import { cartesianProduct } from './utils.js';

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