// ======================================================
// antlr4
import yagListener from "./YetAnotherGrammar/yagListener.js";
// ======================================================

export default class CustomListener1 extends yagListener{
    constructor(){
        super();

        // this.params = _params;

        // function ctx list
        this._flist = [];

        // variables ctx list
        this._vlist = [];

		// const vars {id:val}
		this._const_dict = {};

		// arrays identifiers {id:dim} (incl. chans and other types)
		this._arr_dict = {};

        // stmt ctx list
        this._stmtlist = [];

		this.lhs_vars = new Set();
		this.rhs_vars = new Set();

		// arr of pairs [lhs,rhs]
		this.assignment_list = [];
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
		// check if not local (i.e. within fdec)
		if(!this?.curr_fparams && !this?.curr_fparams?.length>=0){
			if(this.joinToString(ctx.getChild(0)?.getChild(0)) === 'const'){
				for(let ii = 1;ii<ctx.getChildCount();ii+=2){
					let pair = this.joinToString(ctx?.getChild(1)).split(' = ');
					this._const_dict[pair[0]] = pair[1];
					// console.log([pair[0], pair[1]])
				}
			}
		}
		
		this._temp_curr_vtype = this.joinToString(ctx.getChild(0))
	}

	// Exit a parse tree produced by yagParser#vdec_list.
	exitVdec_list(ctx) {
		delete this._temp_curr_vtype;
	}


	// Enter a parse tree produced by yagParser#vdec.
	enterVdec(ctx) {
        this._vlist.push(ctx);
		ctx._varType = this._temp_curr_vtype;
	}

	// Exit a parse tree produced by yagParser#vdec.
	exitVdec(ctx) {
		if(ctx.dim){
			this._arr_dict[ctx.vid.text]=this.joinToString(ctx.dim);
		}
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
		this.assignment_list.push([ctx.lhs,ctx.rhs])
	}

	// Exit a parse tree produced by yagParser#assignment_stmt.
	exitAssignment_stmt(ctx) {
		// console.log(this.joinToString(ctx.lhs)+':='+this.joinToString(ctx.rhs));
		this.getVarList(ctx.lhs).forEach(v=>{
			this.lhs_vars.add(v)
		});
		this.getVarList(ctx.rhs).forEach(v=>{
			this.rhs_vars.add(v)
		})
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

	// todo: fix err
	substiteCallback(ctx){
		return (dict)=>{
			this.substituteStr(ctx,dict)	
		}
	}

	// todo: change to a special instance of renameWithCallbackStr
	substituteStr(ctx,dict){
		if (!ctx) return '';
		let str_arr = [];
        let n = ctx.getChildCount();

		if(ctx.vid && dict.hasOwnProperty(ctx?.vid?.text)){
			str_arr.push(dict[ctx.vid.text])
		}else if (n == 0) {
			str_arr.push(ctx.getText())
        } else {
            for (let i = 0; i < n; i++) {
                str_arr.push(this.substituteStr(ctx.getChild(i),dict));
            }
        }
        return (
            cleanupStr(str_arr.join(' '))
        );
	}

	renameWithCallbackStr(ctx, cb){
		if (!ctx) return '';
		let str_arr = [];
        let n = ctx.getChildCount();

		if(ctx.vid){
			if(ctx.init){
				str_arr.push(ctx.vid.text)
			}else{
				str_arr.push(cb(ctx.vid.text))
			}
			for (let i = 1; i < n; i++) {
				str_arr.push(this.renameWithCallbackStr(ctx.getChild(i),cb));
			}
		}else{
			if (n == 0) {
				str_arr.push(ctx.getText())
			} else {
				for (let i = 0; i < n; i++) {
					str_arr.push(this.renameWithCallbackStr(ctx.getChild(i),cb));
				}
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