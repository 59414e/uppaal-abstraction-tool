#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as util from "util";

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {WARN, ERRR, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import {MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates, UPPER_APPROX, LOWER_APPROX, mapUnion, mapIntersection} from './Parser/multiAgentGraph.js';
import { generateAbstraction } from './Parser/generateAbstract.js';
import { AssignmentULabel } from './Parser/uLabel.js';
import { parseTreeWalk } from './Parser/masParser.js';
import { printTable } from './Parser/utils.js';

const CONFIG_PATH = './config.json';
const COMMAND = {
    INFO:1,
    PREPROC:2,
    APPROX:3,
    ABSTRACT:4,
    CONFIG: 5
}

// Initialize yargs object
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
        "dmap":{
            aliast: 'd',
            describe: "a path to local domain"
        },
        "verbose":{
            alias:'v',
            describe: "choose verbosity level",
            choices: [0,1,2]
        }
    })
    .config(JSON.parse(fs.readFileSync(CONFIG_PATH),'utf-8'))
    .command({
        command: "configure <pairs...>",
        aliases: ["config", "cfg"],
        desc: "Modify a config variables",
        handler:  (argv)=>{argv.command = COMMAND.CONFIG}
    })
    .command({
        command: "unfold <code>",
        desc: `Produce an extended MAS graph for code=0, or ungroup edges by {select-label, guard-alternative, tparam, instances} if code>0 and divisible by {1,2,4,8} resp.`,
        handler:  (argv)=>{argv.command = COMMAND.PREPROC}
    })
    .command({
        command: "approximate <type> [params...]",
        aliases: ["approx", "approximation"],
        desc: 'type={1,2} for {upper,lower}-approximation resp.',
        handler: (argv)=>{argv.command = COMMAND.APPROX}
    })
    .command({
        command: "abstraction [params...]",
        aliases: ["abstract"],
        desc: '',
        handler: (argv)=>{argv.command = COMMAND.ABSTRACT}
    })
    .command({
        command: "info [selector]",
        desc: `"vars"?.("global" | "const") | <TemplateName>?.( "vars" | "locations" | "edges" )`,
        handler:  (argv)=>{argv.command = COMMAND.INFO}
    })
    .argv;

if(process.platform==="win32"){
    console.log("Warn: compatibility with windows was not fully tested.");
}

SET_VERBOSE(argv["v"] ?? 0);


// Command handler IIFE
(function(){
    if(argv.command === COMMAND.CONFIG){
        handleConfig();
    }else{
        // console.log(argv);
        // console.log(`verbosity level = ${argv["v"]}`);
        // process.exit(1)
        
        // let x = JSON.parse(fs.readFileSync(CONFIG_PATH),'utf-8')
        // console.log(x);
        
        let mg = new MASGraph();
        readXmlString(argv["i"], (str)=>mg.fromString(str), ()=>process.exit(0))
        if(argv.command === COMMAND.INFO){
            handleInfo(mg);
        }else if(argv.command === COMMAND.APPROX){
            handleApprox(mg);
        }else if(argv.command === COMMAND.ABSTRACT){
            handleAbstract(mg);
        }else if(argv.command === COMMAND.PREPROC){
            handleUnfold(mg)
        }
    }
})();
process.exit(0)

