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
//  * all the generated models discard the location name aliases and operate on their IDs 

// todo:
// * add const preproc
// * do not allow arrays (arr identifiers atm will be processed as variables potentially causing the logical errors)

// QOL todo:
// * add colours to console error, warn, info (or import chalk module)
//

// Remark:
// * es6 Set does not work as expected with arrays (as those are objects, that may refer to the lists with same values, but represent different pointers)



// built-in
import * as fs from 'fs';

// third-party
import antlr4 from 'antlr4';
import yagLexer from '../Parser/YetAnotherGrammar/yagLexer.js';
import yagParser from '../Parser/YetAnotherGrammar/yagParser.js';

// custom libs/files
import CONFIG from '../config.js';
import UppaalXML from '../Parser/uppaalxml.js';
import CustomListener from '../Parser/customListener1.js';

// ============================================================

// todo: substitute arrays with maps for faster look-up
function approximateLocalDomain(inputString, varInfo){
    // read XML for the concrete model
    let model = new UppaalXML(inputString);

    // let vvars = ['mem_dec', 'mem_sg', 'mem_vt'];
    // let val0 = [0,0,0]; 
    
    // todo: auto-retrieve val0 from the code
    let vvars = varInfo.vars;
    let val0 = varInfo.valInit; 
    
    const SINGLETON_NAME = model.getTemplateNames()[0]; 
    const INT16_MAX = CONFIG.approximateDomain.int16Max;
    

    if(SINGLETON_NAME != CONFIG.preprocessModel.productName){
        console.log(`WARN, expected singleton name to be ${CONFIG.preprocessModel.productName}, but recevied ${SINGLETON_NAME}`);
    }

    let constDict = getConstVars(model.global +'\n'+ model.nta.template[0].declaration[0]);
    let varDomain = getVarDomain(model.global +'\n'+ model.nta.template[0].declaration[0]);

    for(let v in varDomain){
        let chunk = varDomain[v].replace(/[\,\[\]]+/gm,'').split(' ').filter(x=>x)
        if(chunk[0] === 'chan' || chunk[0] === 'const')delete varDomain[v];
        else if(chunk[0]=== 'int'){
            if(chunk[1] && chunk[2]){
                varDomain[v] = [
                    Number(retrieveNumberOrDictEntry(chunk[1], constDict)),
                    Number(retrieveNumberOrDictEntry(chunk[2], constDict))
                ];
            }else{
                varDomain[v] = [1-INT16_MAX, INT16_MAX]
            }
        }
    }
    // console.log(varDomain);
    
    let locList = model.getLocationsOf(SINGLETON_NAME);    // e.g., ["id0__id0", "id0__id1"]
    let adjList = model.adjacencyListOf(SINGLETON_NAME);   
    let locToEdgeMap = model.edgeMapOf(SINGLETON_NAME);    
    
    // compute reachability index r for each location
    let reachInd = model.reachabilityVectorOf(SINGLETON_NAME);  // excludes I-diagonal (i.e., loops)  
    
    // filter out the edges, where vvars appear (on the lhs of updates) or (in guards), except from ones being selector
    for(let i=0;i<locList.length;i++){
        for(let j=0;j<locList.length;j++){
            let s = locList[i];
            let t = locList[j];
    
            locToEdgeMap[s][t] = locToEdgeMap[s][t].map(edge=>{
                let svars = edge.select ? model.getSelectLabelVars(edge.select).map(x=>x.name) : [];
                
                let ares = edge.assignment ? parseEdgeLabel(
                    '{'+edge.assignment.replace(/\s+/gm,'').split(',').join(';')+';}', 
                    'block'
                ): null;
                let gres = edge.guard ? parseEdgeLabel(edge.guard): null;
                
                let aintersec = ares?.lhs.filter(x=>vvars.includes(x)).filter(v=>svars.indexOf(v)==-1) || [];
                let gintersec = gres?.vars.filter(x=>vvars.includes(x)).filter(v=>svars.indexOf(v)==-1) || [];
    
                if(aintersec.length==0 && gintersec.length==0){
                    edge.blank = true; // i.e. ignore its labels while processing
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
    
    // const d0 = [];
    // const d0 = '*';
    
    let localDomain = locList.reduce((acc,el)=>(acc[el]=new Set(),acc),{}); // local domain map initialized with zeros
    // let ld = llist.reduce((acc,el)=>(acc[el]=vvars.reduce((obj,curr)=>(obj[curr] = new Set(), obj),{}),acc),{}); // local domain map initialized with zeros
    
    let pi = locList.reduce((acc,el)=>(acc[el]=new Set(),acc),{}); 
    let color = locList.reduce((acc,el)=>(acc[el]='white',acc),{}); 
    
    let initial_location = model.getInitialLocationOf(SINGLETON_NAME);
    let queue = new Set();
    
    localDomain[initial_location].add(val0.join(','));
    // vvars.forEach(v=>ld[initial_location][v].add(val0[v]))
    
    // starting from (l0,eta0) perform the BFS-like traversal until a stable d map is obtained
    queue.add(initial_location)

    // note: uses outter scope
    function procAllEdgesBetween(src, trg){
        locToEdgeMap[src][trg].forEach(edge=>{
            // console.log(`Processing an edge from ${src} to ${trg}`);
            if(edge.blank){
                localDomain[src].forEach(v=>localDomain[trg].add(v)); // ld[trg] = union( ld[trg] , ld[src] )
            }else{
                procEdgeLabels(edge, vvars, model, localDomain[src],localDomain[trg])
            }
        })
    }
    
    while(queue.size!=0){
        let curr = extractMax(queue, reachInd);
    
        // procIncEdges
        let prevDim = localDomain[curr].size;
        pi[curr].forEach(l=>{
            procAllEdgesBetween(l,curr);
        });
        if(prevDim != localDomain[curr].size ){
            color[curr] = 'grey';
            // console.log(`Changed colour to ${color[curr]}`);
        }
    
        // procSelfLoops
        while(true){
            prevDim = localDomain[curr].size;
            procAllEdgesBetween(curr,curr);
            if(prevDim == localDomain[curr].size ){
                break;
            }else{
                color[curr] = 'grey';
            }
        }
        
        if(color[curr]!='black'){
            // enqueue all succ distinct from itself
            adjList[curr].filter(l=>l!=curr).forEach(l => {
                queue.add(l);
                pi[l].add(curr);
            });
            color[curr] = 'black';
        }
    }
    
    return localDomain;

    
    // note: uses cosntDict (global var)
    function procEdgeLabels(edge, vvars, model, _ld_src, _ld_trg){
        let ld_src = new Set([..._ld_src].map(x=>x.split(',')));
        
        // treats non-target variables evaluations as "flat" (i.e., non-vector)
        let etaRestriction = {}

        let sres = edge.select ? model.getSelectLabelVars(edge.select) : [];
        let svars = sres.map(x=>x['name']);
    
        sres.forEach(x=>{
            // let match = x.type.replace(/\s+/gm,'').match(/[^\d]*(\d+),(\d+)\]/);
            let selectMatch = x.type.replace(/\s+/gm,'').match(/[^\[]+\[([^\,]+),([^\]]+)\]/);
                
            let range_max = retrieveNumberOrDictEntry(selectMatch[2], constDict);
            let range_min = retrieveNumberOrDictEntry(selectMatch[1], constDict);
    
            // push evaluations which agree with select
            for(let i=range_min;i<=range_max;i++){
                if(!etaRestriction[x.name]){
                    etaRestriction[x.name] = [i];
                }else{
                    etaRestriction[x.name].push(i);
                }
            }
        })

        // filter out vvars that are not shadowed by select
        let vvarsNotInSelect = [...vvars].filter(v=>svars.indexOf(v)==-1);
    
        // list of assignment statemements
        let assignmentList = edge.assignment.replace(/\s*/g,'').split(',')
    
        // LHS/RHS temp split
        let temp = assignmentList.map(stmt=>stmt.split(/=(.+)/s).slice(0,2))
    
        // if LHS from the assignment is not in vvars and neither appears on the RHS later - ignore that
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
            // if(!appearsInRHS)console.log(`Irrelevant and removed: ${temp[i][0]}=${temp[i][1]}`);
            return appearsInRHS;
        })
    
        let ares = assignmentList.length>0 ? 
            parseEdgeLabel('{'+assignmentList.join(';')+';}', 'statement') : null;
        let avars = ares?.vars?.filter(v=>svars.indexOf(v)==-1) || [];
    
        let gres = edge.guard ? parseEdgeLabel(edge.guard) : null;
        let gvars = gres?.vars || [];
        
        let intersectionA = ares?.lhs?.filter(x=>vvarsNotInSelect.includes(x)) || [];
        let intersectionG = gvars?.filter(x=>vvarsNotInSelect.includes(x)) || [];
        if(intersectionA.length==0 && intersectionG.length==0)return;
    
        let gsat = parseSimpleGuardAsDict(edge.guard, vvars);
        let noSatSelect = false;
    
        // note: this might not produce finest answers for guards with OR
        // todo: refactor
    
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
                // console.log(etaRestriction);
                console.log(`WARN, no select ${x[0]} sats the guard ${edge.guard}`); 
                // read as model contains redundant edges
            }
            etaRestriction[x[0]] = x[1];
        })
    
        if(noSatSelect){
            return;
        }

        // console.log(etaRestriction);
        // take all possible evaluations for the remaining variables
        avars.forEach(x=>{
            if(!etaRestriction[x]){
                if(varDomain.hasOwnProperty(x)){
                    etaRestriction[x] = Array.from({length:varDomain[x][0]+varDomain[x][1]+1},(v,k)=>k+varDomain[x][0])
                    // console.log(`for ${x} etaRestriction = ${etaRestriction[x]}`);
                }else{
                    etaRestriction[x] = Array.from({length:INT16_MAX*2},(v,k)=>k-1-INT16_MAX)
                }
            }
        })
    
        let prodSize = 1;
        for(let p in etaRestriction){
            // if(vvarsNotInSelect.indexOf(p)==-1 && ares?.rhs?.indexOf(p)==-1)
            if(vvarsNotInSelect.indexOf(p)==-1 && !(ares?.rhs?.indexOf(p)>=0))
                delete etaRestriction[p];
        }
        
        // resolve inner refs
        etaRestriction = Object.entries(etaRestriction).map(x=>{
            prodSize *= typeof x[1]=='string' && etaRestriction[x[1]] ? etaRestriction[x[1]].length : x[1].length
            return {
                "name":x[0],
                "vals":typeof x[1]=='string' && etaRestriction[x[1]] ? etaRestriction[x[1]] : x[1]
            }
        })
    
        
        // if(prodSize>10000){
        //     console.log(`Number of eta: ${prodSize}`);
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

            // skip etaCurr if not agree with ldsrc
            if(!_ld_src.has(vvars.map((v,ind)=>etaCurr[v]).join(',')))continue;
    
            // find the last assignemnt stmt where vvar appear => discard the suffix
            
            if(ares){
                ares?.listener?.assignment_list?.forEach(stm=>{
                    let left = stm[0].getText();
                    let right = stm[1];
                    
                    // console.log(`used to be ${ares.listener.joinToString(right)}`);
                    let str = ares.listener.substituteStr(right, etaCurr);
                    // console.log(`left = ${left}, right = ${str}`);
                    etaCurr[left] = eval(str);
                })
            }
            // todo: add filter over vvarsNotInSelect?
            
            // add vvars from etaCurr to ld_trg
            _ld_trg.add(
                vvars.map((v,ind)=>etaCurr[v]).join(',')
            )
        }
    }
}







