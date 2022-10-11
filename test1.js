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
import CustomListener from './customListener.js';


// ============================================================


// read XML for the concrete model
const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
// get local domain from file
const localDomain = JSON.parse(fs.readFileSync(CONFIG.pathToInputMapping));
// fs.writeFileSync(CONFIG.pathToOutputModel, xmlInputString);


// ============================================================

let model = new UppaalXML(xmlInputString);

model.fillMissingLocationNames('Voter');

const myHash = `_` + Date.now().toString(36); // a rand-ish string (might start with a number!!!)

// if scope given by names - convert to ids using loc2id map
const abstractionParams = {
    template: "Voter",
    scope: "*", 
    val0: {
        mem_sg: 0,
        mem_vt: 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    argsN: [
        {
            name: "validVote",      // for now argsN are reset when argsR are assumed and eval'd when those are reset
            val0: 0,
            f: `mem_sg && mem_vt`   //? should we allow self-referencing? (e.g. to simulate reduce with acc)
        },
        {
            name: "invalidVote",
            val0: 1,
            f: `!(mem_sg && mem_vt)`
        },
    ],
    d: {
        "id3": [[0,0]],
        "id2": [[0,0]],
        "id0": [[0,0]],
        "id1": [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2]]
    },
    myHash: myHash
}

// strip unreachable locations from the scope
abstractionParams.scope = recomputeScope(model, abstractionParams);


// for each pair of (mapping_function, scope) perform the abstraction
bar(model, abstractionParams);

// finally save the abstract model into XML file
fs.writeFileSync(CONFIG.pathToOutputModel, model.toString());



// =================================================================

function ldeVarName(locationId, myHash){
    // return `${CONFIG.LDE_namePrefix}_at_${locationId}`;
    return `${CONFIG.LDE_namePrefix}_at_${locationId}_${myHash}`;
}

function ldeToStringArgs(locationId, myHash, argsR){
    return argsR.map((v,i)=>`${ldeVarName(locationId, myHash)}[${myHash}][${i}]`).join(',');
}


function ldeVarNameOf(locationId, myHash, argsR, varName){
    return `${ldeVarName(locationId, myHash)}[${myHash}][${argsR.indexOf(varName)}]`;
}

function abstractVarNameFactory(locationId, myHash, argsR){
    return (x)=>ldeVarNameOf(locationId, myHash, argsR, x)
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
    // for (let locationId in params.d) {
    for(let locationId of params.scope){
        let domLen = params.d[locationId].length;
        let domVal = JSON.stringify(params.d[locationId]).replace(/\[/g, '\{').replace(/\]/g, '\}');
        str += `const int ${ldeVarName(locationId, params.myHash)}[${domLen}][${varsLen}] = ${domVal};\n`
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
    model.global += generateAbstractFDecString(model.global, params);
    model[params.template].local += generateAbstractFDecString(model[params.template].local, params);
   
    // append argsN variables
    model[params.template].local += '\n' + params.argsN.map(z=>`int ${z.name} = ${z.val0};`).join('\n');
   
    // special "assigner" function (must be in local scope in case there are template vars shadowing the global ones)
    model[params.template].local += '\n' + generateAssignFunctionDecString(params);


    // Processing of template edges
    model.nta.template[model.indexOfTemplate(params.template)].transition.map((t, ind) => {
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
        refinedParams.abstractVarNameOf = abstractVarNameFactory(t.src,params.myHash,params.argsR)
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

        if(t.assignment){
            // let res = generateAbstractLabelString(t.assignment, refinedParams);
            let res = t.assignment;
            
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
            if (t.assignment.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                addNewSelectLabel = true;
                t.assignment = res;
            } 

            // todo: argsR must not appear on lhs (this would be an attempt to assign to a const var)
            // todo: argsR reset should only appear when needed
        }

        if(t.synchronisation){
            // inner or leave edge
            if (innerEdge || leaveEdge) {
                let synchSymbol = t.synchronisation.slice(-1)
                let res = generateAbstractLabelString(t.synchronisation.slice(0,-1)+';', refinedParams);
                if (t.synchronisation.replace(/\s*/g,'') !== res.replace(/\s*/g,'')) {
                    addNewSelectLabel = true;
                    t.synchronisation = res + synchSymbol;
                }
            }
        }
        
        if(addNewSelectLabel){
            if(typeof t.select === 'undefined'){
                t.select = '';
            }else{
                t.select += ',\n';
            }
            t.select += `${params.myHash}:int[0,${params.d[t.src].length-1}]`;
        }
    })

    return;
}


function getListenerAfterParse(inputString, params, ruleName){
    if (typeof inputString !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
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
    let str = `_set_argsr_values_${params.myHash}(${Object.values(params.val0).join(',')})`
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
    let str = `void _set_argsr_values_${params.myHash}(`;
    str += params.argsR.map(v=>`int _val_of_${v}`).join(', ');
    str += `){\n\t${params.argsR.map(v=>v+'= _val_of_'+v+';').join('\n\t')}\n}`

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