function handleInfo(mg){
    let sArr = argv["selector"]?.split('.') ?? '';
    if(sArr.length === 0){
        // print all   
        console.log(`all info printed`);
    }else{
        let rootSelector = sArr[0];
        let childSelector = sArr?.[1];

        //todo[4]: add other attributes (e.g., type/domain, dim, initial value)
        if(rootSelector == "vars"){
            // print globally shared variables (does not include consts)
            if(typeof childSelector === "undefined" || childSelector === "global" || childSelector === "shared"){
                let globalDec = mg.parser.varDecDom;
                printTable(
                    Object.entries(globalDec).map(x=>[x[0], (x[1].dim!=0 ? x[1].dim : ''), x[1].range.join(' ... ')]),
                    ["ID", "Dim", "Domain"],
                    "Global variables:"
                )
            }

            // print (global) const variables (does not include locally defined ones)
            if(typeof childSelector === "undefined" || childSelector === "const"){
                let constDec = mg.parser.constDict;                  
                printTable(
                    Object.entries(constDec).map(x=>[x[0], mg.parser._constDeclarations[x[0]]?.dim?.getText() ?? '', x[1]]),
                    ["ID", "Dim", "Value"],
                    "Constant variables:"
                )
            }
        }else{                
            // check if agent (of a given rootSelector exists) exists
            if(!(new Set(Object.keys(mg.agents))).has(rootSelector)){
                console.log(`Agent ${rootSelector} was not found...`);
                return;
            }

            // rootSelector - agent/template name
            let agent = mg.agents[rootSelector];               
            
            // print local vars from rootSelector
            if(typeof childSelector === "undefined" || childSelector === 'vars'){
                //todo[4]: (optional) const substitution
                let localDec = agent.parser.varDecDom;
                printTable(
                    Object.entries(localDec).map(x=>[x[0], (x[1].dim!=0 ? x[1].dim : ''), x[1].range.join(' ... ')]),
                    ["ID", "Dim", "Domain"],
                    `Local variables of ${rootSelector}:`
                )                
            }
            
            // print locations with their id in brackets, `l_name (l_id)`
            if(typeof childSelector === "undefined" || childSelector === 'locations'){
                printTable(
                    Object.entries(agent.nodes).map(x=>[x[0], x[1].name]),
                    ["ID", "Name"],
                    `Locations of ${rootSelector}:`
                )
            }
            
            // print local edges
            if(typeof childSelector === "undefined" || childSelector === 'edges'){
                let caption = `Edges of ${rootSelector}:`;
                console.log(`${'='.repeat(caption.length)}\n${"\x1b[1m"+caption+"\x1b[m"}\n${'='.repeat(caption.length)}`);
                agent.edges.forEach(e=>printEdge(e))
            }
        }
    }
}

function handleUnfold(mg){
    let code = typeof argv["code"]!=='undefined' ? Number(argv["code"]) : argv["unfold"];     
    mg.consumeConst();
                
    if(code == 0){
        mg.unfoldAlternatives()
        mg = unfoldTemplates(mg)
        mg = computeExtMAS(mg)
    }else{
        if(code>=8){
            mg = unfoldTemplates(mg);
            code = code%8;
        }
        
        if(code%2){
            mg.unfoldSelectEdges()
            code-=1;
        }

        if(code%4){
            mg.unfoldGuardEdges();
            code-=2;
        }

        if(code%8){
            mg.unfoldTparamEdges()
            code-=4
        }
    }

    if(argv["output"]){
        fs.writeFileSync(argv["output"], mg.toXML())
    }
}

function handleApprox(mg){
    if(argv["type"]!==UPPER_APPROX && argv["type"]!==LOWER_APPROX){
        console.log(`Local domain approximation type is not valid (use 1 for upper, 2 for lower)`);
        return 1;
    }

    if(argv["params"]){
        // console.log(argv["params"]);
        let obj = argv["params"].map(x=>x.split('=')).reduce((acc,x)=>(acc[x[0]]=x[1], acc), {})
        if(obj["targetVars"]){
            obj["targetVars"]=obj["targetVars"].split(',')
        }
        if(obj["initVal"]){
            obj["initVal"] = JSON.parse(`[${obj["initVal"]}]`);
        } 
       
        let desc = `/* ${argv["type"]===UPPER_APPROX ? "Upper" : "Lower"} approximation of a local domain for [${obj["targetVars"].join(',')}]${obj["reduceTo"] ? ", reduced to locations of \""+obj["reduceTo"]+"\"" : ''}*/\n`;

        mg.consumeConst();

        if(obj["targetTemplate"]){
            //
        }else{
            mg = unfoldTemplates(mg)
            if(obj["reduceTo"]){
                // console.log(obj["reduceTo"]);
                // console.log(Object.keys(mg.agents));
                obj["reduceToInd"] = Object.keys(mg.agents).indexOf(obj["reduceTo"]);
            }
            mg = computeExtMAS(mg);    
        }
                
        mg.unfoldAlternatives();

        let s = mg.toXML();
        fs.writeFileSync(argv["output"], s)
        mg = new MASGraph('');
        mg.fromString(s)

        let ld = approximateLocalDomain(mg, obj, argv["type"])

        if(obj["reduceToInd"]){
            ld = restrictionOfLocalDomain(ld,obj["reduceToInd"],argv["type"]===UPPER_APPROX)
        }else{
            ld = ld.reduce((acc,x)=>(acc[x[0]]=[...x[1].values()],acc),{})
        }

        // console.log(ld);
        fs.writeFileSync(argv["dmap"], desc+ JSON.stringify(ld,null,4))
    }
}