function parseEdgeLabel(input, ruleName='expr'){
    if (typeof input !== "string") {
        console.log(`ERR: encountered an unexpected type of input = ${typeof input}`);
        return 0;
    }
    const {tree, myListener} = parseTreeWalk(input, ruleName);
    
    return {
        listener: myListener,
        // tree:tree,
        vars: myListener.getVarList(tree),
        lhs: [...myListener.lhs_vars],
        rhs: [...myListener.rhs_vars],
        substituteCall: myListener.substiteCallback(tree),
    };
}

function parseTreeWalk(input, ruleName = 'expr'){
    const chars = new antlr4.InputStream(input);
    const lexer = new yagLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new yagParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser[ruleName]();
    const myListener = new CustomListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
    return {
        "tree": tree,
        "myListener": myListener
    }
}

// todo: DRY-ify the code, move functions related to code analysis/parser in a dedicated module
function getConstVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    return myListener._const_dict;
}

function getVarDomain(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    // console.log(myListener._vlist.reduce((acc,x)=>(acc[x.vid.text]=x._varType,acc),{}));
    return myListener._vlist.reduce((acc,x)=>(acc[x.vid.text]=x._varType,acc),{});
}

function retrieveNumberOrDictEntry(val, dict){
    if(Number.isNaN(Number(val))){
        if(dict?.hasOwnProperty(val)){
            return dict[val];
        }else{
            console.log(`ERR, unexpected NaN "${val}", not in the dict ${dict}`);
        }
    }else{
        return Number(val)
    }
}

// todo: refine - add vars from upd
// vvars \setminus svars !!!
function parseSimpleGuardAsDict(label, vvars){
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



function restictionOfLocalDomain(ld, i, sep=CONFIG.preprocessModel.locationIdSeparator, USE_UNION=true){
    let res = {};
    for(let lid in ld){
        let j = lid.split(sep)[i];
        if(!res.hasOwnProperty(j)){
            res[j] = new Set([...ld[lid]]);
        }else{
            if(USE_UNION){
                [...ld[lid]].forEach(x=>res[j].add(x))
            }else{ // 'intersection'
                res[j] = new Set([...res[j]].filter(x=>ld[lid].has(x)));
            }
        }        
    }
    return res;
}

// ============================================================
export {approximateLocalDomain, restictionOfLocalDomain};
export default {};