// generate the extended MAS graph:
/*
Steps:
1) rename local variables
2) starting from the initial state process the edges, generating the reachable collection of locations

Notes:
* according to df the resulting MAS graph must be synch-free
* assumptions same as for the PART B


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
import CustomListener from './customListener.js';
import { dir } from 'console';

// ============================================================


// read XML for the concrete model
const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel.replace('.xml', '_mas.xml'), "utf8");
const xmlInputString2 = fs.readFileSync(CONFIG.pathToInputSample, "utf8");

let model = new UppaalXML(xmlInputString);
let result = new UppaalXML(xmlInputString2);

const LID_SEP = '__'; // agent's location separator

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
for(let i =0;i<numberOfAgents;i++){
    xlocation_0.push(model.nta.template[i].init[0].$.ref);
}
xlocation_ids.push(xlocation_0.join(LID_SEP));
let xedges = [];

let myq = [xlocation_0.join(LID_SEP)];

while(myq.length!=0){
    let curr_loc = myq.shift().split(LID_SEP);
    for(let i=0;i<numberOfAgents;i++){
        let local_edges = model.nta.template[i].transition.filter(t=>t.src==curr_loc[i]);
        for(let j=0;j<local_edges.length;j++){
            let edge = local_edges[j];
            // todo: check if hte edge has a synchronisation label
            if(edge['synchronisation']){
                // todo: strip whitespace
                let chan = edge['synchronisation'].slice(0,-1);
                let symb = edge['synchronisation'].slice(-1);
                if(symb!='?' && symb!='!')console.log(`ERR: unexpected symbol for synchronisation occured "${symb}"`);
                
                const reg_sync_arr = /([^\s\[\]]+)([^\s]*)$/m;
                let match = chan.match(reg_sync_arr);
                let cond = []; // extra-condition for array identifier (e.g., for `ch[i]` and `ch[j]` we add `i==j`)

                // check if chan is array identifier
                if(match[2]){ 
                    chan = match[1];
                    cond = match[2].split('][').map(s=>s.replace(/[\[\]]/gm,''));
                }


                if(!sync_edges_queue[chan]){
                    sync_edges_queue[chan] = {
                        '!': [],
                        '?': []
                    };    
                }
                sync_edges_queue[chan][symb].push([i,edge,cond]); // pair of (agent, edge)
            }else{
                xedges.push({
                    "src":curr_loc.join(LID_SEP),
                    "trg":curr_loc.map((li,ind)=>ind==i?edge.trg : li).join(LID_SEP),
                    "select": edge["select"] || "",
                    "guard":edge["guard"] || "",
                    "synchronisation":"",
                    "assignment":edge["assignment"]|| "",
                })
            }
        }
    }

    for(const [key, val] of Object.entries(sync_edges_queue)){
        for(let i=0;i<val['!'].length;i++){
            for(let j=0;j<val['?'].length;j++){
                let agent = [val['!'][i][0], val['?'][j][0]];
                let edge = [val['!'][i][1], val['?'][j][1]];
                
                let cond = [val['!'][i][2], val['?'][j][2]];
                let guard_append = [];
                if(cond[0].length!=cond[1].length){
                    console.log(`ERR, unexpected chan arr identifiers of different dim`);
                }
                for(let k=0;k<cond[0].length;k++){
                    guard_append.push(`${cond[0][k]}==${cond[1][k]}`);
                }
                guard_append.map(s=>s).join('&&')

                xedges.push({
                    "src":curr_loc.join(LID_SEP),
                    "trg":curr_loc.map((li,ind)=>ind==agent[0]?edge[0].trg : li).map((li,ind)=>ind==agent[1]?edge[1].trg : li).join(LID_SEP),
                    "select": [edge[0]["select"], edge[1]["select"]].filter(s=>s).join(',\n') || "",
                    "guard": [`${guard_append}`,`${edge[0]["guard"] || ''}`,`${edge[1]["guard"] || ''}`].filter(s=>s).map(s=>`${s}`).join(' && ') || "",
                    "synchronisation":"",
                    "assignment": [edge[0]["assignment"],edge[1]["assignment"]].filter(s=>s).join(',\n')  || "",
                })
            }
        }
    }
    sync_edges_queue=[];
    
    // add to queue if not in xlocation_ids already
    xedges.forEach(edge=>{
        if(xlocation_ids.indexOf(edge.trg)==-1){
            xlocation_ids.push(edge.trg);
            myq.push(edge.trg);
        }
    })
}

// console.log(xedges);
// console.log(xlocation_ids);

// console.log(model['Voter'].transition[0]);
// console.log(model['Voter'].transition[0].label);

// translate the results into uppaalXML
result.flushTemplateLocations("ExtendedMAS");
xlocation_ids.forEach(loc=>{
    result.addLocationToTemplate("ExtendedMAS",loc)
})
result.setInitLocationToTemplate("ExtendedMAS", xlocation_0.join(LID_SEP))

xedges.forEach(edge=>{
    result.importEdgeToTemplate("ExtendedMAS", edge)
})


// merge declarations
result.global = model.global;
result["ExtendedMAS"].local = model.nta.template.map(_t => `// From ${_t?.name[0]}:\n`+_t.declaration).join('\n');


// console.log(result.ExtendedMAS.location)
// console.log(result.ExtendedMAS.location[0].name)
// console.log(result.ExtendedMAS.init);




// console.log(result.ExtendedMAS.location[0].name)
// console.log(typeof result.ExtendedMAS.location[0].name);
// result.addLocationToTemplate("ExtendedMAS","id12")

// result.setInitLationToTemplate("ExtendedMAS","id12")
// console.log(result.ExtendedMAS.location)
// console.log(result.ExtendedMAS.location[1].name)
// console.log(typeof result.ExtendedMAS.location[1].name);

fs.writeFileSync(CONFIG.OUTPUT.DIR + '/ext_model.xml', result.toString());

/*
start with l_0 = \prod a[i].l_0
for every i in #Agents:
    process all edges (marking if done for synch),
        possibly adding the new ones
        if target location is not there - add it
*/

// todo: add methods for addLocation and addEdge in the uppaalXML class
