// todo: add context param for edgeLabel processing

function foo(){

}

function procEdgeLabels(edge, vvars, model, _ld, _src, _trg){
    if(_ld[_src].has('*'))console.log('ERR, encountered folded * for the ld...')
    let ld_src = new Set([..._ld[_src]].map(x=>x.split(',')));
    // treats non-target variables evaluations as "flat" (i.e., non-vector)
    let etaRestriction = {}
    let evalContext = {};
    let selectSpace = [];

    let sres = edge.select ? edge.select.toArr : [];
    let svars = sres.map(x=>x[0]);

    sres.forEach(x=>{
        let boundDim = x[1].match(/[^\[]+\[([^\,]+),([^\]]+)\]/);
            
        let range_max = retrieveNumberOrDictEntry(boundDim[2], constDict);
        let range_min = retrieveNumberOrDictEntry(boundDim[1], constDict);

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
    let assignmentList = edge?.assignment?.replace(/\s*/g,'').split(',') || [];

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

    let gsat = edge.guard ? parseSimpleGuardAsDict(edge.guard, vvars) : {};
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
        if(CONFIG.debug)console.log(`Number of eta: ${prodSize}`);
        // console.log(etaRestriction);
    // }
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

        // skip etaCurr if not agree with ldsrc
        if(!_ld[_src].has(vvars.map((v,ind)=>etaCurr[v]).join(',')))continue;

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
                vvars.map((v,ind)=>etaCurr[v]).join(',')
            )
        }
    }
    updateLocalDomain(_ld,_trg, ld_temp)

}