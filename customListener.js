// build-in libs

// antlr4
import yagListener from "./YetAnotherGrammar/yagListener.js";

// custom libs/files
import CONFIG from "./config.js";

// ======================================================

export default class CustomListener extends yagListener{
    constructor(_params){
        super();

        this.params = _params;

        // function ctx list
        this._flist = [];

        // variables ctx list
        this._vlist = [];

        // stmt ctx list
        this._stmtlist = [];
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
        this._vlist.push(ctx);
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
        // add reference to this function ctx
        this._flist.push(ctx);

        // initialize the temporary variable for the current function's parameters
        this.curr_fparams = [];
        
        // create a temporary (non-local) variables list copy
        this._vlist_copy = this._vlist;

        // re-use vlist to store local scope variables (until exitFdec)
        this._vlist = [];
	}

	// Exit a parse tree produced by yagParser#fdec.
	exitFdec(ctx) {
        // local variables of a function
        ctx._fvars = this._vlist;

        // copy the parameters from a temporary variable and delete the latter
        ctx._fparams = [...this.curr_fparams];
        delete this.curr_fparams;

        // get back to original behaviour of vlist - storing global scope variables
        this._vlist = this._vlist_copy;
        delete this._vlist_copy;

        // generate the string of the abstract (copy of a) function with assumed values
        ctx._assumeFdecText = cleanupStr(
            [
                this.joinToString(ctx.ret),
                `_` + ctx.fid.text + `__${this.params.myHash}`,
                '(',
                [
                    this.joinToString(ctx.params),  // existing parameters
                    ...this.params.argsR             
                        .map(v =>{
                            let localScope = (ctx._fparams || []).concat(ctx._fvars);
                            if(localScope.indexOf(v) != -1){
                                return `int __shadowed`;
                            }else{
                                return `int ${v}`;
                            }
                        })
                ].filter(str => str != '').join(', '),
                ')',
                this.joinToString(ctx.bl)
            ].join(' ')
        )
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
        this.curr_fparams.push(ctx.pid.text)
	}


	// Enter a parse tree produced by yagParser#block.
	enterBlock(ctx) {
	}

	// Exit a parse tree produced by yagParser#block.
	exitBlock(ctx) {
	}


	// Enter a parse tree produced by yagParser#statement.
	enterStatement(ctx) {
        this._stmtlist.push(ctx);
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
        if(ctx.vid){
            ctx._vars = [ctx.vid.text];
        }
	}

	// Exit a parse tree produced by yagParser#expr.
	exitExpr(ctx) {
        // substitute var identifier if in argsR
        if(ctx.vid){
            ctx._aText = ctx.vid.text;
            if(this.params.argsR.indexOf(ctx._aText) !== -1){
                ctx._aText = this.params.abstractVarNameOf(ctx._aText);
            }
        }

        // substitute f-n call by an extended (abstract) one
        if(ctx.fid){
            ctx._aText = this.params.abstractFunCallOf(ctx.fid.text)
        }
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


    //======================================================

    
    joinToString(ctx) {
        if (!ctx) return '';

        let str_arr = [];
        let n = ctx.getChildCount();
        if (n == 0) {
            str_arr.push(ctx.getText())
        } else {
            for (let i = 0; i < n; i++) {
                str_arr.push(this.joinToString(ctx.getChild(i)));
            }
        }

        return (
            cleanupStr(str_arr.join(' '))
        );
    }

    // for stmt/expr parsing only
    joinToAText(ctx) {
        if (!ctx) return '';
        if (typeof ctx._aText !== 'undefined') return ctx._aText;

        let str_arr = [];

        let n = ctx.getChildCount();
        if (n == 0) {
            if (ctx._aText) {
                str_arr.push(ctx._aText)
            } else {
                str_arr.push(ctx.getText())
            }
        } else {
            for (let i = 0; i < n; i++) {
                str_arr.push(this.joinToAText(ctx.getChild(i)));
            }
        }

        return (
            cleanupStr(str_arr.join(' '))
        );
    }

    getVarList(ctx) {
        if (typeof ctx._vars === 'undefined') {
            ctx._vars = new Set();
            for (let i = 0; i < ctx.getChildCount(); i++) {
                // ctx.vars = new Set([...ctx.vars, ...this.getVarList(ctx.getChild(i))])
                this.getVarList(ctx.getChild(i)).forEach(el => ctx._vars.add(el));
            }
        }
        return [...ctx._vars];
    }

}


function cleanupStr(str) {
    return (
        str.replace(/\s\.\s/g, '\.')     // remove whitepaces around dot
            .replace(/[\s\,]*;/g, ';')   // remove "hanging" whitespace before semi-colon
            .replace(/\s*\,/g, ',')      // remove whitespace preceeding the comma
            .replace(/\,+/g,',')         // remove left-over commas
    )
}


if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};