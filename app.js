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
// console.log(mg.agents.Authority);