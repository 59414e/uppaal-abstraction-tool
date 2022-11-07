import * as xml2js from 'xml2js';
import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';
// ======================================================

class ULabel{
	constructor(_content, _kind){
		this.content = _content;
		if(_content?.length>0){
			let ruleName = '';
			switch(_kind){
				case 'select':
					ruleName = 'select_label';
					break;
				case 'guard':
					ruleName = 'expr';
					break;
				case 'synchronisation':
					ruleName = 'synchronisation_label';
					break;
				case 'assignment':
					ruleName = 'assignment_label';
					break;
				default:
					console.warn(`Unexpected kind of label ${_kind}.`)
			}
			let {tree, parser} = parseTreeWalk(_content, ruleName);
			this.templateFunction = ctxTemplateFunction(tree);
		}
	}

	stringWithContext(ctxContext={}){
		return this?.templateFunction.call(ctxContext) ?? '';
	}

	toString(){
		return this?._content ?? '';
	}
}

const LABEL_KINDS = ['select', 'guard', 'synchronisation', 'assignment'];

export default class MASGraph {
    constructor(str){
        const xmlParser = new xml2js.Parser({
            trim:true // trim the whitespace at the beginning and end of text nodes
        });

        xmlParser.parseString(str, function (err, res) {
            // global declarations
            this.global = res.nta.declaration[0];
            let agents = {};

            res.nta.template.forEach(t=>{
                let tname = t.name[0]?._ ?? t.name[0];
                
                // temp pointer to an agent graph/template
                let obj = {};

                obj.local = t.declaration[0] ?? '';
                
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
                        synchronisation: ''
                    };

                    for(const l of t.label || []){
                        e[l.$.kind] = l._;
                    }

					LABEL_KINDS.forEach(kind=>{
						e[kind] = new ULabel(e[kind], kind);
					})

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

    toXML(){
        // todo
    }
}




class MASParser extends yagListener{
    constructor(){
        super();

		this.varOccurences = {};
		this.varDeclarations = {};
		this.constDict = {};
    }

	// Enter a parse tree produced by yagParser#file.
	enterFile(ctx) {
	}

	// Exit a parse tree produced by yagParser#file.
	exitFile(ctx) {
	}


	// Enter a parse tree produced by yagParser#translation.
	enterTranslation(ctx) {
	}

	// Exit a parse tree produced by yagParser#translation.
	exitTranslation(ctx) {
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
			// console.log(`${ctx.vid.text} is a const`)
			this.constDict[ctx.vid.text] = ctx;
		}else{
			this.varDict[ctx.vid.text] = ctx;
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


function parseTreeWalk(input, ruleName = 'translation'){
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();
    const myListener = new MASParser();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return {
        "tree": tree,
        "parser": myListener
    }
}


function ctxTemplateRec(ctx){
	if (!ctx){ 
		return '';
	}else{
		let n = ctx.getChildCount();
		if(n==0){
			// nullish coalescing to keep 0-values
			return `this[${ctx.getText()}] ?? "${ctx.getText()}"`; 
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
