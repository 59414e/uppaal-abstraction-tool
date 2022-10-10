// ============================================================
// upper-approximation of a local domain values
// ============================================================
// 
//  Assumptions:
//  * updates are separated by `,\n`
//  * no two-dim (or more) array
//  * "simple" updates and guards
//  * CNF guards with == and != only
//  * guards without || atm (can be extended)
//      - NOTE: symmetry is not considered atm, thus it should always be comparison var to literal (or const var)

// todo:
// * add const preproc

// QOL todo:
// * add colours to console error, warn, info (or import chalk module)
//

// Remark:
// * es6 Set does not work as expected with arrays (as those are objects, that may refer to the lists with same values, but represent different pointers)



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
import CustomListener from './customListener1.js';
import { dir } from 'console';
import { parse } from 'url';

// ============================================================


// read XML for the concrete model
const xmlInputString = fs.readFileSync(CONFIG.OUTPUT.DIR+'/ext_model.xml', "utf8");

let vvars = ['mem_dec', 'mem_sg', 'mem_vt'];
let val0 = [0,0,0];
// let val0 = {
//     'mem_dec':0, 
//     'mem_sg':0, 
//     'mem_vt':0
// };
let model = new UppaalXML(xmlInputString);
let llist = model.getLocationsOf('ExtendedMAS');

const adj_list = model.adjacencyListOf("ExtendedMAS");
// get init values of vars in V
// ...

// let test = parseEdgeLabel("sh_vt=vt,sh_sg=sg,mem_sg=sg,mem_vt=vt,tally[((sh_vt-1)+N_C)%N_C+1]=sh_sg&&sh_vt>0?tally[sh_vt]+1:tally[((sh_vt-1)+N_C)%N_C+1],sh_vt=0,sh_sg=0;", "statement")
// console.log(test);



// compute reachability index r for each location
// ...
const reach_ind = model.reachabilityVectorOf("ExtendedMAS");
let edge_map = model.edgeMapOf("ExtendedMAS");


// filter out the edges, where vvars appear (on the lhs of updates) or (in guards)
for(let i=0;i<llist.length;i++){
    for(let j=0;j<llist.length;j++){
        let s = llist[i];
        let t = llist[j];

        edge_map[s][t] = edge_map[s][t].map(edge=>{
            let svars = edge.select ? model.getSelectLabelVars(edge.select).map(x=>x.name) : [];
            
            let ares = edge.assignment ? parseEdgeLabel(
                '{'+edge.assignment.replace(/\s+/gm,'').split(',').join(';')+';}', 
                'block'
            ): null;
            let gres = edge.guard ? parseEdgeLabel(edge.guard): null;
            
            let aintersec = ares?.lhs.filter(x=>vvars.includes(x)) || [];
            let gintersec = gres?.vars.filter(x=>vvars.includes(x)) || [];

            if(aintersec.length==0 && gintersec.length==0){
                edge.blank = true; // i.e. ignore its labels while processing
                // console.log(gres);
                // console.log(ares?.lhs);
                // console.log(`The blank: ${edge.guard || ''}:${edge.assignment?.replace(/\s+/gm,'') || ''}`);
            }else{
                edge.blank = false;
                edge.data = {
                    "avars": ares?.vars.filter(v=>svars.indexOf(v)==-1) || [], 
                    "gvars": gres?.vars.filter(v=>svars.indexOf(v)==-1) || [],
                    "aintersec": aintersec,
                    "gintersec": gintersec
                }                
            }            
            return edge;
        })
    }
}

let ld = llist.reduce((acc,el)=>(acc[el]=new Set(),acc),{}); // local domain map initialized with zeros
// let ld = llist.reduce((acc,el)=>(acc[el]=vvars.reduce((obj,curr)=>(obj[curr] = new Set(), obj),{}),acc),{}); // local domain map initialized with zeros

let pi = llist.reduce((acc,el)=>(acc[el]=new Set(),acc),{}); 
let color = llist.reduce((acc,el)=>(acc[el]='white',acc),{}); 

