#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as util from "util";

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {WARN, INFO, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import {MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates} from './Parser/multiAgentGraph.js';
import { log } from 'console';
import { generateAbstraction } from './Parser/generateAbstract.js';
import { AssignmentULabel } from './Parser/uLabel.js';
import { parseTreeWalk } from './Parser/masParser.js';

const argv = yargs(hideBin(process.argv))
    .count('verbose')
    .options({
        "input":{
            alias: 'i',
            describe: "a path to concrete model"
        },
        "output":{
            alias: 'o',
            describe: "a path to abstract model"
        },
        "verbose":{
            alias:'v',
            describe: 'choose verbosity level',
            choices: [0,1,2]
        }
    })
    .command({
        command: 'configure <pairs...>',
        aliases: ['config', 'cfg'],
        desc: 'Modify a config variables',
        handler: (argv) => {            
            argv.pairs.forEach(element => {
                // TODO: implement with config file
                console.log(`will set ${element.split('=')[0]} to ${element.split('=')[1]}`);
            });
        }
    })
    .argv;




if(process.platform==='win32'){
    console.log("Warn: compatibility with windows was not fully tested.");
}

function readIfExists(pathStr){
    let inputModelPath = path.resolve(pathStr);

    if(path.extname(pathStr)!=='.xml'){
        console.warn(`Expected input model extension is .xml, but received ${path.extname(pathStr)}`)
    }

    try{
        return fs.readFileSync(inputModelPath, "utf8")
    }catch(e){
        console.log(`${e.message}`);
        return null;
    }
}

if(!argv.input)process.exit(1);

let inputStr = readIfExists(argv.input);

// terminate if nothing was read
if(inputStr===null){
    process.exit(1)
}

if(argv.verbose){
    SET_VERBOSE(argv.verbose)
}








// TODO: exec each of those as fork/child process
let t = new AssignmentULabel("pack_sent[i]= x+y+22/2,foo(),bar(x,1), sh_vt = choice, temp = pack_sent[i] && pack_sent[j]")
// console.log(t.stringWithContext());
// console.log(t.vars);
// console.log(t.atomicVars);




// t = t.toList().map(x=>{
//     return Object.keys(parseTreeWalk(x[2], 'expr').parser._varOccurences)
// })




// console.log(t.getParameters(new Set(['pack_sent'])));















// TODO: exec each of those as fork/child process
if(true){
// let mg = new MASGraph(inputStr);
let mg = new MASGraph('');
mg.fromString(inputStr)
// let s = substituteConsts(mg.tree, mg.parser.constDict)
// console.log(s)
unfoldTemplates(mg)
// mg.unfoldAlternatives();



// console.log(mg.global);

// for(let i=0;i<mg.tree.getChildCount();i++){
//     let curr = mg.tree.getChild(i);
//     // if(Object.values(mg.parser._constDeclarations).map(x=>x.parentCtx).indexOf(curr)!==-1){
//     if(curr?.type?.constant){
//         console.log(`@CONST: ${curr.getText()}`)
//     }else{
//         console.log(curr.getText());
//     }
// }
// console.log(mg.parser._constDeclarations['N_V'].getText())
// mg2.printEdges()

// console.log(mg.agents.Voter.edges[0].select.computeChoiceSpace());

// for(const a in mg.agents){
//     console.log(`Agent ${a}`);
//     console.group();
//     console.log(mg.agents[a].local);
//     mg.agents[a].edges.forEach(e => {
//        console.log(`${e.src} --[${e.select.content ? e.select.content+' ' : ''} ${e.guard.content || 'T'} : ${e.synchronisation.content}${e.assignment.content || '_'} ]-> ${e.trg}`)
//     });
//     console.groupEnd();
// }

// console.log('====================');

// mg.unfoldSelectEdges()
// mg.unfoldAlternatives()



// mg.printEdges()
// console.log("==================================");
// mg.printEdges()


console.log("==================================");
let agentNames = Object.keys(mg.agents);
mg = computeExtMAS(mg);
mg.unfoldAlternatives();

let s = mg.toXML();
// fs.writeFileSync('./output_files/unfolded_model.xml',s)

mg = new MASGraph('');
mg.fromString(s)

// console.log(Object.keys(mg.agents));
// let context = {
//     "sh_sg":1,
//     "sh_vt":2,
//     "tally_1":22,
//     "tally_2":23,
//     "tally_3":24,
//     "dec_recv": [1,1,2],
//     "pack_sent": [0,0,0]
// }
let ld = approximateLocalDomain(mg, {
    "targetVars": ['pack_sent'], 
    "initVal": [[0,0,0]],
    // "targetTemplate": "Authority"
}, 1)


console.log({agentNames});


// console.log(util.inspect(ld, false, null, true /* enable colors */))


// console.log(restrictionOfLocalDomain(ld, 3));

let myd = restrictionOfLocalDomain(ld, 3);
// console.log(util.inspect(d, false, null, true /* enable colors */))


let mgOrig = new MASGraph();
mgOrig.fromString(inputStr);







let xml = generateAbstraction(mgOrig, {
    template: "Authority",
    scope: "*",
    argsN: [],
    argsR: ['pack_sent'],
    "initVal": [[0,0,0]],
    hash: '_',
    d: myd
})
fs.writeFileSync('./output_files/abstract_model.xml',xml)


console.log("==================================");
// mgOrig.printEdges();



function restrictionOfLocalDomain(ld, i, with_union=true, sep=','){
    let res = {};
    for(const pair of ld){
        let lid = pair[0].split(sep)[i];
        
        if(!res.hasOwnProperty(lid)){
            res[lid] = pair[1]
        }else{
            res[lid][with_union ? 'cup' : 'cap'](pair[1].vals)
        }
    }

    for(const lid in res){
        // console.log(res[lid]);
        res[lid] = Object.values(res[lid].vals)
    }
    
    return res;
}


// mg.agents.Authority.edges[0].assignment.atomicEvalWithContext(context);
// console.log(mg.agents.Authority.edges[5].guard.content);
// console.log(mg.agents.Authority.edges[5].guard.vars);
// console.log(context);

// console.log(mg.agents.Voter.tparam);
// console.log(mg.agents.Voter.edges);
// console.log(mg.agents.Authority.edges[5].guard.evalWithContext(context));;
// console.log(mg.parser.varDecDom);

// console.log(mg.agents.Voter.edges[1].select);
// console.log(mg.agents.Voter.edges[0].select.pairs['vt'].getTypedRuleContexts(yagParser.Bound_rangeContext));

// console.log(mg.agents.Authority.parser._varDeclarations['pack_sent'].vid.getText());
// console.log(mg.tree);
// console.log(Object.keys(mg.agents.Authority.edges[1].assignment.parser._varOccurences));

// console.log(mg.agents.Authority.edges[1].assignment.content);
// console.log(mg.agents.Authority.edges[1].assignment.vars);
// mg.agents.Authority.edges[1].assignment.atomic.forEach((x,i)=> {
//     console.log(`atomic ${i} = ${x.getText()}`)
// });
// console.log(mg.agents.Authority.edges[1].select.content);
// console.log(mg.agents.Authority.edges[1].select.vars);

// console.log(mg.agents.Authority.edges[0].synchronisation.content);
// console.log(mg.agents.Authority.edges[0].synchronisation.vars);
// // console.log(mg.agents.Authority.edges[0].synchronisation);

// console.log(Object.keys(mg.agents.Authority.edges[0].select.pairs));
// console.log(Object.keys(mg.parser.constDict));
// console.log(mg.parser._varOccurences);
// console.log(mg.agents.Authority.edges[0].assignment.templateString);
// console.log(mg.agents.Authority.edges[0].assignment.templateFunction.call({}));
// console.log(mg.agents.Authority.edges[0].assignment.stringWithContext({
//     'sh_sg':13,
//     'sh_vt':'not_shared_vote'
// }));

// mg.reduceToMayTemplate('Authority')

// console.log(mg)


}