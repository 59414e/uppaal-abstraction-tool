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
// * during the parsing of assignment_stmt create a templateString function for a RHS (with params as vids, e.g. enclosed in ${} to be "plugged in")

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
import CONFIG from '../tempConfig.js';
import UppaalXML from '../Parser/uppaalxml.js';
import CustomListener from '../Parser/customListener1.js';

// ============================================================

// todo: substitute arrays with maps for faster look-up
function approximateLocalDomain(inputString, varInfo, targetTemplate=CONFIG.preprocessModel.productName, upperApprox=true){
    if(CONFIG.debug)console.log(`App: starting local domain approximation at ${Date.now()}`);
    // read XML for the concrete model
    let model = new UppaalXML(inputString);
    
    // let vvars = ['mem_dec', 'mem_sg', 'mem_vt'];
    // let val0 = [0,0,0]; 
    
    // todo: auto-retrieve val0 from the code
    let vvars = varInfo.vars;
    let val0 = varInfo.valInit; 
    
    const SINGLETON_NAME = targetTemplate || model.getTemplateNames()[0]; 
    const INT16_MAX = CONFIG.approximateDomain.int16Max;
    
    // if(SINGLETON_NAME != CONFIG.preprocessModel.productName){
    //     console.log(`WARN, expected singleton name to be ${CONFIG.preprocessModel.productName}, but recevied ${SINGLETON_NAME}`);
    // }

    let {tree:gtree, myListener:glistener} = parseTreeWalk(model.global +'\n'+ model[SINGLETON_NAME].declaration[0], 'translation')

    let constDict = getConstVars(model.global +'\n'+ model[SINGLETON_NAME].declaration[0]);
    let arrDict = computeArrDim(glistener._arr_dict); // assuming const-replacement was performed

    let varDomain = getVarDomain(model.global +'\n'+ model[SINGLETON_NAME].declaration[0], constDict);
    
        
    let locList = model.getLocationsOf(SINGLETON_NAME);    // e.g., ["id0__id0", "id0__id1"]
    let adjList = model.adjacencyListOf(SINGLETON_NAME);   
    let locToEdgeMap = model.edgeMapOf(SINGLETON_NAME);    
    
    // compute reachability index r for each location
    let reachInd = model.reachabilityVectorOf(SINGLETON_NAME);  // excludes I-diagonal (i.e., loops)  
    // console.log(`locllist.length = ${locList.length}`);
    
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
    
    let localDomain = locList.reduce((acc,el)=>(acc[el]=upperApprox ? new Set():new Set('*'),acc),{}); // local domain map initialized with zeros
    // let ld = llist.reduce((acc,el)=>(acc[el]=vvars.reduce((obj,curr)=>(obj[curr] = new Set(), obj),{}),acc),{}); // local domain map initialized with zeros
    
    let pi = locList.reduce((acc,el)=>(acc[el]=new Set(),acc),{}); 
    let color = locList.reduce((acc,el)=>(acc[el]='white',acc),{}); 
    
    let initial_location = model.getInitialLocationOf(SINGLETON_NAME);
    let queue = new Set();
    
    function updateLocalDomain(ld, loc, arr, _upperApprox = upperApprox){
        if(_upperApprox){
            [...arr].forEach(val=>ld[loc].add(Array.isArray(val) ? val.join(';') : val))
        }else{
            if(ld[loc].has('*')){
                ld[loc] = new Set([...arr])
            }else{
                // console.log(`from ld[loc] = ${[...ld[loc]]}`);
                ld[loc] = new Set([...arr].filter(val=>ld[loc].has(val)))
                // console.log(`to ld[loc] = ${[...ld[loc]]}`);
                
            }
        }

        if(CONFIG.debug){
            console.log(`Updated d(${loc}) = [${[...ld[loc]].join(';')}]`);
        }
    }

    updateLocalDomain(localDomain, initial_location, [val0.join(';')])


    
    // console.log(localDomain[initial_location]);
    // console.log(localDomain[initial_location]);
    // localDomain[initial_location].add(val0.join(','));
    // vvars.forEach(v=>ld[initial_location][v].add(val0[v]))
    
    // starting from (l0,eta0) perform the BFS-like traversal until a stable d map is obtained
    queue.add(initial_location)

    // note: uses outter scope
    function procAllEdgesBetween(src, trg){
        locToEdgeMap[src][trg].forEach(edge=>{
            if(CONFIG.debug)console.log(`Processing an edge from ${src} to ${trg}`);
            if(edge.blank){
                if(CONFIG.debug)console.log(`Blank => copied the src local domain`);
                updateLocalDomain(localDomain, trg, localDomain[src])
                // localDomain[src].forEach(v=>localDomain[trg].add(v)); // ld[trg] = union( ld[trg] , ld[src] )
            }else{
                procEdgeLabels(edge, vvars, model, localDomain, src, trg)
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
    
    console.log("App: approx_ld finished");
    if(CONFIG.debug)console.log(`App: ending local domain approximation at ${Date.now()}`);
    return localDomain;

    
    // note: uses cosntDict (global var)
    function procEdgeLabels(edge, vvars, model, _ld, _src, _trg){
        if(_ld[_src].has('*'))console.log('ERR, encountered folded * for the ld...')
        let ld_src = new Set([..._ld[_src]].map(x=>x.split(';')));
        // treats non-target variables evaluations as "flat" (i.e., non-vector)
        let etaRestriction = {}

        if(CONFIG.debug)console.log(_ld[_src]);


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
        // for each select prod element do procWithContext
        // ...



        // filter out vvars that are not shadowed by select
        let vvarsNotInSelect = [...vvars].filter(v=>svars.indexOf(v)==-1);
        // list of assignment statemements
        let assignmentList = edge?.assignment?.replace(/\s*/g,'').split(',') || [];
    
        // LHS/RHS temp split
        let temp = assignmentList.map(stmt=>stmt.split(/=(.+)/s).slice(0,2))
    
        // if LHS from the assignment is not in vvars and neither appears on the RHS later - ignore that
        assignmentList = assignmentList.filter((el,i)=>{
            let vid = temp[i][0];
            
            const ARR_EL_REG = /([^\[\]]+)\[([^\[\]]+)\]/;
            let arrMatch = vid.match(ARR_EL_REG)
            if(arrMatch){
                vid = arrMatch[1];
                let arrInd = (arrMatch[2]);
                // todo: check var occurence in arrInd as well
            }

            if(vvarsNotInSelect.indexOf(vid)>=0){
                return true;
            }
    
            let appearsInRHS = false;
            for(let j=i+1;j<assignmentList.length;j++){
                if(temp[j].includes(vid)){
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
        if(CONFIG.debug)console.log({avars});

        let gres = edge.guard ? parseEdgeLabel(edge.guard) : null;
        let gvars = gres?.vars || [];
        
        let intersectionA = ares?.lhs?.filter(x=>vvarsNotInSelect.includes(x)) || [];
        let intersectionG = gvars?.filter(x=>vvarsNotInSelect.includes(x)) || [];
        // console.log(intersectionA, intersectionG);
        // if(intersectionA.length==0 && intersectionG.length==0)return;
    
        let selectEvalSpace = [null];
        if(svars.length!=0){
            selectEvalSpace = svars.length>1 ? cartesianProduct(...svars.map(x=>etaRestriction[x])) : cartesianProduct(...svars.map(x=>etaRestriction[x])).map(x=>[x]);
        }
        
        if(CONFIG.debug)console.log({etaRestriction});
        if(CONFIG.debug)console.log({selectEvalSpace});

        let etaRestriction1 = etaRestriction;
        let assignmentList1 = [...assignmentList]
        for(let si=0;si<selectEvalSpace.length;si++){
            // do substitution for all [non-alpha-numeric-or-_-symbol]<select>[non-alpha-numeric-or-_-symbol]
            etaRestriction = {...etaRestriction1};
            assignmentList = [...assignmentList1];
            let edgeGuard = edge.guard || '';
            // let edgeAssign = assignmentList || '';
            // let edgeSync = edge.synchronisation || '';
            let currSelectContext = selectEvalSpace[si] || [];
            currSelectContext.forEach((v,ind)=>{
                // replace all occurences of vvars[ind] with v in the guard/udpate
                let sname =  svars[ind];
                if(CONFIG.debug)console.log(`substitution of all occurences of ${sname} with ${v}`);
                const vreg = new RegExp(`(?<=[^0-9a-zA-Z_])${sname}(?=[^0-9a-zA-Z_]*)`, 'gm');
                etaRestriction[sname] = [v];
                edgeGuard = edgeGuard.replace(vreg, v);
                assignmentList = assignmentList.map(s=>s.replace(vreg, v)).map(x=>{
                    if(CONFIG.debug)console.log(x);
                    const arrReg = /(?<=[^\[\]]+)\[([^\]]+)\]/;                    
                    return x.replace(arrReg, (m,p1)=>'['+eval(p1)+']')
                })
            })

            if(CONFIG.debug)console.log({assignmentList});


            if(CONFIG.debug)console.log({etaRestriction});

            // let gsat = edge.guard ? parseSimpleGuardAsDict(edge.guard, vvars) : {};
            let gsat = edgeGuard ? parseSimpleGuardAsDict(edgeGuard, vvars) : {};
            
        
            // note: this might not produce finest answers for guards with OR
            // todo: refactor
            if(CONFIG.debug)console.log(ld_src);
            if(CONFIG.debug)console.log(vvars);

            for(let el of ld_src){
                vvars.forEach((v,ind)=>{
                    if(!etaRestriction.hasOwnProperty(v))etaRestriction[v]=[];
                    if(etaRestriction[v].indexOf(el[ind])==-1)etaRestriction[v].push(el[ind]);
                })
            }

            etaRestriction = {
                ...generateEvalSpace(
                    varDomain, 
                    Object.keys(varDomain).filter(
                        v=>avars.indexOf(v)==-1
                    ).reduce((acc,el)=>(acc[el]=true, acc), []),
                    arrDict   
                ),
                ...etaRestriction
            }

            if(CONFIG.debug)console.log("before guardsat");
            if(CONFIG.debug)console.log(etaRestriction);

    
            // parse guards as assignments
            // NOTE: symmetry is not considered atm, thus it should always be comparison var to literal (or const var)
            let noSatSelect = false;
            if(CONFIG.debug)console.log("Gsat");
            if(CONFIG.debug)console.log(gsat);
            Object.entries(gsat).forEach(x=>{
                // check if LHS refers to an array
                const ARR_EL_REG = /([^\[\]]+)\[([^\[\]]+)\]/;
                let arrMatch = x[0].match(ARR_EL_REG)
                if(arrMatch){
                    let arrName = arrMatch[1];
                    let arrInd = arrMatch[2].match(/[a-zA-Z_]/) ? arrMatch[2] : eval(arrMatch[2]);
                    if(CONFIG.debug)console.log({arrName, arrInd});
                    let valFilter = (a)=>a[arrInd]==x[1];
                    if(etaRestriction.hasOwnProperty(arrName)){
                        etaRestriction[arrName]= etaRestriction[arrName].map(x=>x.split(',')).filter(valFilter).map(x=>x.join(','))
                    }else{
                        etaRestriction[arrName] = singleVarStateSpaceWithValFilter(
                            arrName, 
                            varDomain[arrName],
                            valFilter,
                            arrDict
                        )[arrName]
                    }
                }else{
                    if(etaRestriction[x[0]] && etaRestriction[x[0]].indexOf(x[1])==-1){
                        noSatSelect = true;
                        console.log(`WARN, no select ${x[0]} sats the guard ${edge.guard}`); 
                        // read as model contains redundant edges
                    }
                    etaRestriction[x[0]] = x[1];
                }
            })

            if(CONFIG.debug)console.log("after guardsat");
            if(CONFIG.debug)console.log(etaRestriction);
        
            if(noSatSelect){
                return;
            }

        
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
        
              
            if(CONFIG.debug)console.log(`Number of eta: ${prodSize}`);
            
            let ld_temp = new Set();
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
                if(CONFIG.debug)console.log(etaCurr);

                // skip etaCurr if not agree with ldsrc
                if(CONFIG.debug)console.log('ld_src');
                if(CONFIG.debug)console.log(_ld[_src]);
                if(!_ld[_src].has(vvars.map((v,ind)=>etaCurr[v]).join(';')))continue;

                
                // find the last assignemnt stmt where vvar appear => discard the suffix
                
                if(ares){
                    // ares?.listener?.assignment_list?.forEach(stm=>{
                    ares?.listener?.assignment_list?.forEach((stm,ind)=>{
                        // let left = stm[0].getText();
                        
                        let left = assignmentList[ind].split('=')[0];
                        
                        let right = stm[1];
                        
                        // console.log(stm);
                        // console.log(`used to be ${ares.listener.joinToString(right)}`);
                        // let str = ares.listener.substituteStr(right, etaCurr);
                        if(CONFIG.debug)console.log(`left = ${left}, right = ${ares.listener.joinToString(right)}`);
                        // etaCurr[left] = eval(str);

                        let res = ares.listener.substituteStr(right, etaCurr);
                        
                        const ARR_EL_REG = /([^\[\]]+)\[(\d+)\]/;
                        let arrMatch = left.match(ARR_EL_REG)
                        if(arrMatch){
                            left = arrMatch[1];
                            etaCurr[left] = etaCurr[left].replace(/[\]\[]+/g, '').split(',');
                            etaCurr[left][Number(arrMatch[2])] = eval(res);
                            etaCurr[left] = `${etaCurr[left].join(',')}`;
                        }else{
                            etaCurr[left] = eval(res);
                        }
                    })
                }
                if(CONFIG.debug)console.log({etaCurr});
                // check etaCurr agrees with the domains
                let okWithDomain = true;
                vvars.forEach(v=>{
                    // console.log(vvars);
                    // console.log(varDomain);
                    // console.log(etaCurr);
                    if(Number(etaCurr[v])<varDomain[v][0] || Number(etaCurr[v])>varDomain[v][1])okWithDomain=false;
                })

                // todo: add filter over vvarsNotInSelect?
                
                // add vvars from etaCurr to ld_trg
                if(okWithDomain){
                    ld_temp.add(
                        vvars.map((v,ind)=>etaCurr[v]).join(';')
                    )
                }
            }
            updateLocalDomain(_ld,_trg, ld_temp)
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

// 1-dim arrays max
function getVarDomain(input, contextDict){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    // string-to-string map
    let varDomain = myListener._vlist.reduce((acc,x)=>(acc[x.vid.text]=x._varType,acc),{});
    const INT16_MAX = CONFIG.approximateDomain.int16Max;

    // convert to string-to-numRange map
    for(let v in varDomain){
        let chunk = varDomain[v].replace(/[\,\[\]]+/gm,'').split(' ').filter(x=>x)
        if(chunk[0] === 'chan' || chunk[0] === 'const')delete varDomain[v];
        else if(chunk[0]=== 'int'){
            if(chunk[1] && chunk[2]){
                varDomain[v] = [
                    Number(retrieveNumberOrDictEntry(chunk[1], contextDict)),
                    Number(retrieveNumberOrDictEntry(chunk[2], contextDict))
                ];
            }else{
                varDomain[v] = [1-INT16_MAX, INT16_MAX]
            }
        }
    }
    return varDomain;
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


function computeArrDim(arrDict){
    for(let k in arrDict){
        arrDict[k] = eval(arrDict[k])[0]
    }
    return arrDict;
}

// arr - array of arrays
function cartesianProduct(...arr){
    return arr.reduce(
        // acc initialized with first arr
        (acc, b) => acc.flatMap(
            d => b.map(
                e => [d, e].flat()
            )
        ),
    );
}

function generateEvalSpace(varDom, varExclude, arrDict){
    let eta = {};
    for(let k in varDom){
        if(varExclude.hasOwnProperty(k)){
            continue;
        }else{
            let left = varDom[k][0];
            let right = varDom[k][1];
            eta[k] = Array.from(
                {length:left+right+1},
                (v,k)=>k+left
            );
            if(arrDict.hasOwnProperty(k) && arrDict[k]>1){
                eta[k] = cartesianProduct(...Array(arrDict[k]).fill(eta[k])).map(x=>'['+x.join(',')+']');
            }
        }
    }
    return eta;
}

function singleVarStateSpaceWithValFilter(name, dom, valFilter, arrDict){
    let eta = {};

    let left = dom[0];
    let right = dom[1];
    eta[name] = Array.from(
        {length:-left+right+1},
        (v,k)=>k+left
    );
    if(arrDict.hasOwnProperty(name)){
        eta[name] = cartesianProduct(...Array(arrDict[name]).fill(eta[name]));
    }
    eta[name] = eta[name].filter(valFilter).map(x=>'['+x.join(',')+']')

    return eta;
}



function setStrArrEl(str, ind, val){
    let x = str.replace(/[\]\[]+/g, '').split(',');
    x[ind] = val;
    return '['+x.join(',')+']'
}


// ============================================================
export {approximateLocalDomain, restictionOfLocalDomain};
export default {};