let initial_location = model.getInitialLocationOf("ExtendedMAS");
let queue = new Set();

ld[initial_location].add(val0.join(','));
// vvars.forEach(v=>ld[initial_location][v].add(val0[v]))

// starting from (l0,eta0) perform the BFS-like traversal until a stable d map is obtained
queue.add(initial_location)

while(queue.size!=0){
    let curr = extractMax(queue, reach_ind);

    // procIncEdges
    let prevDim = ld[curr].size;
    pi[curr].forEach(l=>{
        edge_map[l][curr].forEach(edge=>{
            console.log(`Processing an edge from ${l} to ${curr}`);
            if(edge.blank){
                // for(let vname in ld[l]){
                //     for(const elem of ld[l][vname]){
                //         ld[curr][vname].add(elem)
                //     }
                // }
                ld[l].forEach(v=>ld[curr].add(v)); // ld[curr] = union( ld[curr] , ld[l] )
            }else{
                procEdgeLabels(edge, vvars, model, ld[l],ld[curr])
                // prep list of ALL variables involved
                // refine by select

                // parse guards as assignments

                // then parse assignments
                // for all remaining evaluations
            }
        })
    });
    if(prevDim != ld[curr].size ){
        color[curr] = 'grey';
        // console.log(`Changed colour to ${color[curr]}`);
    }

    // procSelfLoops
    while(true){
        prevDim = ld[curr].size;
        edge_map[curr][curr].forEach(edge=>{
            console.log(`Processing an edge from ${curr} to ${curr}`);
            if(edge.blank){
                ld[curr].forEach(v=>ld[curr].add(v)); // ld[curr] = union( ld[curr] , ld[l] )
            }else{
                procEdgeLabels(edge, vvars, model, ld[curr], ld[curr])
            }
        })
        
        if(prevDim == ld[curr].size ){
            break;
        }else{
            color[curr] = 'grey';
        }
    }
    


    if(color[curr]!='black'){
        // enqueue all succ
        adj_list[curr].filter(l=>l!=curr).forEach(l => {
            queue.add(l);
            pi[l].add(curr);
        });
        color[curr] = 'black';
    }
}

console.log(ld);


// \begin{tests}

// \end{tests}



// TODO: extract const var-val map
// ....



