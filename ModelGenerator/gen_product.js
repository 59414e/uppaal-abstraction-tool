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

// third-party
import antlr4 from 'antlr4';
import yagLexer from '../Parser/YetAnotherGrammar/yagLexer.js';
import yagParser from '../Parser/YetAnotherGrammar/yagParser.js';

// custom libs/files
import CONFIG from '../config.js';
import UppaalXML from '../Parser/uppaalxml.js';
import CustomListener from '../Parser/customListener1.js';
// ============================================================

function generateProduct(inputString) {
    const LID_SEP = CONFIG.preprocessModel.locationIdSeparator; 
    const SINGLETON_NAME = CONFIG.preprocessModel.productName;
    const SAVE_TO_FILE = CONFIG.preprocessModel.saveIntermediateModel;

    // read XML for the concrete model
    let model = new UppaalXML(inputString);
    // initialize base model with single process/template
    let result = new UppaalXML(generateSingletonModelXML(SINGLETON_NAME));


    let numberOfTemplates = model.nta.template.length;
    let numberOfAgents = numberOfTemplates;
    
    let sync_edges_queue = {};
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
                // todo: check if the edge has a synchronisation label
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
    result.flushTemplateLocations(SINGLETON_NAME);
    xlocation_ids.forEach(loc => {
        result.addLocationToTemplate(SINGLETON_NAME, loc)
    })
    result.setInitLocationToTemplate(SINGLETON_NAME, xlocation_0.join(LID_SEP))

    xedges.forEach(edge => {
        result.importEdgeToTemplate(SINGLETON_NAME, edge)
    })

    // merge declarations
    result.global = model.global;
    result[SINGLETON_NAME].local = model.nta.template.map(_t => `// From ${_t?.name[0]}:\n` + _t.declaration).join('\n');

    if(SAVE_TO_FILE){
        fs.writeFileSync(CONFIG.OUTPUT.DIR + '/after_product.xml', result.toString());
    }
    console.log("App: gen_product finished");

    return result;
}



