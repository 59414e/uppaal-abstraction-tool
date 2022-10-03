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
const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");

let model = new UppaalXML(xmlInputString);

// do the prepocessing of the input model to ensure no errors/bugs arise
// 1) alpha-renaming of the variables
// 2) prepend the location ids wiht the agent instance name for readability in the ext. location space
// 3) validate the input model for the special symbols in the location name tags (e.g., commas)

// load an empty model and append the locations there
// ...

let numberOfTemplates = model.nta.template.length;

let numberOfAgents = numberOfTemplates;

// 
let xlocation_ids = [];

// create an initial location
let xlocation_0 = [];
for(let i =0;i<numberOfAgents;i++){
    xlocation_0.push(model.nta.template[i].init[0].$.ref);
}
xlocation_ids.push(xlocation_0.join(','));
let xedges = [];

let myq = [xlocation_0.join(',')];

while(myq.length!=0){
    let curr_loc = myq.shift().split(',');
    for(let i=0;i<numberOfAgents;i++){
        let local_edges = model.nta.template[i].transition.filter(t=>t.src==curr_loc[i]);
        for(let j=0;j<local_edges.length;j++){
            let edge = local_edges[j];
            // todo: check if hte edge has a synchronisation label

            // if no synch - proceed as below
            xedges.push({
                "src":curr_loc.join(','),
                "trg":curr_loc.map((li,ind)=>ind==i?edge.trg : li).join(','),
                "select": edge["select"] || "",
                "guard":edge["guard"] || "",
                "synchronisation":edge["synchronisation"] || "",
                "assignment":edge["assignment"]|| "",
            })
            // else
            // ...
            // fi
        }
    }
    // add to queue if not in xlocation_ids already
}

console.log(xedges);
/*
start with l_0 = \prod a[i].l_0
for every i in #Agents:
    process all edges (marking if done for synch),
        possibly adding the new ones
        if target location is not there - add it
*/

// todo: add methods for addLocation and addEdge in the uppaalXML class

function convertLabelToXML(kind, body){
    // if(Array.isArray(label)){
    //     return label.map(convertLabelToXML).join(',');
    // }
    return `<label kind="${kind}"><${body}/label>`;
}

//todo: put under UEdge class as method
function convertEdgeLabelToXML(edge){
    let kindList = ["select", "guard", "synchronisation", "assignment"]
    let str = "";
    kindList.forEach(kind=>{
        if(edge[kind])str+=convertLabelToXML(kind, edge[kind])
    })
    return str;
}

function convertEdgeToXML(edge){
    let str = "<transition>\n";
    str += `<source ref="${edge.src}"/>\n`;
    str += `<target ref="${edge.trg}"/>\n`;
    str += convertEdgeLabelToXML(edge) + '\n';
    str += `</transition>\n`;
    return str;
}

// todo: add pos attributes (with auto-set option)
function convertLocationToXML(loc){
    let str = `<location id="${loc.id}">\n`;
    if(loc.name)str+=`<name>${loc.name}</name>\n`;
    str+=`</location>`;
    return str;
}

