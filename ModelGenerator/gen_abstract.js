// ============================================================
// built-in
import * as fs from 'fs';

// third-party
import antlr4 from 'antlr4';
import yagLexer from '../Parser/YetAnotherGrammar/yagLexer.js';
import yagParser from '../Parser/YetAnotherGrammar/yagParser.js';

// custom libs/files
import CONFIG from '../config.js';
import UppaalXML from '../Parser/uppaalxml.js';
import CustomListener from '../Parser/customListener.js';
// ============================================================


function generateAbstractModel(inputString, abstractionParams){
    // read XML for the concrete model
    // const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
    // get local domain from file
    // const localDomain = JSON.parse(fs.readFileSync(CONFIG.pathToInputMapping));
    // fs.writeFileSync(CONFIG.pathToOutputModel, xmlInputString);
    let model = new UppaalXML(inputString);

    model.getTemplateNames().forEach(_t=>{
        model.fillMissingLocationNames(_t);
    })
    

    const myHash = `_` + Date.now().toString(36); // a rand-ish string (might start with a number!!!)
    abstractionParams.myHash = myHash;

    // strip unreachable locations from the scope
    abstractionParams.scope = recomputeScope(model, abstractionParams);
    // for each pair of (mapping_function, scope) perform the abstraction
    bar(model, abstractionParams);

    // finally save the abstract model into XML file


    let mstr = newlineFix(model.toString())
    // 

    fs.writeFileSync(CONFIG.pathToOutputModel, mstr);
    // fs.writeFileSync(CONFIG.pathToOutputModel, model.toString());
    console.log("App: gen_abstract finished");
    return model;
}





// =================================================================

function ldeVarName(locationId, myHash){
    // return `${CONFIG.LDE_namePrefix}_at_${locationId}`;
    return `${CONFIG.generateAbstraction.ld_elem_namePrefix}_at_${locationId}_${myHash}`;
}

function ldeToStringArgs(locationId, myHash, argsR){
    // return argsR.map((v,i)=>`${ldeVarName(locationId, myHash)}[${myHash}][${i}]`).join(',');
    return `${ldeVarName(locationId, myHash)}[${myHash}]`;
}


function ldeVarNameOf(locationId, myHash, argsR, varName, arrDict={}){
    if(arrDict.hasOwnProperty(varName)){
        return `${ldeVarName(locationId, myHash)}[${myHash}]`;
    }else{
        return `${ldeVarName(locationId, myHash)}[${myHash}][${argsR.indexOf(varName)}]`;
    }
    
    // todo: add left padding for the arrInd!!! (atm working version for either arr or vars, w/o mixing)
    // return `${ldeVarName(locationId, myHash)}[${myHash}]`;
}

function abstractVarNameFactory(locationId, myHash, argsR, arrDict={}){
    return (x)=>ldeVarNameOf(locationId, myHash, argsR, x, arrDict)
}

function abstractFunCallFactory(locationId, myHash, argsR){
    return (fid, fargs) => {
        let str  = fargs || '';
        if(str.length > 0) str += ',';
        str += ldeToStringArgs(locationId, myHash, argsR);
        return `_${fid}__${myHash}(${str})`
    };
}


// todo: extract bracket change into a function + declare an enum for the bracket types (i.e. square, curly, round)
function ldeConstVarDecString(params){
    let str = '';
    let varsLen = params.argsR.length;
    if(params.hasOwnProperty('arrDict')){
        for(let p in params['arrDict']){
            varsLen += params['arrDict'][p] - 1;
        }
    }
    // for (let locationId in params.d) {
    for(let locationId of params.scope){
        if(params.d[locationId].length==0){
            continue;
        }

        let domLen = params.d[locationId].length;
        let domVal = JSON.stringify(params.d[locationId]).replace(/\[/g, '\{').replace(/\]/g, '\}');
        str += `const int ${ldeVarName(locationId, params.myHash)}[${domLen}][${varsLen}] = ${domVal};\n`
    }

    str += `const int ${CONFIG.generateAbstraction.ld_elem_namePrefix}0_${params.myHash}[${varsLen}] = {${Object.values(params.val0).join(',')}};\n`
    
    return str;
}

function recomputeScope(model, params){
    let llist = params.scope==="*" ? model.getLocationsOf(params.template) : params.scope.split(/,|;/);
    return llist;
    // return llist.filter(l=>(typeof params.d[l] !== "undefined") && params.d[l].length!==0)
}


