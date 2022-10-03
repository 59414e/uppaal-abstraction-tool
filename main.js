/*
================================
Assumptions/Limitations:
- no struct support
- local domain cannot have multi-dim arrays (arrays for argsR will be added later) 
- no passing by reference for fdec
- myHash serves two purposes:
    1) it uniquely identifies (from timestamp) the instance of abstraction:
        - abstract (copies of) functions are appended with a `__<myHash>` suffix
        - local domain constants are appended with a `__<myHash>` suffix
        - useful to avoid name collisions if abstraction procedure gets repeated
    2) it is used as a name for selector_id (index of a local domain element), which is a bit shorter than writing `i_<myHash>`]

- no existing `__shadowed` vars or the ones with the `_myHash` suffix
================================
Template draft:

in declarations:
const int <LDE_namePrefix>_at_<location>[<sizeof d(location)>][<sizeof argsR>] = {...} // with no nested arrays
///
e.g.
const int __d_vals_at_id0[1][2] = {{0,0}};
///

void foo(params){...}
void foo__with_assume(params, argsR){...}

in select:
local_domain_val_i: ...

in guard/update:
...<var>...
...<LDE_namePrefix>_at_<location>[local_domain_val_i][argsR.indexOf(var)]...


================================
Prototype idea:
- get an input model
- parameters:
    - target template
    - local domain
    - argsR
    - argsN
    - mapping function
    - scope 
- abstract the local declarations (both vdec and fdec)
    - if argsR in f-n body, then append an abstract copy (two versions are needed as it could be the case that target var appears on the LHS)
- THEN process the edge labels 
    - if in scope - add the select label
    - for function call - add the renaming and append the arg
- append a typedef for each unique set of values in local domain (the type will be used for the select label range)

Extras:
- generating mapping template wrt selected parameters
- parse the declaration/initialization block 
    - to be refined for the scoped abstraction
- parse the edges
    - possibly adding the select label
    - possibly removing the edge (e.g., if abstract guard is always false)
- extract keywords/template for the reserved/generated identifier names to the config
================================
*/


// !!!
/*
TODO: filter out locations which are associated to an empty location domain (make sure, no int[0][3] lists are declared)

TODO: if only some variables are shadowed by a selector, then in an abstract expr/function those must be used IN PLAIN (w/o pointing to an ld element)

TODO: instead of reassigning the argsR - add a property argsR_shadowed (this will improve readability and ensure abscence of logical bugs)
*/
// !!!

// built-in
import * as fs from 'fs';
import * as path from 'path';

// third-party
import * as xml2js from 'xml2js';

import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagParser from './YetAnotherGrammar/yagParser.js';
import yagListener from './YetAnotherGrammar/yagListener.js';

// custom libs/files
import CONFIG from './config.js';
import UppaalXML from './uppaalxml.js';
import { timingSafeEqual } from 'crypto';
import { kStringMaxLength } from 'buffer';
import { triggerAsyncId } from 'async_hooks';


/*
================================
CustomListener supposed to return an information with proposed abstraction value and
if any of the target variables appeared on the LHS/RHS of the included statements
================================
*/
class MyCustomListener extends yagListener {
    constructor(__params) {
        super();
        this.params = __params;
        this.lhs_list = new Set();
        this.rhs_list = new Set();

        // unitility arr for handling the var shadowing (inside the fdec)
        this.scope_owner_stack = ['root'];
        this.scope_var_map = {
            'root': []
        }

        this.append_chunk = "";
        // this.curr_scope_owner = ()=>this.scope_owner_stack.reduce((acc,p)=>acc[p],this.scope_var_map);

        // auxiliary var (temp solution)
        // this.curr_params = [];

    }


    // gets the set (as array) of variable identifiers appearing in the subtree rooted at ctx 
    // (NOTE: varList might be not well-defined for the leaves)
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

    // returns common elements for two arrays (var sets)
    getCommonEles(a, b = this.params.argsR) {
        return a.filter(el => b.includes(el));
    }