function renamingPreproc(inputString) {    
    const SAVE_TO_FILE = CONFIG.preprocessModel.saveIntermediateModel || false;
    const MY_HASH = `_` + Date.now().toString(36); // a rand-ish string (might start with a number!!!)
    
    // function tparamPlaceholder(){
    //     return '#'+MY_HASH+'#';
    // }
    function vidPlaceholder(str){
        // if(dict.hasOwnProperty(str)){
        //     return str;
        // }else{
        return '@'+MY_HASH+'@'+str;
        // }
    }

    const VID_PLACEHOLDER_REG = new RegExp(vidPlaceholder(''), 'gm');
    // const TPARAM_PLACEHOLDER_REG = new RegExp(tparamPlaceholder(''), 'gm');
    
    const TPARAM_REG = /[^\[]*\[([^,]+),([^,]+)\]\s*([^\s]+)/m; // pattern: `int[<1>,<2>] <3>`
    const SELECT_RANGE_REG =  /[^\[]*\[([^,]+),([^,]+)\]/m;      // pattern: `selector:int[<1>,<2>]`


    let model = new UppaalXML(inputString);

    let templateNames = model.getTemplateNames();
    let procNameList = [];

    let globalConstDict = getConstVars(model.global);

    templateNames.forEach(_t=>{
        let constDict = {
            ...globalConstDict,
            ...getConstVars(model[_t].declaration[0])
        };

        // rename candidates are localVars and template param
        let localVars = getAllVars(model[_t].declaration[0]);

        let edgeLabelRenamingFunction = (cb)=>{
            return (edge)=>{
                let isSelectVar = {};
                if(edge["select"]){
                    edge["select"] = model.getSelectLabelVars(edge.select).map(x=>{
                        let m = x.type.match(SELECT_RANGE_REG);
                        let intFrom = (Number.isNaN(Number(m[1]))) ? cb(m[1],constDict) : Number(m[1]);
                        let intTo = (Number.isNaN(Number(m[2]))) ? cb( m[2],constDict) : Number(m[2]);
                        isSelectVar[x.name] = true;
                        return `${x.name}:int[${intFrom},${intTo}]`;
                    }).join(',\n')
                }
                function currRenameCallBack(str){
                    if(isSelectVar.hasOwnProperty(str)){
                        return str;
                    }else{
                        return cb(str);
                    }
                }

                if(edge["synchronisation"]){
                    // let ch = edge["synchronisation"].slice(0,-1)
                    // let sym = edge["synchronisation"].slice(-1);
                    
                    let m = edge["synchronisation"].match(/([^\[]*)\[([^\]]*)\](.)/)
                    if(m && m[2]){
                        let ch = m[1];
                        let dim = m[2];
                        let symb = m[3];

                        let str = postRenameStr(dim, currRenameCallBack, 'expr');
                        
                        edge["synchronisation"] = `${ch}[${str}]${symb}`;
                    }
                }

                ['assignment', 'guard'].forEach(kind=>{
                    if(edge[kind]){
                        edge[kind] = postRenameStr(edge[kind]+';', currRenameCallBack, 'statement').slice(0,-1)
                    }
                })
            }
        }

        // fill parameterized template with placeholders and then parse as string, substituting those with tname and tparam values
        if(model[_t].hasOwnProperty("parameter")){
            let tparamMatch = model[_t].parameter[0].match(TPARAM_REG);

            let tparamRangeMin = retrieveNumberOrDictEntry(tparamMatch[1],constDict);
            let tparamRangeMax = retrieveNumberOrDictEntry(tparamMatch[2],constDict);
            let paramName = tparamMatch[3];

            
            // only rename local or param
            function myRenameCallback(str){
                if(localVars.hasOwnProperty(str) || str==paramName){
                    return vidPlaceholder(str);
                }else{
                    return str;
                }
            }

            model[_t].local = postRenameStr(model[_t].local, myRenameCallback, 'translation');
            model[_t].transition.forEach(edgeLabelRenamingFunction(myRenameCallback))
            
            delete model[_t].parameter;
            let templateStr = JSON.stringify(model[_t]);

            // console.log(templateStr);
            
            // substitute curr template with an array of instances
            // delete model[_t];
            model.nta.template.splice(model.indexOfTemplate(_t),1)
            // let agentInstances = [];
            for(let ti=tparamRangeMin; ti<=tparamRangeMax; ti++){
                let tname = `${_t}_${ti}`;
                procNameList.push(tname)
                let prefix = tname+'_';
                // replace placeholders
                let instanceStr = templateStr.replace(VID_PLACEHOLDER_REG,prefix);
                let tcurr = JSON.parse(instanceStr);
                // delete tcurr.name;
                tcurr.name = [tname];
                tcurr.declaration[0] = `const int ${tname}_${paramName} = ${ti};\n` + tcurr.declaration[0];
                model.nta.template.push(tcurr);
            }
        }else{
            // do renaming for all local declarations and all local edges
            function prefixWithTName(str){
                if(localVars.hasOwnProperty(str)){
                    return `${_t}_${str}`;
                }else{
                    return str;
                }
            }
            procNameList.push(_t)
            model[_t].local = postRenameStr(model[_t].local, prefixWithTName, 'translation');
            model[_t].transition.forEach(edgeLabelRenamingFunction(prefixWithTName))
        }
    })
    model.nta.system[0] = `system ${procNameList.join(', ')};`;

    if(SAVE_TO_FILE){
        fs.writeFileSync(CONFIG.OUTPUT.DIR + '/after_rename.xml', model.toString());
    }
    console.log("App: renaming finished");
    return model;
}



function getConstVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    return myListener._const_dict;
}

function getAllVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    // console.log(myListener._vlist.map(x=>x.vid.text));
    return myListener._vlist.reduce((acc,x)=>(acc[x.vid.text]=true,acc),{});
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

function retrieveNumberOrDictEntry(val, dict){
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


function generateSingletonModelXML(processName = SINGLETON_NAME){
    return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>
<nta>
    <declaration>// Place global declarations here.</declaration>
    <template>
        <name x="5" y="5">${processName}</name>
        <declaration>// Place local declarations here.</declaration>
        <location id="id0" x="0" y="0">
        </location>
        <init ref="id0"/>
    </template>
    <system>// Place template instantiations here.
Process = ${processName}();
// List one or more processes to be composed into a system.
system Process;
    </system>
    <queries>
        <query>
            <formula></formula>
            <comment></comment>
        </query>
    </queries>
</nta>`;
}


export {renamingPreproc, generateProduct, getConstVars};
export default {};