function bar(model, params) {
    // let d = params.d; // local domain map
    // local domain const vars
    model.global = ldeConstVarDecString(params) + model.global;
    
    // abstract (copies of) function declarations
    model.global += generateAbstractFDecString(model.global, params);
    model[params.template].local += generateAbstractFDecString(model[params.template].local, params);
   
    // append argsN variables
    model[params.template].local += '\n' + params.argsN.map(z=>`int ${z.name} = ${z.val0};`).join('\n');
   
    // special "assigner" function (must be in local scope in case there are template vars shadowing the global ones)
    model[params.template].local += '\n' + generateAssignFunctionDecString(params);


    // Processing of template edges
    model.nta.template[model.indexOfTemplate(params.template)].transition=    model.nta.template[model.indexOfTemplate(params.template)].transition.filter((t, ind) => {
        let addNewSelectLabel = false; 

        let refinedParams = Object.assign({}, params);

        const innerEdge = (
            params.scope === '*' || 
            params.scope.indexOf(t.src) !== -1 &&
            params.scope.indexOf(t.trg) !== -1
        );
        const leaveEdge = (
            params.scope !== '*' && 
            params.scope.indexOf(t.src) !== -1 &&
            params.scope.indexOf(t.trg) === -1
        );
        const enterEdge = (
            params.scope !== '*' && 
            params.scope.indexOf(t.src) === -1 &&
            params.scope.indexOf(t.trg) !== -1
        );

        if(
            (innerEdge) && params.d[t.trg].length==0 || 
            (innerEdge || leaveEdge) && params.d[t.src].length==0
        ){
            if(CONFIG.debug)console.log(`${t.src}->${t.trg} will be deleted)`);    
            
            return false;
        }

        if(CONFIG.debug)console.log(`${t.src}->${t.trg} (${enterEdge}-${innerEdge}-${leaveEdge})`);
        
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

        // name mappers must be defined for all members of the original argsR
        refinedParams.abstractVarNameOf = abstractVarNameFactory(t.src,params.myHash,params.argsR, params.arrDict)
        refinedParams.abstractFunCallOf = abstractFunCallFactory(t.src,params.myHash,params.argsR)
        
        // return if argsR are fully shadowed by a select label - no changes should be applied
        if(refinedParams.argsR.length===0){
            return t;
        }


        if(t.guard){
            // inner OR leave edge type
            // if (params.scope === '*' || params.scope.indexOf(t.src) !== -1) {
            if (innerEdge || leaveEdge) {
                let res = generateAbstractLabelString(t.guard, refinedParams);
                if (t.guard.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                    addNewSelectLabel = true;
                    t.guard = res;
                }
            }
            
            // inner OR enter edge type
            // if (params.scope === '*' || params.scope.indexOf(t.trg) !== -1){
                // do nothing
            // }
        }

        if(t.synchronisation){
            // inner or leave edge
            if (innerEdge || leaveEdge) {
                let synchSymbol = t.synchronisation.slice(-1)
                let res = generateAbstractLabelString(t.synchronisation.slice(0,-1)+';', refinedParams);
                if (t.synchronisation.replace(/[\?\!\s]*/g,'') !== res.replace(/\s*/g,'')) {
                    addNewSelectLabel = true;
                    t.synchronisation = res + synchSymbol;
                }
            }
        }

        if(true){
            
            // let res = generateAbstractLabelString(t.assignment, refinedParams);
            let res = t.assignment || '';
            let appearingArgsR = [];
            if(res.length>0){
                let isInArgsR = (v)=>{
                    return params.argsR.indexOf(v)!=-1;
                }   
                
                let {tree:atree, myListener:alistener} = parseTreeWalk(res+';', refinedParams, 'statement');
                appearingArgsR = alistener.getVarList(atree).filter(isInArgsR);
            }

            // check if argsR appear
            if(innerEdge && appearingArgsR.length==0 && !addNewSelectLabel){
                if(CONFIG.debug)console.log(`Inner edge ${t.src}->${t.trg} has no argsR and thus stays unchanged`);
                return t;
            }
            
            if(innerEdge || enterEdge){
            // if(params.scope.indexOf(t.src) === -1 && params.scope.indexOf(t.trg) !== -1){
                // enter edge - append the reset block
                res = [
                    res,
                    updateArgsNFunctionCallString(params),
                    resetArgsRFunctionCallString(params)
                ].filter(s=>s.length>0).join(',\n')
                // if(res.length>0)res+=',\n';
                // res+=updateArgsNFunctionCallString(params);
                // res+=',\n';
                // res+=resetArgsRFunctionCallString(params);
            }
            
            if(innerEdge || leaveEdge){
            // if(params.scope.indexOf(t.src) !== -1 && params.scope.indexOf(t.trg) === -1){
                // leave edge - prepend the assume block
                // if(res.length>0)res=',\n'+res;
                // res = resetArgsNFunctionCallString(params) + res;
                // res = updateArgsRFunctionCallString(t.src, params) + res;

                res = [
                    updateArgsRFunctionCallString(t.src, params),
                    resetArgsNFunctionCallString(params),
                    res
                ].filter(s=>s.length>0).join(',\n')
            }

            // always true atm (until refined)
            if (!t.assignment || t.assignment.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                addNewSelectLabel = true;
                t.assignment = res;
            } 

            
            // todo: argsR must not appear on lhs (this would be an attempt to assign to a const var)
            // todo: argsR reset should only appear when needed
        }

        

        if(enterEdge && !innerEdge){
            addNewSelectLabel = false;
        }

        if(!enterEdge && !innerEdge && !leaveEdge){
            addNewSelectLabel = false;
        }
        
        if(addNewSelectLabel){
            if(typeof t.select === 'undefined'){
                t.select = '';
            }else{
                t.select += ',\n';
            }
            t.select += `${params.myHash}:int[0,${params.d[t.src].length-1}]`;
        }
        return t;
    })

    return;
}


