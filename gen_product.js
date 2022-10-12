// generate the extended MAS graph:
/*
Steps:
1) rename local variables
2) starting from the initial state process the edges, generating the reachable collection of locations

Notes:
* according to df the resulting MAS graph must be synch-free
* assumptions same as for the PART B + no name collision
* limitation in agent instances (templates must be singletons without parameter)
* single parameter MAX, of the form int[<from>, <to>] <identifier>
* selects of the form int[<from>, <to>] <identifier>
* parameter name must be unique!!! - no shadowing by local variable of the same name
* if sync over array then indices can only be either PARAM or SELECT
* no ++/-- for the update labels

// TODO: justification on why we can re-use the d for e.g. one voter in abstraction for conf. with X-voters...

*/

// ============================================================

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
import CustomListener from './customListener1.js';
import { dir } from 'console';
import { config } from 'process';

// ============================================================
// todo: in renaming add the filter over global variables
// todo: partition script and run options/params

function generateProduct(inputString) {
    // read XML for the concrete model
    // const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel.replace('.xml', '_mas.xml'), "utf8");
    const xmlInputString = inputString;

    const xmlInputString2 = fs.readFileSync(CONFIG.pathToInputSample, "utf8");

    let model = new UppaalXML(xmlInputString);
    let result = new UppaalXML(xmlInputString2);

    const LID_SEP = CONFIG.locationIdSeparator; // agent's location separator

    // do the prepocessing of the input model to ensure no errors/bugs arise
    // 1) alpha-renaming of the variables
    // 2) prepend the location ids wiht the agent instance name for readability in the ext. location space
    // 3) validate the input model for the special symbols in the location name tags (e.g., commas)

    // load an empty model and append the locations there
    // ...

    let numberOfTemplates = model.nta.template.length;

    let numberOfAgents = numberOfTemplates;

    // 
    let sync_edges_queue = {};

    // 
    let xlocation_ids = [];

    // create an initial location
    let xlocation_0 = [];
    for (let i = 0; i < numberOfAgents; i++) {
        xlocation_0.push(model.nta.template[i].init[0].$.ref);
    }
    xlocation_ids.push(xlocation_0.join(LID_SEP));
    let xedges = [];

    let myq = [xlocation_0.join(LID_SEP)];

    while (myq.length != 0) {
        let curr_loc = myq.shift().split(LID_SEP);
        for (let i = 0; i < numberOfAgents; i++) {
            let local_edges = model.nta.template[i].transition.filter(t => t.src == curr_loc[i]);
            for (let j = 0; j < local_edges.length; j++) {
                let edge = local_edges[j];
                // todo: check if hte edge has a synchronisation label
                if (edge['synchronisation']) {
                    // todo: strip whitespace
                    let chan = edge['synchronisation'].slice(0, -1);
                    let symb = edge['synchronisation'].slice(-1);
                    if (symb != '?' && symb != '!') console.log(`ERR: unexpected symbol for synchronisation occured "${symb}"`);

                    const reg_sync_arr = /([^\s\[\]]+)([^\s]*)$/m;
                    let match = chan.match(reg_sync_arr);
                    let cond = []; // extra-condition for array identifier (e.g., for `ch[i]` and `ch[j]` we add `i==j`)

                    // check if chan is array identifier
                    if (match[2]) {
                        chan = match[1];
                        cond = match[2].split('][').map(s => s.replace(/[\[\]]/gm, ''));
                    }


                    if (!sync_edges_queue[chan]) {
                        sync_edges_queue[chan] = {
                            '!': [],
                            '?': []
                        };
                    }
                    sync_edges_queue[chan][symb].push([i, edge, cond]); // pair of (agent, edge)
                } else {
                    xedges.push({
                        "src": curr_loc.join(LID_SEP),
                        "trg": curr_loc.map((li, ind) => ind == i ? edge.trg : li).join(LID_SEP),
                        "select": edge["select"] || "",
                        "guard": edge["guard"] || "",
                        "synchronisation": "",
                        "assignment": edge["assignment"] || "",
                    })
                }
            }
        }

        for (const [key, val] of Object.entries(sync_edges_queue)) {
            for (let i = 0; i < val['!'].length; i++) {
                for (let j = 0; j < val['?'].length; j++) {
                    let agent = [val['!'][i][0], val['?'][j][0]];
                    let edge = [val['!'][i][1], val['?'][j][1]];

                    let cond = [val['!'][i][2], val['?'][j][2]];
                    let guard_append = [];
                    if (cond[0].length != cond[1].length) {
                        console.log(`ERR, unexpected chan arr identifiers of different dim`);
                    }
                    for (let k = 0; k < cond[0].length; k++) {
                        guard_append.push(`${cond[0][k]}==${cond[1][k]}`);
                    }
                    guard_append.map(s => s).join('&&')

                    xedges.push({
                        "src": curr_loc.join(LID_SEP),
                        "trg": curr_loc.map((li, ind) => ind == agent[0] ? edge[0].trg : li).map((li, ind) => ind == agent[1] ? edge[1].trg : li).join(LID_SEP),
                        "select": [edge[0]["select"], edge[1]["select"]].filter(s => s).join(',\n') || "",
                        "guard": [`${guard_append}`, `${edge[0]["guard"] || ''}`, `${edge[1]["guard"] || ''}`].filter(s => s).map(s => `${s}`).join(' && ') || "",
                        "synchronisation": "",
                        "assignment": [edge[0]["assignment"], edge[1]["assignment"]].filter(s => s).join(',\n') || "",
                    })
                }
            }
        }
        sync_edges_queue = [];

        // add to queue if not in xlocation_ids already
        xedges.forEach(edge => {
            if (xlocation_ids.indexOf(edge.trg) == -1) {
                xlocation_ids.push(edge.trg);
                myq.push(edge.trg);
            }
        })
    }

    // translate the results into uppaalXML
    result.flushTemplateLocations("ExtendedMAS");
    xlocation_ids.forEach(loc => {
        result.addLocationToTemplate("ExtendedMAS", loc)
    })
    result.setInitLocationToTemplate("ExtendedMAS", xlocation_0.join(LID_SEP))

    xedges.forEach(edge => {
        result.importEdgeToTemplate("ExtendedMAS", edge)
    })

    // merge declarations
    result.global = model.global;
    result["ExtendedMAS"].local = model.nta.template.map(_t => `// From ${_t?.name[0]}:\n` + _t.declaration).join('\n');

    return result;
}