function procEdgeLabels(edge, vvars, model, _ld_src, _ld_trg){
    let ld_src = new Set([..._ld_src].map(x=>x.split(',')));
    // let ld_trg = _ld_trg.split(',');
    // prep list of ALL variables involved
    // todo: extend with consts evaluation
    let etaRestriction = {}

    const constDict = {
        "N_V":1,
        "N_C":2,
        "id":1,
    }
    
    // get all variables that appear in the guard
    // filter out d to that which agree with guard
    // get all variables that appear in the update
    let sres = edge.select ? model.getSelectLabelVars(edge.select) : [];
    let svars = sres.map(x=>x['name']);

    sres.forEach(x=>{
        // let match = x.type.replace(/\s+/gm,'').match(/[^\d]*(\d+),(\d+)\]/);
        let match = x.type.replace(/\s+/gm,'').match(/[^\[]+\[([^\,]+),([^\]]+)\]/);
        
        function numberOrConstDictEntry(m){
            if(Number.isNaN(Number(m))){
                if(constDict[m]){
                    return constDict[m];
                }else{
                    console.log(`ERR, unexpected max bound "${m}" in the select "${x.name}:${x.type}"`);
                }
            }else{
                return Number(m)
            }
        }

        let range_max = numberOrConstDictEntry(match[2]);
        let range_min = numberOrConstDictEntry(match[1]);

        for(let i=range_min;i<=range_max;i++){
            if(!etaRestriction[x.name])etaRestriction[x.name] = [];
            etaRestriction[x.name].push(i);
        }
        // push evaluations which agree with select
    })
    let vvarsNotInSelect = [...vvars].filter(v=>svars.indexOf(v)==-1);


    let assignmentList = edge.assignment.replace(/\s*/g,'').split(',')

    // if LHS var is not in vvars and neither appears on the RHS later - ignore that
    let temp = assignmentList.map(stmt=>stmt.split(/=(.+)/s).slice(0,2))
    assignmentList = assignmentList.filter((el,i)=>{
        let vid = temp[i][0];
        if(vvarsNotInSelect.indexOf(temp[i][0])>=0){
            return true;
        }

        let appearsInRHS = false;
        for(let j=i+1;j<assignmentList.length;j++){
            if(temp[1].includes(vid)){
                appearsInRHS = true;
                break;
            }
        }
        if(!appearsInRHS)console.log(`removed ${temp[i][0]}=${temp[i][1]}`);
        return appearsInRHS;
    })

    // console.log(`Alpha = ${assignmentList.join(';')}`);
    // console.log(Object.keys(etaRestriction));
    
    
    let ares = assignmentList.length>0 ? 
        parseEdgeLabel('{'+assignmentList.join(';')+';}', 'statement') : null;
    let avars = ares?.vars?.filter(v=>svars.indexOf(v)==-1) || [];


    let gres = edge.guard ? parseEdgeLabel(edge.guard) : null;
    let gvars = gres?.vars || [];
    
    let intersectionA = ares?.lhs?.filter(x=>vvarsNotInSelect.includes(x)) || [];
    let intersectionG = gvars?.filter(x=>vvarsNotInSelect.includes(x)) || [];
    if(intersectionA.length==0 && intersectionG.length==0)return;

    let gsat = parseSimpleGuard(edge.guard, vvars);
    let noSatSelect = false;


    // note: this might not produce finest answers for guards with OR
    // todo: refactor

    // take source ld 

    //// const vnameToInd = _vvars.reduce((acc,curr)=>(acc[curr]=i),{})
    //// Array.from(ld_src).reduce((acc, curr)=>{},{})

    for(let el of ld_src){
        vvars.forEach((v,ind)=>{
            if(!etaRestriction[v])etaRestriction[v]=[];
            if(etaRestriction[v].indexOf(el[ind])==-1)etaRestriction[v].push(el[ind]);
        })
    }

    // parse guards as assignments
    // NOTE: symmetry is not considered atm, thus it should always be comparison var to literal (or const var)
    Object.entries(gsat).forEach(x=>{
        if(etaRestriction[x[0]] && etaRestriction[x[0]].indexOf(x[1])==-1){
            noSatSelect = true;
            console.log(`ERR, no select ${x[0]} sats the guard ${edge.guard}`); 
        }
        etaRestriction[x[0]] = x[1];
    })

    if(noSatSelect){
        return;
    }

    // take all possible evaluations for the remaining variables
    avars.forEach(x=>{
        if(!etaRestriction[x]){
            etaRestriction[x] = Array.from({length:32767*2},(v,k)=>k-32766)
        }
    })

    let prodSize = 1;
    for(let p in etaRestriction){
        // if(vvarsNotInSelect.indexOf(p)==-1 && ares?.rhs?.indexOf(p)==-1)
        if(vvarsNotInSelect.indexOf(p)==-1 && !(ares?.rhs?.indexOf(p)>=0))
            delete etaRestriction[p];
    }
    // console.log('------');

    etaRestriction = Object.entries(etaRestriction).map(x=>{
        prodSize *= typeof x[1]=='string' && etaRestriction[x[1]] ? etaRestriction[x[1]].length : x[1].length
        return {
            "name":x[0],
            "vals":typeof x[1]=='string' && etaRestriction[x[1]] ? etaRestriction[x[1]] : x[1]
        }
    })

    
    
    console.log(`Number of eta: ${prodSize}`);


    // if(prodSize>131068){
    //     console.log("guard");
    //     console.log(edge.guard);
        
    //     console.log("assignment");
    //     console.log(edge.assignment.replace(/\s+/gm,'').split(',').join(';\n'));
        
    //     console.log("etaRestr");
    //     console.log(etaRestriction);
    // }

    for(let ii=0;ii<prodSize;ii++){
        let etaCurr = {};
        let k = ii;
        
        for(let jj=0;jj<etaRestriction.length;jj++){
            let name = etaRestriction[jj].name;
            let m = etaRestriction[jj].vals.length;
            let val = etaRestriction[jj].vals[k%m];

            // console.log(`m=${m}, ii=${ii}, j=${jj}, k=${k}`);
            // console.log(`Assuming ${name} = ${val}`);
            etaCurr[name]=val;
            k = Math.floor(k/m);
        }

        // console.log(etaCurr);

        // console.log(ares);
        

        // find the last assignemnt stmt where vvar appear => discard the suffix
        if(ares){
            ares?.listener?.assignment_list?.forEach(stm=>{
                let left = stm[0].getText();
                let right = stm[1];
                
                // console.log("@" + right.vid.text);
                // console.log(etaCurr[right.vid.text]);
                
                // console.log(etaCurr);
                let str = ares.listener.substituteStr(right, etaCurr);
                // console.log(`left = ${left}, right = ${str}`);
                etaCurr[left] = eval(str);
            })
        }

        // todo: add filter over vvarsNotInSelect
        // console.log(etaCurr);
        // add vvars from etaCurr to ld_trg
        _ld_trg.add(
            vvars.map((v,ind)=>etaCurr[v]).join(',')
        )

        // console.log(etaCurr);
        // console.log(vvars.map((v,ind)=>etaCurr[v]));
        // console.log(ld_trg);


        // vvars.forEach(v=>{
        //     if(!ld_trg[v]) ld_trg[v] = new Set();

        //     if(etaCurr[v]){
        //         ld_trg[v].add(etaCurr[v]);
        //     }else{
        //         ld_trg[v].add(ld_src[v])
        //     }
        // })
    }
    

    // console.log(ares.listener.joinToString(ares.listener.assignment_list[0][1]));
    // console.log(ares.substituteCall({"inperson":1}));
    // console.log(ares.listener.substituteStr(ares.listener.assignment_list[0][1],{"inperson":1}));
    
    // console.log(etaRestriction);
    // encode "layers"/"levels" of the prod and iterate over it with eval for vvars

}