    // Exit a parse tree produced by yagParser#expr.
    exitExpr(ctx) {
        if (ctx.vid) {
            ctx._vars = [ctx.vid.text];
            ctx._aText = ctx.vid.text; // check if needed (it should be safe to delete this and save memory)
            if (this.params.argsR.indexOf(ctx._aText) !== -1) {
                // ctx._aText = ctx._aText + '__assumed_val';
                ctx._aText = ldeVarNameOf(this.params.src, ctx._aText, this.params.argsR_orig);
            }
        }
        
        if (ctx.fid) {
            // ctx.fid._aText = ctx.fid.text + '__with_assume';
            ctx.fid._aText = ctx.fid.text + `__${myHash}`;
            ctx.fargs._aText = [
                this.joinToAText(ctx.fargs),
                ...(this.params.argsR_orig.map(x=> this.params.argsR.indexOf(x)!==-1 ? ldeVarNameOf(this.params.src,x,this.params.argsR_orig) : x))
            ].filter(str => str != '').join(', ');
        }
    }

     // Enter a parse tree produced by yagParser#assignment_stmt.
	enterAssignment_stmt(ctx) {
	}

	// Exit a parse tree produced by yagParser#assignment_stmt.
	exitAssignment_stmt(ctx) {
        // \begin{old}
            // // LHS-BASED DELETION WORKS WELL ONLY IF NO BACKWARDS DEPENDENT EDGES OR ARGS_N ARE PRESENT
            // let lhs = this.getVarList(ctx.lhs);
            // // if(lhs.length!==1){
            // //     console.log(`WRN? for "${this.joinToString(ctx)}" LHS = ${lhs.join(',')}`)
            // // }
            
            // // only consider first element (e.g. LHS for a[b][c] will have varlist = [a,b,c], but only a is important here)
            // if(this.getCommonEles([lhs[0]]).length!==0){
            //     // console.log(`## ${this.joinToString(ctx)} common eles = [${this.getCommonEles(lhs).join(',')}]`);
            //     ctx._aText = '';  // for plain labels - discard assignment to deleted
            // }
        // \end{old}
	
        // if (ctx.lhs) {
        //     this.getVarList(ctx.lhs).forEach(el => this.lhs_list.add(el));
        //     // this.lhs_list.add(this.getVarList(ctx.lhs))
        // }
        // if (ctx.rhs) {
        //     this.getVarList(ctx.rhs).forEach(el => this.rhs_list.add(el));
        //     // this.rhs_list.add(this.getVarList(ctx.rhs))
        // }
    }


    // Exit a parse tree produced by yagParser#vdec_list.
    exitVdec_list(ctx) {

    }
    // Enter a parse tree produced by yagParser#fdec.
    enterFdec(ctx) {
        // if(ctx.params)console.log(ctx.params.text)
        this.scope_owner_stack.unshift(ctx.fid.text);

        // init with empty array if does not 
        if (!this.scope_var_map[ctx.fid.text]) {
            this.scope_var_map[ctx.fid.text] = [];
        } else {
            console.log(`ERR? - more than one fdec of the name ${ctx.fid.text}`);
        }

        // console.log(this.joinToString(ctx));
    }

    // Enter a parse tree produced by yagParser#fparam.
    enterFparam(ctx) {
        this.pushToCurrScopeMap(ctx.pid.text)
    }

    // Exit a parse tree produced by yagParser#fparam.
    exitFparam(ctx) {
        this.curr_params.push(ctx.pid.text);
    }

    // Enter a parse tree produced by yagParser#fparam_list.
    enterFparam_list(ctx) {
        this.curr_params = [];
    }

    // Exit a parse tree produced by yagParser#fparam_list.
    exitFparam_list(ctx) {
        ctx.params_list = [...this.curr_params];
        delete this.curr_params;
    }


