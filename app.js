#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {WARN, INFO, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import {MASGraph, approximateLocalDomain} from './Parser/multiAgentGraph.js';
import { log } from 'console';


const argv = yargs(hideBin(process.argv))
    .options({
        "input":{
            alias: 'i',
            describe: "a path to concrete model"
        },
        "output":{
            alias: 'o',
            describe: "a path to abstract model"
        },
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

let inputStr = readIfExists(argv.input);

// terminate if nothing was read
if(inputStr===null){
    process.exit(1)
}

let mg = new MASGraph(inputStr);

// console.log(mg.agents.Voter.edges[0].select.computeChoiceSpace());

// for(const a in mg.agents){
//     console.log(`Agent ${a}`);
//     console.group();
//     mg.agents[a].edges.forEach(e => {
//         console.log(`${e.src} --[${e.select.content ? e.select.content+' ' : ''} ${e.guard.content || 'T'} : ${e.synchronisation.content}${e.assignment.content || '_'} ]-> ${e.trg}`)
//     });
//     console.groupEnd();
// }

// console.log('====================');

// mg.unfoldSelectEdges()
// mg.unfoldAlternatives()



// mg.printEdges()
mg.unfoldAlternatives();
// console.log("==================================");
// mg.printEdges()


// console.log(mg.agents.Authority.edges[0].assignment.content);
let context = {
    "sh_sg":1,
    "sh_vt":2,
    "tally_1":22,
    "tally_2":23,
    "tally_3":24,
    "dec_recv": [1,1,2,1,2],
    "pack_sent": [0,0,0,0,0]
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
approximateLocalDomain(mg, {
    "targetVars": ['mem_sg', 'mem_vt'], 
    "initVal": [0, 0],
    "targetTemplate": "Voter"
}, 1)

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