function evalWithContext(expr, context){

}

function parseEdgeLabel(input, ruleName='expr'){
    if (typeof input !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
    
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();
    const myListener = new CustomListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return {
        listener: myListener,
        // tree:tree,
        vars: myListener.getVarList(tree),
        lhs: [...myListener.lhs_vars],
        rhs: [...myListener.rhs_vars],
        substituteCall: myListener.substiteCallback(tree),
    };
}

// todo: refine - add vars from upd
// vvars \setminus svars !!!
function parseSimpleGuard(label, vvars){
    const g_reg = /([^=\&\|]*)(?:==|!=)([^=\&\|]*)/m;
    // console.log(label);
    let str = label.replace(/\s+/gm, ''); // remove whitespaces
    let res = {};

    str.split('&&').forEach(s=>{
        let match = s.match(g_reg);
        // console.log(`s = ${s}`);
        if(vvars.indexOf(match[1])){
            if(!res[match[1]]){
                res[match[1]] = match[2]
            }else if(res[match[1]]!=match[2]){
                return -1;
            }
        }
        // s.split('||').match(g_reg)
    })
    // console.log(`label = ${label}`);
    // console.log(res);
    return res;
}

function extractMax(q, priority_map){
    if(q.size==0){
        console.log(`ERR, attempting to extract from an empty queue`);
        return -1;
    }
    
    let arr = [...q];
    let max_el = arr[0];
    for(let i=1;i<arr.length;i++){
        if(priority_map[max_el]<priority_map[arr[i]]){
            max_el = arr[i];
        }
    }
    
    q.delete(max_el);
    return max_el;
}
const UINT16_MAX = 65535;
const INT16_MAX = 32767;
// let res = 0;
// for(let a=0;a<UINT16_MAX;a++){
//     for(let b=0;b<UINT16_MAX;b++){
//         if(a+b%2==0){
//             res++;
//         }
//     }
// }
// console.log(res);



function union(setA, setB) {
    const _union = new Set(setA);
    for (const elem of setB) {
        _union.add(elem);
    }
    return _union;
}

