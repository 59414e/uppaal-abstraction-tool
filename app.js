#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as util from "util";

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


import {WARN, ERRR, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import {MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates, UPPER_APPROX, LOWER_APPROX, mapUnion, mapIntersection} from './Parser/multiAgentGraph.js';
import { log } from 'console';
import { generateAbstraction } from './Parser/generateAbstract.js';
import { AssignmentULabel } from './Parser/uLabel.js';
import { parseTreeWalk } from './Parser/masParser.js';
import { printTable } from './Parser/utils.js';

const CONFIG_PATH = './config.json';
const COMMAND = {
    INFO:1,
    PREPROC:2,
    APPROX:3,
    ABSTRACT:4
}


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
    .config(JSON.parse(fs.readFileSync(CONFIG_PATH),'utf-8'))
    .command({
        command: 'configure <pairs...>',
        aliases: ['config', 'cfg'],
        desc: 'Modify a config variables',
        handler: (argv) => {            
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
    })
    .command({
        command: 'unfold [code]',
        desc: `Produce an extended MAS graph for code=0, or ungroup edges by {select-label, guard-alternative, tparam, instances} if code>0 and divisible by {1,2,4,8} resp.`,
        handler: (argv) => {
            let inputStr = fs.readFileSync(argv["input"],'utf-8');
            let mg = new MASGraph();
            mg.fromString(inputStr)
            let code = typeof argv["code"]!=='undefined' ? Number(argv["code"]) : argv["unfold"]; 
            
            mg.consumeConst();
                        
            if(code == 0){
                mg.unfoldAlternatives()
                mg = unfoldTemplates(mg)
                mg = computeExtMAS(mg)
            }else{
                if(code>8){
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
            process.exit(0);
        }
    })
    .command({
        command: 'approximate <type> [params...]',
        aliases: ['approx', 'approximation'],
        desc: 'type={1,2} for {upper,lower}-approximation resp.',
        handler: (argv)=>{argv.command = COMMAND.APPROX}
        // handler: (argv)=>{
        //     console.log(`approx`);
        //     console.log(argv);
        //     // process.exit(0);
        // }
    })
    .command({
        command: 'abstraction [params...]',
        aliases: ['abstract'],
        desc: '',
        handler: (argv)=>{argv.command = COMMAND.ABSTRACT}
        // handler: (argv)=>{
        //     console.log(`abstract`);
        //     console.log(argv);
        //     process.exit(0);
        // }
    })
    .command({
        command: 'info [selector]',
        desc: '"vars"?.("global" | "const") | <TemplateName>?.( "vars" | "locations" | "edges" )',
        handler:  (argv)=>{argv.command = COMMAND.INFO}
        // handler: (argv)=>{
        //     let sArr = argv["selector"].split('.') ?? '';
            


        //     if(sArr.length==0){
        //         // print all   
        //     }else{
        //         if(sArr[0] == "vars"){

        //         }else{
        //             let rootSelector = sArr[0];
        //             // check if exists 

        //             let childSelector = sArr?.[1];

        //             if(typeof childSelector === "undefined"){
        //                 // print all infor
        //             }else if(childSelector === 'vars'){
        //                 // print local vars from rootSelector
        //             }else if(childSelector === 'locations'){
        //                 // print locations 
        //             }else if(childSelector === 'edges'){
        //                 // print edges
        //             }
        //         }
        //     }
            
        //     console.log(argv);
        //     process.exit(0);
        // }
    })
    .argv;


if(process.platform==='win32'){
    console.log("Warn: compatibility with windows was not fully tested.");
}

// console.log(argv);
commandHandler();
// argv._.forEach(x=>{
//     console.log(`executing command ${x}`);   
//     commandHandler(x);
// })

process.exit(0)

function commandHandler(){
    let mg = new MASGraph();
    readXmlString(argv.input, (str)=>mg.fromString(str), ()=>process.exit(0))

    if(argv.command === COMMAND.INFO){
        let sArr = argv["selector"].split('.') ?? '';
        if(sArr.length === 0){
            // print all   
            console.log(`all info printed`);
        }else{
            let rootSelector = sArr[0];
            let childSelector = sArr?.[1];


            //todo[4]: add other attributes (e.g., type/domain, dim, initial value)
            if(rootSelector == "vars"){
                if(typeof childSelector === "undefined"){
                    
                }else if(childSelector === "global" || childSelector === "shared"){
                    let globalDec = mg.parser.varDecDom;
                    printTable(
                        Object.entries(globalDec).map(x=>[x[0], (x[1].dim!=0 ? x[1].dim : ''), x[1].range.join(' ... ')]),
                        ["ID", "Dim", "Domain"]
                    )
                }else if(childSelector === "const"){
                    let constDec = mg.parser.constDict;                  
                    printTable(
                        Object.entries(constDec).map(x=>[x[0], mg.parser._constDeclarations[x[0]]?.dim?.getText() ?? '', x[1]]),
                        ["ID", "Dim", "Value"]
                    )
                }
            }else{                
                // check if agent exists 
                if(!(new Set(Object.keys(mg.agents))).has(rootSelector)){
                    console.log(`Agent ${rootSelector} was not found...`);
                    return;
                }

                let agent = mg.agents[rootSelector];               

                
                if(typeof childSelector === "undefined"){
                    // print all infor
                }else if(childSelector === 'vars'){
                    //todo[4]: (optional) const substitution
                    
                    // print local vars from rootSelector
                    let localDec = agent.parser.varDecDom;
                    printTable(
                        Object.entries(localDec).map(x=>[x[0], (x[1].dim!=0 ? x[1].dim : ''), x[1].range.join(' ... ')]),
                        ["ID", "Dim", "Domain"]
                    )
                }else if(childSelector === 'locations'){
                    // print locations as `l_name (l_id)`
                    printTable(
                        Object.entries(agent.nodes).map(x=>[x[0], x[1].name]),
                        ["ID", "Name"]
                    )
                }else if(childSelector === 'edges'){
                    agent.edges.forEach(e=>printEdge(e))
                }
            }
        }
    }else if(argv.command === COMMAND.APPROX){
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

            
            if(obj["targetAgent"]){
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

            console.log(ld);

            // let str = JSON.stringify(ld.map(x=>[x[0],[...x[1].entries()]]), null, 4)
            // console.log(str);

            fs.writeFileSync(argv["output"], desc+ JSON.stringify(ld,null,4))
            // fs.writeFileSync(argv["output"], desc+ str)
        }
        // mg.consumeConst();
        // approximateLocalDomain(mg, params, argv["params"])
        // let sArr = argv["params"].split('.') ?? '';
    }else if(argv.command === COMMAND.ABSTRACT){
        console.log(argv["params"]);
        
        let obj = argv["params"].map(x=>x.split('=')).reduce((acc,x)=>(acc[x[0]]=x[1], acc), {})

        if(obj["argsR"]){
            obj["argsR"]=obj["argsR"].split(',')
        }

        if(obj["initVal"]){
            obj["initVal"] = JSON.parse(`[${obj["initVal"]}]`);
        } 

        let myd = {};
        if(obj["mapping"]){
            myd = fs.readFileSync(obj["mapping"],'utf-8');            
            myd = JSON.parse(myd.replace(/\/\*[^\*]*\*\//g, ''));
            console.log(myd);
            
            // myd = myd.reduce((acc,x)=>(acc[x[0]]=new Map(x[1]),acc),{})
            obj.d = myd
        }


        

        // myd = Object.entries(myd).reduce((acc,el)=>{
        //     acc[el[0]] = {vals:{}};

        //     el[1].forEach(x=>acc[el[0]].vals[x.join(',')]=x)
        // },{})
        
        console.log(myd);

        obj = Object.assign({
            scope: "*",
            argsN: [],
            argsR: [],
            hash: '_'
        },obj);

        // mg.consumeConst();
        let res = generateAbstraction(mg, obj)
        
        console.log(res);
        
        fs.writeFileSync(argv["output"], res)
        
        // let xml = generateAbstraction(mgOrig, {
        //     template: "Authority",
        //     scope: "*",
        //     argsN: [],
        //     argsR: ['pack_sent'],
        //     "initVal": [[0,0,0,0]],
        //     hash: '_',
        //     d: myd
        // })

    }
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

    // for(const pair of ld){
    //     let lid = pair[0].split(sep)[i];
        
    //     if(!res.hasOwnProperty(lid)){
    //         res[lid] = pair[1]
    //     }else{
    //         res[lid][with_union ? 'cup' : 'cap'](pair[1].vals)
    //     }
    // }

    for(const lid in res){
        // console.log(res[lid]);
        // res[lid] = Object.values(res[lid].vals)
        res[lid] = [...res[lid].values()]
    }
    
    return res;
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
// let t = new AssignmentULabel("pack_sent[i]= x+y+22/2,foo(),bar(x,1), sh_vt = choice, temp = pack_sent[i] && pack_sent[j]")
// console.log(t.stringWithContext());
// console.log(t.vars);
// console.log(t.atomicVars);




// t = t.toList().map(x=>{
//     return Object.keys(parseTreeWalk(x[2], 'expr').parser._varOccurences)
// })




// console.log(t.getParameters(new Set(['pack_sent'])));















// TODO: exec each of those as fork/child process
// if(true){
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
    "initVal": [[0,0,0,0]],
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
    "initVal": [[0,0,0,0]],
    hash: '_',
    d: myd
})
fs.writeFileSync('./output_files/abstract_model.xml',xml)


console.log("==================================");
// mgOrig.printEdges();






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