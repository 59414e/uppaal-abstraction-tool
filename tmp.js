#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as util from "util";

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import {WARN, ERRR, DEBUG, SET_VERBOSE} from './simpleLogger.js';
import {MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates} from './Parser/multiAgentGraph.js';
import { log } from 'console';
import { generateAbstraction } from './Parser/generateAbstract.js';
import { AssignmentULabel, GuardULabel } from './Parser/uLabel.js';
import { parseTreeWalk } from './Parser/masParser.js';
import yagParser from './Parser/YetAnotherGrammar/yagParser.js';

// let str = "pack_sent[i]==1 && dec_recv[vi]!=1 || a==1 && !b || 1==x || d && e";
// let str = "pack_sent[i]==1 && 2==3 || 1!=1 || !5" ;
let str = "x==4 || x!=4" ;
let {tree, parser} = parseTreeWalk(str, "dnf");
// let {tree, parser} = parseTreeWalk("a==1 && !b || c && d && e", "dnf");


// for(let i=0;i<tree.getChildCount();i++){
//     if(tree.getChild(i)?.ruleIndex == yagParser.RULE_conjuction){
//         console.log(`conjunction: ${tree.getChild(i).getText()}`);
//     }
// }

let g = new GuardULabel(str);
let res = g.shortCircuit()

console.log(res);