    // Exit a parse tree produced by yagParser#fdec.
    exitFdec(ctx) {
        // console.log('involved vars: ' + this.getVarList(ctx).join(', '));
        // todo: add checking if there is a need in abstract_function duplicate (i.e. if f-n does incl any of argsR variables)

        // console.log('fid: ' + ctx.fid.text);
        // console.log('params: ' + this.joinToString(ctx.params));
        // console.log('local vars: '+ this.scope_var_map[this.scope_owner_stack[0]].join(', '));

        this.scope_owner_stack.shift();

        // console.log("add from argsR (except already appearing in param list): " + [...this.params.argsR.filter(v=>(ctx?.params?.params_list || []).indexOf(v)==-1).map(v=>`int ${v}`)].join(', '));

        this.append_chunk += (
            '\n' +
            this.cleanupStr(
                [
                    this.joinToString(ctx.ret),
                    // ctx.fid.text + '__with_assume',
                    ctx.fid.text + `__${myHash}`,
                    '(',
                    [
                        this.joinToString(ctx.params),
                        ...this.params.argsR
                            .filter(v => (ctx?.params?.params_list || []) // argsR \setminus (vars from argsR that are already shadowed in params)
                                .indexOf(v) == -1).map(v => `int ${v}`)
                    ].filter(str => str != '').join(', '),
                    ')',
                    this.joinToString(ctx.bl)
                ].join(' ')
            )
        );

        // console.log(this.append_chunk);
        // console.log('params_x: ' + this.joinToString(ctx.params,1));
        // console.log('fdec_x: ' + this.joinToString(ctx,1));

        // let ctx_copy = JSON.parse(JSON.stringify(ctx));
        // console.log(ctx_copy.params)

        // this.append_chunk += [this.joinToString(ctx.params),...this.params.argsR.map(v=>`int ${v}`)].join(', ');
    }



    // Enter a parse tree produced by yagParser#vdec.
    enterVdec(ctx) {
        this.pushToCurrScopeMap(ctx.vid.text)
    }


    // Exit a parse tree produced by yagParser#vdec.
    exitVdec(ctx) {
        // console.log('@'+ctx.depth() + ': ' +this.joinToString(ctx));

        // ctx._vars = new Set();
        // if(ctx.vid){
        //     // this.lhs_list.add(ctx.vid.text);
        //     ctx.vars.add(ctx.vid.text);
        // }
        // if(ctx.dim){
        //     this.getVarList(ctx.dim).forEach(el=>this.rhs_list.add(el));
        // }
        // if(ctx.init){
        //     this.getVarList(ctx.init).forEach(el=>this.rhs_list.add(el));
        //     ctx.vars.add(ctx.vid.text);
        // }
        // ctx._vars = [...ctx.vars];
    }

    // Exit a parse tree produced by yagParser#arr_size.
    exitArr_size(ctx) {

    }


    // Enter a parse tree produced by yagParser#statement.
    enterStatement(ctx) {
    }

    // Exit a parse tree produced by yagParser#statement.
    exitStatement(ctx) {
    }
   

    // Exit a parse tree produced by yagParser#translation.
    exitTranslation(ctx) {
        // console.log(ctx.toStringTree());
        // console.log('@'+ctx.getTokens(yagParser.ID));
    }


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
            this.cleanupStr(str_arr.join(' '))
        );
    }

    joinToAText(ctx) {
        if (!ctx) return '';
        if (typeof ctx._aText !== 'undefined') return ctx._aText;
        // console.log(this.getVarList(ctx));
        // console.log(this.params.argsR);
        // let commonEles = this.getCommonEles(this.getVarList(ctx), this.params.argsR);

        // if(commonEles.length === 0){
        //     console.log("ZERO");
        //     return this.joinToString(ctx);
        // }

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
            this.cleanupStr(str_arr.join(' '))
        );
    }

    cleanupStr(str) {
        return (
            str.replace(/\s\.\s/g, '\.')     // remove whitepaces around dot
                .replace(/[\s\,]*;/g, ';')   // remove "hanging" whitespace before semi-colon
                .replace(/\s*\,/g, ',')      // remove whitespace preceeding the comma
                .replace(/\,+/g,',')         // remove left-over commas
        )
    }

    pushToCurrScopeMap(myvar) {
        this.scope_var_map[this.scope_owner_stack[0]].push(myvar)
    }

}


function uniqueInArray(arr) {
    return arr.filter(
        (value, index, self) =>
            self.map(el => el.toString()).indexOf(value.toString()) === index
    );
}

function getLocationNameToIdMap(model, name) {
    return model[name].location.reduce((acc, y) => (acc[y.name[0]._] = y.$.id, acc), {});
}


