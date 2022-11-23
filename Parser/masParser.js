import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';

const INT16_MIN = -32768;
const INT16_MAX = 32767;

class MASParser extends yagListener {
	constructor() {
		super();

        // maps <ID> to <Var_Identifier> CTX
		this._varOccurences = {};

		// maps <ID> to its <VDEC> ctx
		this._varDeclarations = {}; // NOTE, it is disjoint with constDict
		this._constDeclarations = {}; 

		// maps <ID> to <{range, dim}>
        this.varDecDom = {};

        // maps <ID> to <INIT> value
		this.constDict = {};
	}

	// Enter a parse tree produced by yagParser#translation.
	enterTranslation(ctx) {
	}

	// Exit a parse tree produced by yagParser#translation.
	exitTranslation(ctx) {
	}

	// Enter a parse tree produced by yagParser#select_label.
	enterSelect_label(ctx) {
	}

	// Exit a parse tree produced by yagParser#select_label.
	exitSelect_label(ctx) {
	}


	// Enter a parse tree produced by yagParser#select_pair.
	enterSelect_pair(ctx) {
	}

	// Exit a parse tree produced by yagParser#select_pair.
	exitSelect_pair(ctx) {
	}


	// Enter a parse tree produced by yagParser#assignment_label.
	enterAssignment_label(ctx) {
	}

	// Exit a parse tree produced by yagParser#assignment_label.
	exitAssignment_label(ctx) {
	}


	// Enter a parse tree produced by yagParser#synchronisation_label.
	enterSynchronisation_label(ctx) {
	}

	// Exit a parse tree produced by yagParser#synchronisation_label.
	exitSynchronisation_label(ctx) {
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
			this.constDict[ctx.vid.getText()] = ctx.init?.getText() ?? null;
			this._constDeclarations[ctx.vid.getText()] = ctx;
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

// invoke with function.prototype.call method to 
function assignParseTree(input, ruleName) {
	({ tree: this.tree, parser: this.parser } = parseTreeWalk(input, ruleName));
}

// recursively constructs string template (raw, w/o interpolation)
function ctxTemplateWithCallback(ctx, cb) {
	if (!ctx) {
		return '';
	} else {
		let n = ctx.getChildCount();

		if (n == 0) {
			if (ctx.symbol.type == yagParser.ID) {
				// nullish coalescing to keep 0-values
				return cb(ctx);
			} else {
				return ctx.getText();
			}
		} else {
			// str concat and arr-push-join has almost the same performance
			let str_arr = [];
			for (let i = 0; i < n; i++) {
				str_arr.push(ctxTemplateWithCallback(ctx.getChild(i), cb));
			}
			return str_arr.join(' ')
		}
	}
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

export default MASParser;
export {
	INT16_MAX, 
	INT16_MIN, 
	MASParser, 
	parseTreeWalk, 
	assignParseTree,
	ctxTemplateWithCallback,
	cleanUpStr
};