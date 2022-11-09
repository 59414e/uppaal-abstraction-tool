#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {WARN, INFO, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import MASGraph from './Parser/multiAgentGraph.js';


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

// console.log(mg.agents.Authority.parser._varDeclarations['pack_sent'].vid.getText());
// console.log(mg.tree);
// console.log(Object.keys(mg.agents.Authority.edges[1].assignment.parser._varOccurences));
console.log(mg.agents.Authority.edges[1].assignment.content);
console.log(mg.agents.Authority.edges[1].assignment.vars);
mg.agents.Authority.edges[1].assignment.atomic.forEach((x,i)=> {
    console.log(`atomic ${i} = ${x.getText()}`)
});
console.log(mg.agents.Authority.edges[1].select.content);
console.log(mg.agents.Authority.edges[1].select.vars);

console.log(mg.agents.Authority.edges[0].synchronisation.content);
console.log(mg.agents.Authority.edges[0].synchronisation.vars);
// console.log(mg.agents.Authority.edges[0].synchronisation);

console.log(Object.keys(mg.agents.Authority.edges[0].select.pairs));
// console.log(Object.keys(mg.parser.constDict));
// console.log(mg.parser._varOccurences);
// console.log(mg.agents.Authority.edges[0].assignment.templateString);
// console.log(mg.agents.Authority.edges[0].assignment.templateFunction.call({}));
// console.log(mg.agents.Authority.edges[0].assignment.stringWithContext({
//     'sh_sg':13,
//     'sh_vt':'not_shared_vote'
// }));