// read XML for the concrete model
const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
// get local domain from file
const localDomain = JSON.parse(fs.readFileSync(CONFIG.pathToInputMapping));
// fs.writeFileSync(CONFIG.pathToOutputModel, xmlInputString);

let model = new UppaalXML(xmlInputString);
const myHash = Date.now().toString(36); // a rand-ish string (might start with a number!!!)

// if scope given by names - convert to ids using loc2id map
const abstractionParams = {
    template: "Voter",
    scope: "*", // redundant? (i.e., can be derived from d property) [on the other hand, one might want to reuse the same mapping file for different scopes]
    val0: {
        mem_sg: 0,
        mem_vt: 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    argsN: [],
    f: function (args) {
        return 1;
    },
    d: localDomain
}

// strip unreachable locations from the scope
abstractionParams.scope = recomputeScope(model, abstractionParams);


function ldeVarName(locationId){
    // return `${CONFIG.LDE_namePrefix}_at_${locationId}`;
    return `${CONFIG.LDE_namePrefix}_at_${locationId}_${myHash}`;
}

function ldeVarNameOf(locationId, varName, argsR){
    return `${ldeVarName(locationId)}[${myHash}][${argsR.indexOf(varName)}]`;
}


function generatateAssignFunctionString(params){
    let str = `void _set_values_${myHash}(`;
    str += params.argsR.map(v=>`int _val_of_${v}`).join(', ');
    str += `){
        ${params.argsR.map(v=>v+'= _val_of_'+v+';').join('\n')}
    }`
}

// todo: extract bracket change into a function + declare an enum for the bracket types (i.e. square, curly, round)
function ldeConstVarDecString(params){
    let str = '';
    let varsLen = params.argsR.length;
    // for (let locationId in params.d) {
    for(let locationId of params.scope){
        let domLen = params.d[locationId].length;
        let domVal = JSON.stringify(params.d[locationId]).replace(/\[/g, '\{').replace(/\]/g, '\}');
        str += `const int ${ldeVarName(locationId)}[${domLen}][${varsLen}] = ${domVal};\n`
    }
    return str;
}

function recomputeScope(model, params){
    let llist = params.scope==="*" ? model.getLocationsOf(params.template) : params.scope.split(/,|;/);
    return llist.filter(l=>(typeof params.d[l] !== "undefined") && params.d[l].length!==0)
}



function bar(model, params) {
    let d = params.d; // local domain map

    // local domain const vars
    model.global = ldeConstVarDecString(params) + model.global;

    // abstract (copies of) function declarations
    model.global += generateAbstractionTranslation(model.global, params).append_chunk;
    model[params.template].local += generateAbstractionTranslation(model[params.template].local, params).append_chunk;
    // special "assigner" function (must be in local scope in case there are template vars shadowing the global ones)
    model[params.template].local += '\n' + generatateAssignFunctionString(params);

    // Processing of template edges
    model.nta.template[model.indexOfTemplate(params.template)].transition.map((t, ind) => {
        let willChangeSelectLabel = false; 

        let refinedParams = Object.assign({}, params);

        
        // remove argsR vars shadowed by select (if any)
        let selectVars = [];
        if (t.select) {
            selectVars = model.getSelectLabelVars(t.select);
        }
        refinedParams.argsR_orig = [...refinedParams.argsR];
        delete refinedParams.argsR;
        refinedParams.argsR = params.argsR.filter(el => !selectVars.map(v=>v.name).includes(el));

        // add src and trg
        refinedParams.src = t.src;
        refinedParams.trg = t.trg;
        
        // return if argsR are fully shadowed by a select label - no changes should be applied
        if(refinedParams.argsR.length===0){
            return t;
        }

        if(t.guard){
            // inner OR leave edge type
            if (params.scope === '*' || params.scope.indexOf(t.src) !== -1) {
                let res = generateAbstractionExpr(t.guard, refinedParams);
                if (t.guard.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                    willChangeSelectLabel = true;
                    t.guard = res;
                }
            }
            // inner OR enter edge type
            if (params.scope === '*' || params.scope.indexOf(t.trg) !== -1){
                // do nothing
            }
        }

        if(t.update){
            let res = generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1);
            if (t.update.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                willChangeSelectLabel = true;
                // t.update = res;
            } 

            if(params.scope.indexOf(t.src) === -1 && params.scope.indexOf(t.trg) !== -1){
                // enter edge - append the reset block
            }

            if(params.scope.indexOf(t.src) !== -1 && params.scope.indexOf(t.trg) === -1){
                // leave edge - prepend the assume block
            }

            // reset argsR only for the ENTER edges
            // for the LEAVE edges prepend the assumed evaluation and use orig. update there

            // todo: argsR must not appear on lhs (this would be an attempt to assign to a const var)
            // todo: argsR reset should only appear when needed
        }


        // // Inner or Leave edge type
        // if (params.scope === '*' || params.scope.indexOf(t.src) !== -1) {
        //     if (t.guard) {
        //         let res = generateAbstractionExpr(t.guard, refinedParams);
        //         if (t.guard.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
        //             willChangeSelectLabel = true;
        //             t.guard = res;
        //         }
        //     }

        //     // prepend "assumed evaluation"
        //     if (t.assignment) {
        //         // t.assignment = params.argsR.map(vname => `__assume_${vname}(${CONFIG.LDE_namePrefix}${ind}[__${vname}])`).join(',\n') + ',\n' + t.assignment;
        //         // + add selector for __${vname}
        //         // let res = generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1);
        //         // if (t.update.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
        //             // willChangeSelectLabel = true;
        //             // t.update = res;
        //         // }
        //         // console.log(`from:\n${t.assignment}\nto: \n${generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1)}`);

        //         let res = generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1);
        //         if (t.update.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
        //             willChangeSelectLabel = true;
        //             // t.update = res;
        //         }
        //     }

            
        // }

        // Inner or Enter edge type
        // if (params.scope === '*' || params.scope.indexOf(t.trg) !== -1) {
        //     // append "reset/initial evaluation"
        //     // if (t.assignment) {
        //     //     t.assignment += ',\n' + params.argsR.map(vname => `__reset_${vname}()`).join(',\n')
        //     //     // + add selector for __${vname}
                
        //     // }

        //     if (t.assignment) {
        //         // t.assignment = params.argsR.map(vname => `__assume_${vname}(${CONFIG.LDE_namePrefix}${ind}[__${vname}])`).join(',\n') + ',\n' + t.assignment;
        //         // + add selector for __${vname}
        //         let res = generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1);
        //         if (t.update.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
        //             willChangeSelectLabel = true;
        //             // t.update = res;
        //             t.update+=res.assumedChunk;
        //         }
        //         // console.log(`from:\n${t.assignment}\nto: \n${generateAbstractionStatement(t.assignment+';', refinedParams).slice(0, -1)}`);
        //     }
        // }

        // if (t.guard) {
        //     t.guard = generateAbstractionStatement(t.guard + ';', params).slice(0, -1);
        // }
        // if (t.assignment) {
        //     t.assignment = generateAbstractionStatement(t.assignment + ';', params).slice(0, -1);
        // }
        // if (t.select) {
        //     // as the syntax for select labels is slightly different, we will use regex replacements here, so that only the range (rhs from the colon) is affected
        //     let reg = /(?:[^,:]+):([^\[\]:]*(?:\[[^\[\]:]*\])*)/gm;
        //     let matches = t.select.matchAll(reg)
        //     for (const m of matches) {
        //         t.select = t.select.replace(m[1], generateAbstractionStatement(m[1] + ' _$;', params).slice(0, -4));
        //     }
        // }
        // if(t.synchronisation)t.synchronisation= generateAbstractionStatement(t.synchronisation,params);
    })

    return;

    // Global declaration post-processing

    // Local declartions post-processing



    // unique lists of argsR evaluations
    // let eles = uniqueInArray(Object.values(d)); 

    // filter out empty lists (locations mapping to [] are unreachable)
    // eles = eles.filter(el => el.length != 0); 

    // map the location to an index of "unique" evaluation lists 
    // let loc2index = Object.keys(d).reduce((acc, curr, ind) => (acc[curr] = eles.map(l => l.toString()).indexOf(d[curr].toString()), acc), {})

    // let locNameMap = model.getLocationNameToIdMap("Voter");

    // assumption: double-underscore identifier prefix __ is reserved
    // let toBeAppendedG = eles.map((el, ind) => {
    //     return `const int ${CONFIG.LDE_namePrefix}${ind}[${el.length}] = { ${el.join(',')} };`;
    // }).join('\n');

    let toBeAppendedG = "";

    for (lid in params.d) {
        for (vname in params.argsR) {
            `const int ${CONFIG.LDE_namePrefix}_of_${vname}_at_${lid}`
        }
    }





    // ? add init val assignment to argsR?

    //  append const arrs + typedefs to global declarations
    model.global += toBeAppendedG;


    // ------ untested-begin ------
    let toBeAppendedL = "";
    // add new variable declarations (with its initialization) if any
    params.argsN.forEach((vname, val0, fun) => {
        toBeAppendedL += `\nint ${vname} = ${val0};`;
    })



    // current limitation - we cannot make sequential abstractions over the common variables
    toBeAppendedL +=
        `\nvoid __assume(${params.argsR.map(vname => "int __assumed_value_of_" + vname).join(', ')}){
        ${params.argsR.map(vname => vname + " = __assumed_value_of_" + vname + ";").join('\n')}
    }`;

    toBeAppendedL +=
        `\nvoid __reset(){
        ${params.argsR.map(vname => vname + " = " + params.val0[vname] + ";").join('\n')}
    }`;


    // fix: MUST be as vector (because local domain mapping is given AS VECTOR OF EVALUATIONS)
    // params.argsR.forEach( vname=>{
    //     toBeAppendedL += `\nvoid __assume_${vname}(int __assumed_value_){${vname}=__assumed_value;}`;
    //     toBeAppendedL += `\nvoid __reset_${vname}(){${vname}=${params.val0[vname]};}`;
    // } )
    // model[params.template].local = generateAbstractionTranslation(model[params.template].local, params); 
    model[params.template].local += toBeAppendedL;
    // ------ untested-end ------


    // TODO: make changes, so that a chain of abstractions is feasible
    // abstration on edges
    model.nta.template[model.indexOfTemplate(params.template)].transition.map((t, ind) => {
        if (params.scope === '*' || params.scope.indexOf(t.src) !== -1) {
            // prepend "assumed evaluation"
            if (t.assignment) {
                t.assignment = params.argsR.map(vname => `__assume_${vname}(${CONFIG.LDE_namePrefix}${ind}[__${vname}])`).join(',\n') + ',\n' + t.assignment;
                // + add selector for __${vname}
            }
        }

        if (params.scope === '*' || params.scope.indexOf(t.trg) !== -1) {
            // append "reset/initial evaluation"
            if (t.assignment) {
                t.assignment += ',\n' + params.argsR.map(vname => `__reset_${vname}()`).join(',\n')
                // + add selector for __${vname}
            }
        }

        // if (t.guard) {
        //     t.guard = generateAbstractionStatement(t.guard + ';', params).slice(0, -1);
        // }
        // if (t.assignment) {
        //     t.assignment = generateAbstractionStatement(t.assignment + ';', params).slice(0, -1);
        // }
        // if (t.select) {
        //     // as the syntax for select labels is slightly different, we will use regex replacements here, so that only the range (rhs from the colon) is affected
        //     let reg = /(?:[^,:]+):([^\[\]:]*(?:\[[^\[\]:]*\])*)/gm;
        //     let matches = t.select.matchAll(reg)
        //     for (const m of matches) {
        //         t.select = t.select.replace(m[1], generateAbstractionStatement(m[1] + ' _$;', params).slice(0, -4));
        //     }
        // }
        // if(t.synchronisation)t.synchronisation= generateAbstractionStatement(t.synchronisation,params);
    })
}