function getListenerAfterParse(inputString, params, ruleName){
    if (typeof inputString !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }

    // console.log(inputString);
    const chars = new antlr4.InputStream(inputString);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();

    const myListener = new CustomListener(params);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);

    return myListener;
}

function generateAbstractFDecString(input, params){
    let res = getListenerAfterParse(input, params, 'translation');  // perform the translation
    return res._flist.map(ctx => ctx?._assumeFdecText).join('\n');  // join abstract _assumeFdecText into a string
}


function updateArgsRFunctionCallString(locationId, params){
    let str = `_set_argsr_values_${params.myHash}(${ldeToStringArgs(locationId, params.myHash, params.argsR)})`;
    return str;
}

function resetArgsRFunctionCallString(params){
    //let str = `_set_argsr_values_${params.myHash}(${Object.values(params.val0).join(',')})`
    let varsLen = params.argsR.length;
    if(params.hasOwnProperty('arrDict')){
        for(let p in params['arrDict']){
            varsLen += params['arrDict'][p] - 1;
        }
    }
    let str = `_set_argsr_values_${params.myHash}(${CONFIG.generateAbstraction.ld_elem_namePrefix}0_${params.myHash})`
    return str;
}

function updateArgsNFunctionCallString(params){
    let str = `_update_argsn_values_${params.myHash}(${params.argsN.map(x=>'0').join(',')})`
    return str
}
function resetArgsNFunctionCallString(params){
    let str = `_update_argsn_values_${params.myHash}(${params.argsN.map(x=>'1').join(',')})`
    return str
}

function generateAssignFunctionDecString(params){
    let varsLen = params.argsR.length;
    if(params.hasOwnProperty('arrDict')){
        for(let p in params['arrDict']){
            varsLen += params['arrDict'][p] - 1;
        }
    }

    let str = `void _set_argsr_values_${params.myHash}(`;

    str += `const int &_curr_vals[${varsLen}]`;

    // str += params.argsR.map(v=>{
        // if(params.hasOwnProperty('arrDict') && params['arrDict'].hasOwnProperty(v)){
        // return `const int& _val_of_${v}[${params['arrDict'][varsLen]}]`;
        // }else{
            // return `const int _val_of_${v}`;
        // }
    // }).join(', ');

    let jj=0;
    str += `){\n\t${params.argsR.map((v,ind)=>{
        if(params.hasOwnProperty('arrDict') && params['arrDict'].hasOwnProperty(v)){
            return Array.from(
                {length: params['arrDict'][v]},
                (k,val)=>`${v}[${val}]=_curr_vals[${jj++}];`
            ).join('\n\t')
        }else{
            return `${v}=_curr_vals[${jj++}];`
        }
    }).join('\n\t')}\n}`
        
    // str += `){\n\t${params.argsR.map(v=>{
    //     if(params.hasOwnProperty('arrDict') && params['arrDict'].hasOwnProperty(v)){
    //         return Array.from(
    //             {length: params['arrDict'][v]},
    //             (k,val)=>`${v}[${val}]=_val_of_${v}[${val}];`
    //         ).join('\n\t')
    //     }else{
    //         return v+'= _val_of_'+v+';'
    //     }
    // }).join('\n\t')}\n}`

    str += `\nvoid _update_argsn_values_${params.myHash}(`;
    str += params.argsN.map(z => `bool reset_${z.name}`).join(',')
    str += `){\n\t`;
    str += params.argsN.map(z => `${z.name}=reset_${z.name} ? ${z.val0} : ${z.f};`).join('\n\t') + `\n}`
    return str;
}

function generateAbstractLabelString(input, params){
    if(input.length <= 0) return '';
    let res = getListenerAfterParse(input+';', params, 'statement');
    // console.log(res.joinToAText(res._stmtlist[0]));

    // map to an AText and discard semi-colon (last char)
    return res._stmtlist.map(ctx => res.joinToAText(ctx).slice(0,-1)).join(',') //? join might be redundant
}

// newline fix
function newlineFix(str){
    let nl_reg = /(?<=<label[^<]*?kind="assignment"[^<]*?>)([^<]*?)(?=<\/label>)/g;
    return str.replace(nl_reg,function(match){
        return match.replace(/\s+/gm,'').split(',').join(',\n')
    })
}

function parseTreeWalk(input, _params, ruleName = 'expr'){
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();
    const myListener = new CustomListener(_params);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return {
        "tree": tree,
        "myListener": myListener
    }
}

export {generateAbstractModel};
export default {};