function handleAbstract(mg){
    // console.log(argv["params"]);
    let obj = argv["params"].map(x=>x.split('=')).reduce((acc,x)=>(acc[x[0]]=x[1], acc), {})
    obj = Object.assign(argv, obj)

    if(obj["targetVars"]){
        obj["argsR"] = obj["targetVars"];
    }

    if(obj["argsR"]){
        obj["argsR"]=obj["argsR"].split(',')
    }

    if(obj["initVal"]){
        obj["initVal"] = JSON.parse(`[${obj["initVal"]}]`);
    } 
    
    let myd = {};
    if(obj["dmap"]){
        myd = fs.readFileSync(obj["dmap"],'utf-8');            
        myd = JSON.parse(myd.replace(/\/\*[^\*]*\*\//g, ''));
        // console.log(myd);
        // myd = myd.reduce((acc,x)=>(acc[x[0]]=new Map(x[1]),acc),{})
        obj.d = myd
    }
    
    obj = Object.assign({
        scope: "*",
        argsN: [],
        argsR: [],
        hash: '_'
    },obj);

    // mg.consumeConst();
    let res = generateAbstraction(mg, obj)    
    fs.writeFileSync(argv["output"], res)
}

function handleConfig(){
    let obj = JSON.parse(fs.readFileSync(CONFIG_PATH),'utf-8');
    argv.pairs.forEach(pair=>{
        let [key,val] = pair.split('=');
        if(key=='i' | key=='input'){
            obj.input = val
        }else if(key=='o' || key=='output'){
            obj.output = val;
        }else if(key=='approximation'){
            obj.approximation = val;
        }else if(key=='abstraction'){
            obj.abstraction = val;
        }else if(key=='verbose' || key=='v'){
            obj.verbose = Number(val);
        }else if(key=='unfold'){
            obj.unfold = Number(val);
        }
    })
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(obj, null, 4))
}


function readXmlString(input, success, error){
    // read model    
    let inputModelPath = path.resolve(input);
    if(path.extname(inputModelPath)!=='.xml'){
        (`Expected input with .xml extension, but received ${path.extname(inputModelPath)}`)
    }
    
    try{
        let xmlString = fs.readFileSync(inputModelPath, "utf8")
        success(xmlString)
    }catch(e){
        if (e.code === 'ENOENT') {
            ERRR(`No such file: ${inputModelPath}`);
        }else{
            console.log(`${e.message}`);
        }
        error()
    }
}

function restrictionOfLocalDomain(ld, i, with_union=true, sep=','){
    let res = {};
    let mapOp = with_union ? mapUnion : mapIntersection;
        
    for(const [loc,map] of ld){
        // console.log(`cutting out ${i}-th element of ${loc}`);
        let lid = loc.split(sep)[i];
        if(!res.hasOwnProperty(lid)){
            res[lid] = new Map(map)
        }else{            
            mapOp(res[lid], map);
        }
    }

    for(const lid in res){
        res[lid] = [...res[lid].values()]
    }
    
    return res;
}