// for each pair of (mapping_function, scope) perform the abstraction
bar(model, abstractionParams);

// finally save the abstract model into XML file
fs.writeFileSync(CONFIG.pathToOutputModel, model.toString());

function generateAbstractionTranslation(input, params) {
    // console.log(JSON.stringify(input));
    if (typeof input !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.translation();

    const myListener = new MyCustomListener(params);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);

    return myListener;
}

function generateAbstractionExpr(input, params) {
    // console.log(JSON.stringify(input));
    if (typeof input !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.expr();

    const myListener = new MyCustomListener(params);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);

    return myListener.joinToAText(tree);
}


function generateAbstractionStatement(input, params) {
    // console.log(JSON.stringify(input));
    if (typeof input !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.statement();

    const myListener = new MyCustomListener(params);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return myListener.joinToAText(tree);
}







// class temp {
//     // ignoreLast to filter out the EOF child token
//     setAText(ctx, sep = ' ', ignoreLast = false) {
//         let n = ctx.getChildCount();
//         if (n == 0) {
//             ctx.AText = ctx.getText();
//         } else {
//             let arr = [];
//             for (let i = 0; i < n; i++) {
//                 arr.push(this.getAText(ctx.getChild(i)));
//             }
//             if (ignoreLast) {
//                 arr = arr.slice(0, -1);
//             }
//             ctx.AText = arr.filter(x => x !== '').join(sep);
//         }
//     }
//     getAText(ctx) {
//         if (typeof ctx.AText === "undefined") {
//             this.setAText(ctx)
//         }
//         return ctx.AText;
//     }

//     setHasArgsR(ctx) {
//         let n = ctx.getChildCount();
//         ctx.hasArgsR = []; // change to set?
//         for (let i = 0; i < n; i++) {
//             ctx.hasArgsR.push(...this.getHasArgsR(ctx.getChild(i)));
//         }
//         ctx.hasArgsR.filter((value, index, self) => self.indexOf(value) === index); // only unique
//     }

//     getHasArgsR(ctx) {
//         if (!ctx.hasArgsR) {
//             this.setHasArgsR(ctx)
//         }
//         return ctx.hasArgsR;
//     }

//     //--------------------------------------------------------

//     exitTranslation(ctx) {
//         this.setAText(ctx, '\n', true)
//     }

//     exitStatement(ctx) {
//         this.setAText(ctx, ' ');
//         ctx.AText = ctx.AText.replace(/[\s,]*;/, ';'); // remove handing comma before the semi-colon

//         if (ctx.list.AText.replace(/[ ,]*/g, '') === '') ctx.AText = ''; // todo: check if the replace is actually needed
//         // if(ctx.list.AText === '')ctx.AText='';
//     }




//     exitExpr_list(ctx) {
//         this.setAText(ctx, ' ');
//         ctx.AText = ctx.AText.replace(/^,[\s,]+/g, ''); // remove left-over commas (left)
//         ctx.AText = ctx.AText.replace(/,[\s,]+/g, ', '); // remove left-over commas (mid)
//         ctx.AText = ctx.AText.replace(/,[\s,]+$/g, ''); // remove left-over commas (right)
//         // console.dir(ctx.ruleIndex)
//     }

//     exitExprInd(ctx) {
//         this.setHasArgsR(ctx);
//         if (ctx.hasArgsR.length != 0) {
//             ctx.AText = "";
//         }
//     }

//     // check if the target variables appears on the LHS (remove the whole expr if so)
//     exitAssignmentExpr(ctx) {
//         this.setHasArgsR(ctx);
//         if (ctx.left?.hasArgsR.length) {
//             ctx.AText = '';
//         } else if (ctx.right?.hasArgsR.length) {
//             // replace with literal values and add the select label

//         }
//         // if(ctx.left?.ID() && this.params.argsR.indexOf(ctx.left.getText())){
//         //     ctx.AText = '';
//         // }
//         // console.log(ctx.right?.ID()?.getText());
//         // console.log(getAText(ctx.left));
//         // console.log(ctx.right.constructor.name);
//         // console.log(`LEFT = ${ctx.left.getText()}`);
//     }

//     exitPrimaryId(ctx) {
//         // find if the identifier belongs to argR set
//         ctx.hasArgsR = [this.params.argsR.indexOf(ctx.getText())].filter(x => x != -1);

//         // // todo: change this in case of scoped 
//         // if(ctx.hasArgsR.length!=0){
//         //     ctx.AText = "";
//         // }
//     }
// }