let inputStr = fs.readFileSync(CONFIG.pathToInputModel.replace('.xml', '_mas.xml'), "utf8");
let extModel = generateProduct(inputStr);
fs.writeFileSync(CONFIG.OUTPUT.DIR + '/ext_model.xml', extModel.toString());

const myHash = `_` + Date.now().toString(36); // a rand-ish string (might start with a number!!!)

function renamingPreproc() {
    const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
    
    function paramPlaceholder(){
        return '#'+myHash+'#';
    }
    function vidPlaceholder(str, dict={}){
        if(dict.hasOwnProperty(str)){
            return str;
        }else{
            return '@'+myHash+'@'+str;
        }
    }

    const vidPlaceholder_reg = new RegExp(vidPlaceholder(''), 'gm')
    const paramPlaceholder_reg = new RegExp(paramPlaceholder(''), 'gm')
    const tparam_reg = /[^\[]*\[([^,]+),([^,]+)\]\s*([^\s]+)/m;
    const selectRange_reg =  /[^\[]*\[([^,]+),([^,]+)\]/m;


    let model = new UppaalXML(xmlInputString);
    
    let templatNames = model.getTemplateNames();

    let procList = [];

    templatNames.forEach(_t=>{
        let constDict = getConstVars(model.global + model[_t].declaration[0]);

        // only rename lovalVars OR param
        let localVars = getAllVars(model[_t].declaration[0]);

        if(model[_t].hasOwnProperty("parameter")){
            let match = model[_t].parameter[0].match(tparam_reg);

            let rangeMin = numberOrDictEntry(match[1],constDict);
            let rangeMax = numberOrDictEntry(match[2],constDict);
            let paramName = match[3];
            
            function myRenameCallback(str){
                if(str==paramName){
                    return paramPlaceholder();
                }else if(localVars.indexOf(str)!=-1){
                    return vidPlaceholder(str,constDict);
                }else{
                    return str;
                }
            }

            model[_t].local = postRenameStr(model[_t].local, myRenameCallback, 'translation');
            model[_t].transition.forEach(edge=>{
                // if sync has PARAM - will refer to a const appended to a local declaration list (note that select lhs remains unchanged, as those are bound)
                let isSelectVar = {};
                if(edge["select"]){
                    edge["select"] = model.getSelectLabelVars(edge.select).map(x=>{
                        let m = x.type.match(selectRange_reg);
                        let intFrom = (Number.isNaN(Number(m[1]))) ? vidPlaceholder(m[1],constDict) : Number(m[1]);
                        let intTo = (Number.isNaN(Number(m[2]))) ? vidPlaceholder( m[2],constDict) : Number(m[2]);

                        isSelectVar[x.name] = true;
                        return `${x.name}:int[${intFrom},${intTo}]`;
                    }).join(',\n')
                }

                function currRenameCallBack(str){
                    if(isSelectVar.hasOwnProperty(str) && isSelectVar.str){
                        return str;
                    }else{
                        return myRenameCallback(str);
                    }
                }

                ['assignment', 'guard'].forEach(kind=>{
                    if(edge[kind]){
                        edge[kind] = postRenameStr(edge[kind]+';', currRenameCallBack, 'statement').slice(0,-1)
                    }
                })
            })
            delete model[_t].parameter;
            let templateStr = JSON.stringify(model[_t]);
            
            // substitute curr template with an array of instances
            // delete model[_t];
            model.nta.template.splice(model.indexOfTemplate(_t),1)
            
            // let agentInstances = [];
            for(let ti=rangeMin; ti<=rangeMax; ti++){
                let tname = `${_t}_${ti}`;
                procList.push(tname)
                let prefix = tname+'_';
                // replace placeholders
                let instanceStr = templateStr.replace(vidPlaceholder_reg,prefix).replace(paramPlaceholder_reg, ti);
                let tcurr = JSON.parse(instanceStr);
                // delete tcurr.name;
                tcurr.name = [tname];
                tcurr.declaration[0] = `const int ${paramName} = ${ti};\n` + tcurr.declaration[0];
                model.nta.template.push(tcurr);
                // do prefix renaming + substitution of paramName with paramValue ti
            }

            // let tcopy = JSON.parse(JSON.stringify(model[_t]));
            // model.nta.template.push(tcopy)
        }else{
            // do renaming for all local declarations and all local edges
            function prefixWithTName(str){
                if(constDict.hasOwnProperty(str)){
                    return str;
                }else if(localVars.indexOf(str)==-1){
                    return str;
                }else{
                    return `${_t}_${str}`;
                }
            }
            procList.push(_t)
            model[_t].local = postRenameStr(model[_t].local, prefixWithTName, 'translation');
            model[_t].transition.forEach(edge=>{
                let isSelectVar = {};
                // by assumption sync array identifiers are either from select or from param (here no param), thus no need to be parsed
                if(edge["select"]){
                    edge["select"] = model.getSelectLabelVars(edge.select).map(x=>{
                        let m = x.type.match(selectRange_reg);

                        let intFrom = (Number.isNaN(Number(m[1]))) ? prefixWithTName(m[1]) : Number(m[1]);
                        let intTo = (Number.isNaN(Number(m[2]))) ? prefixWithTName(m[2]) : Number(m[2]);

                        isSelectVar[x.name] = true;
                        return `${x.name}:int[${intFrom},${intTo}]`;
                    }).join(',\n')
                }

                function currRenameCallBack(str){
                    if(isSelectVar.hasOwnProperty(str) && isSelectVar.str){
                        return str;
                    }else{
                        return prefixWithTName(str);
                    }
                }


                ['assignment', 'guard'].forEach(kind=>{
                    if(edge[kind]){
                        edge[kind] = postRenameStr(edge[kind]+';', currRenameCallBack, 'statement').slice(0,-1)
                    }
                })
            })
        }
    })
    // parseTreeWalk();
    model.nta.system[0] = `system ${procList.join(', ')};`;
    fs.writeFileSync(CONFIG.OUTPUT.DIR + '/test.xml', model.toString());
}

renamingPreproc()




function getConstVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    return myListener._const_dict;
}

function getAllVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    // console.log(myListener._vlist.map(x=>x.vid.text));
    return myListener._vlist.map(x=>x.vid.text);
}

function renameCallbackGenerator(prefix, sep='_'){
    return (str)=>{`${prefix}${sep}${str}`}
}

function postRenameStr(input, cb, ruleName = 'expr'){
    let {tree, myListener} = parseTreeWalk(input, ruleName);
    // console.log(`renaming ${input} to ${myListener.renameWithCallbackStr(tree, cb)}`)
    return myListener.renameWithCallbackStr(tree, cb)
}

function parseTreeWalk(input, ruleName = 'expr'){
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();
    const myListener = new CustomListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return {
        "tree": tree,
        "myListener": myListener
    }
}


function numberOrDictEntry(val, dict){
    if(Number.isNaN(Number(val))){
        if(dict?.hasOwnProperty(val)){
            return dict[val];
        }else{
            console.log(`ERR, unexpected NaN "${val}", not in the dict ${dict}`);
        }
    }else{
        return Number(val)
    }
}