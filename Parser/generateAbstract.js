import * as xml2js from 'xml2js';
import antlr4 from 'antlr4';
import yagLexer from './YetAnotherGrammar/yagLexer.js';
import yagListener from "./YetAnotherGrammar/yagListener.js";
import yagParser from './YetAnotherGrammar/yagParser.js';
import { DEBUG, ERRR, WARN } from '../simpleLogger.js';
import { INT16_MIN, INT16_MAX, MASParser, parseTreeWalk, ctxTemplateWithCallback, assignParseTree, cleanUpStr } from './masParser.js';
import { ULABEL_KINDS, SelectULabel, GuardULabel, SynchronisationULabel, AssignmentULabel, ctxTemplateFunction } from './uLabel.js';
import { cartesianProduct, arrayRange, arrayClone } from './utils.js';
import { MASGraph, approximateLocalDomain, computeExtMAS, printEdge, substituteConsts, unfoldTemplates } from './multiAgentGraph.js'

function generateAbstraction(mg, params) {
    // prepend mg with const for local domain dict


    // for each edge compute its var_trg_combination_index


    // per mapping function 
    // for(const fparams of params.f)
    let fparams = params;

    let targetAgentName = fparams.template;
    let arrArgsR = fparams.argsR;
    let setArgsR = new Set(fparams.argsR);
    
    let dimArgsR = fparams.initVal.map(x => x?.length ?? 0);
    let iniArgsR = fparams.initVal.map(JSON.stringify).map(x => replaceBrackets(x)).reduce((acc, el, ind) => (acc[arrArgsR[ind]] = el, acc), {});

    let argsRindexOf = arrArgsR.reduce((acc, el, i) => (acc[el] = i, acc), {});

    // let argsR = fparams.argsR.reduce((acc,el,ind)=>(acc[el]=ind, acc), {});
    let argsN = fparams.argsN; // as an array of [fname, fevaluator, finitvalue]

    let hashPrefix = params.hash;

    let domArgsR = arrArgsR.map(x => {
        return mg.agents[targetAgentName].parser.varDecDom?.[x] || mg.parser.varDecDom?.[x]
    });
    
    

    function getDomIdentifier(lid, v, hash = hashPrefix) {
        return `${hash}_d_at_${lid}_of_${v}`
    }

    function getInitIdentifier(v, hash = hashPrefix) {
        return `${hash}_init_${v}`
    }

    function getDomIdentifierInst(lid, v, hash = hashPrefix) {
        return getDomIdentifier(lid, v, hash) + `[${hash}]`
    }

    function mergeFunctionDeclaration(fname, f, hash = hashPrefix){
        return `${mergeFunctionName(fname, hash)}(){\n\t${fname}=${f};\m\n}\n`;
    }
    
    function mergeFunctionName(of, hash=hashPrefix){
        return `${hash}_merge_${of}`;
    }

    function mergeFunctionCall(fname, hash=hashPrefix){
        return `${mergeFunctionName(fname,hash)}()`
    }

    function assumeFunctionDeclaration(at, of, hash = hashPrefix) {
        return `void ${assumeFunctionName(at, of, hash)}(int ${hash}){\n\t${of} = ${getDomIdentifier(at, of, hash)}[${hash}];\n}\n`
    }

    function assumeFunctionName(at, of, hash = hashPrefix) {
        return `${hash}_assume_at_${at}_of_${of}`;
    }

    function assumeFunctionCall(at, of, hash = hashPrefix) {
        return `${assumeFunctionName(at, of, hash)}(${hash})`;
    }

    function resetFunctionName(of, hash = hashPrefix) {
        return `${hash}_reset_${of}`;
    }

    function resetFunctionDeclaration(of, hash = hashPrefix) {
        return `void ${resetFunctionName(of, hash)}(){\n\t${of} = ${getInitIdentifier(of, hash)};\n}\n`
    }

    function resetFunctionCall(of, hash = hashPrefix) {
        return `${resetFunctionName(of, hash)}()`;
    }

    let scope = fparams.scope === '*' ? false : new Set(fparams.scope.split(','));
    let d = params.d;
    
    let ldec = '\n'; // contains variable declarations
    let ldec2 = '';  // contains function declarations
    for (const lid in d) {
        for (const v of arrArgsR) {
            let vi = argsRindexOf[v];

            ldec += `const int ${getDomIdentifier(lid, v)}[${d[lid].length}]`;
            // if (dimArgsR[vi]) ldec += `[${dimArgsR[vi]}]`
            if (domArgsR[vi].dim) ldec += `${domArgsR[vi].dim}`
            ldec += ` = ${replaceBrackets(JSON.stringify(d[lid].map(x => x[vi])))};\n`

            ldec2 += assumeFunctionDeclaration(lid, v);
        }

        for(const [fname,fval,finit] of argsN){
            ldec2 += mergeFunctionDeclaration(fname,fval);
        }
    }

    for (const v of arrArgsR) {
        let vi = argsRindexOf[v];
        ldec += `const int ${getInitIdentifier(v)}`
        // if (dimArgsR[vi]) ldec += `[${dimArgsR[vi]}]`
        if (domArgsR[vi].dim) ldec += `${domArgsR[vi].dim}`
        ldec += ` = ${iniArgsR[v]};\n`
    }

    for(const [fname,fval,finit] of argsN){
        ldec +=`const int ${getInitIdentifier(fname)} = ${finit};\n`
    }

    ldec2 += arrArgsR.map(x => resetFunctionDeclaration(x)).join('\n');

    // console.log(ldec);
    // console.log(ldec2);

    // let seenCombinations = new Set();
    // let combToDomainLen = Object.keys(agent.nodes).reduce((acc,el)=>(acc[el]={}),{});
    // let localDecPrefix = '';

    // function getCombToDomainLen(lid, comb){        
    //     if(d[lid].length==0 || d[lid][0].length==0)DEBUG(`unexpected to get an empty d`);

    //     if(combToDomainLen?.[lid].hasOwnProperty(comb)){
    //         return combToDomainLen[lid][comb];
    //     }else{
    //         // decode
    //         let boolArr = comb.split('_');

    //         let d_reduced = [...(new Set(
    //             d[lid].map(
    //                 x=>x.filter((y,ind)=>boolArr[ind])
    //             )
    //             .map(JSON.stringify)
    //         ))];

    //         let len = d_reduced.length;
    //         argsR.map((v,i)=>{
    //             if(boolArr[i]){
    //                 localDecPrefix +=
    //                 `const int _${v}_at_${lid}_comb${comb} = {${d_reduced.join(',').replace(/\[/gm, '\{').replace(/\]/gm, '\}')}};\n`;
    //             }
    //         })


    //         // add its declaration

    //         // save the length
    //     }
    // }


    let agent = mg.agents[targetAgentName];    

    let lidToCtxContext = Object.keys(agent.nodes).reduce((acc, lid) => {
        acc[lid] = arrArgsR.reduce((obj, v) => (
            obj[v] = getDomIdentifierInst(lid, v),
            obj
        ), {});
        return acc;
    }, {})

    agent.edges = agent.edges.filter(e => {
        const innerEdge = (
            !scope ||
            scope.has(e.src) &&
            scope.has(e.trg)
        );
        const leaveEdge = (
            !scope ||
            scope.has(e.src) &&
            !scope.has(e.trg)
        );
        const enterEdge = (
            !scope ||
            !scope.has(e.src) &&
            scope.has(e.trg)
        );

        if (
            (innerEdge || enterEdge) && d[e.trg].length == 0 ||
            (innerEdge || leaveEdge) && d[e.src].length == 0
        ) {
            DEBUG(`${t.src}->${t.trg} will be deleted (empty domain approx)`);
            return false;
        }
        if(!e.assignment.extended)e.assignment.extendProperties();

        let argsRGuard = [...e.guard?.vars].filter(x => setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));
        // let argsRAssign = [...e.assignment?.vars].filter(x=>setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));
        // let argsRAssign = [...new Set(e.assignment.atomicVars.flat(Infinity))].filter(x => setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));
        // if(!e.extended)e.assignment.extendProperties();
        
        let argsRAssign = [];
        if(e.assignment?.atomic){
            argsRAssign = [...new Set(e.assignment.atomic?.filter(x=>x[0]==="stmt").map(x=>x[2]))].filter(x => setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));
        } 
        let paramsAssign = [...new Set(e.assignment.atomicVars.flat(Infinity))].filter(x => !setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));
        let argsRSync = [...e.synchronisation?.vars].filter(x => setArgsR.has(x) && !(e.select?.selectors?.has(x) ?? false));



        //todo[1]: double-check
        let occuringArgsR = paramsAssign ?
            new Set([
                ...argsRGuard,
                ...argsRAssign,
                ...argsRSync
            ]) : new Set([
                ...argsRGuard,
                ...argsRSync
            ]);

        // TODO
        // let combCode = [...occuringArgsR].reduce((acc,el)=>(acc+=2**(argsRindexOf[el])), 0);
        // let combCode = arrArgsR.map(x=> occuringArgsR.has(x) ? 1 : 0).join('_');
        // let currDomainVar = `d_at_${e.src}_comb${combCode}`;
        // 
        // console.log(`edge ${e.assignment.content} has paramAssign=${paramsAssign?.join(',')}`);
        


        let ctxContext = lidToCtxContext[e.src];

        if (argsRGuard.length > 0) {
            if (innerEdge || leaveEdge) {
                e.guard = new GuardULabel(e.guard.stringWithContext(ctxContext));
            }
        }
        if (argsRSync.length > 0) {
            if (innerEdge || leaveEdge) {
                e.synchronisation = new SynchronisationULabel(e.synchronisation.stringWithContext(ctxContext))
            }
        }

        if (paramsAssign?.length > 0) {
            // argsR appear on the RHS of other var assignment (or within fargs)
            let acontent = [];
            if (innerEdge || leaveEdge) {
                for (const v of argsRAssign) {
                    acontent.push(`${assumeFunctionCall(e.src, v)}`)
                }
                for (const v of argsN) {
                    // reset
                    acontent.push(`${resetFunctionCall(v[0])}`)
                }
            }

            // let assumeLength = acontent.length;
            acontent.push(e.assignment.content);

            if (innerEdge || enterEdge) {
                for (const v of argsN) {
                    // update
                    acontent.push(`${mergeFunctionCall(v[0])}`)
                }
                for (const v of argsRAssign) {
                    acontent.push(`${resetFunctionCall(v)}`)
                }
            }
            // let resetLength = acontent.length-assumeLength-1;

            // todo: add an after_abstract_edge_generate hook for callback
            // if(params?.beautify ?? false){
            //     removeRedundantAssignmentTerms(e, acontent, assumeLength, resetLength, enterEdge, innerEdge, leaveEdge);
            // }
            
            e.assignment = new AssignmentULabel(acontent.join(',\n'))
        } else if(argsRAssign.length > 0){
            // console.log(`edge ${e.assignment.content} has argsRAssign=${argsRAssign?.join(',')}`);
            // argsR only appear on the LHS => remove those and only keep the assume for argsN
            let acontent = e.assignment.atomic.filter(x => {
                // console.log(`${x[0] !== 'stmt' || !setArgsR.has(x[2]) || (e.select?.selectors?.has(x[2]))} for ${x[1].getText()}`)
                return x[0] !== 'stmt' || !setArgsR.has(x[2]) || (e.select?.selectors?.has(x[2]))
            }).map(x=>x[1].getText()).join(',')

            if(argsN?.length){
                if(innerEdge || leaveEdge){
                    // acontent = resetArgsN + acontent
                    acontent = [argsN.map(x=>resetFunctionCall(x[0])).join(','),acontent].filter(x=>x).join(',');
                }
                if(innerEdge || enterEdge){
                    // acontent += updateArgsN
                    if(acontent)acontent+=',';
                    acontent += argsN.map(x=>mergeFunctionCall(x[0])).join(',');
                }
            }
            // console.log(`argsRAssign.size = ${argsRAssign.size}, content =${acontent}`);
            e.assignment = new AssignmentULabel(acontent);
        }else{
            // console.log(argsRAssign);
            // console.log(paramsAssign);
            // console.log(e.assignment.content);
        } 
        // console.log(occuringArgsR);
        // console.log(occuringArgsR.size);
        // console.log(paramsAssign.length>0);
        // console.log(argsRAssign.length>0);
        
        
        // if argsR occurs (unshadowed) in guard/sync label OR assign-param OR assign-LHS demanding update of argsN 
        if (occuringArgsR.size > 0 || argsRAssign.length>0 && argsN?.length>0) {
            if(!(occuringArgsR.size>0) && !(paramsAssign.length>0) && argsRAssign.length>0){
                //
            }else{
                // console.log(`edge ${e.assignment.content} will be extended with select`);
                // console.log(`${paramsAssign.length>0} and ${argsRAssign.length>0}`);
                
                if(!(e.assignment.content==='' && e.guard.content==='')){
                    // let currDomainLength = getCombToDomainLen(e.src, combCode);
                    let currDomainLength = d[e.src].length - 1;

                    let sarr = e.select.content ? [e.select.content] : [];
                    sarr.push(`${hashPrefix}:int[0,${currDomainLength}]`)
                    e.select = new SelectULabel(sarr.join(',\n'));
                }
            }
            
        }

        

        return true;
    })

    agent.local = agent.local + ldec + ldec2;
    // console.log(agent.tparam);    
    // console.log(mg.agents["Voter"].tparam);
    mg.updateEdgesToForAll()
    return mg.toXML();
}





// function assumeArgsRCallString(combCode, hash, lid) {
//     return `__${hash}_assume_at_${lid}_${combCode}(${lid})`
// }

function replaceBrackets(str) {
    return str.replace(/\[/gm, '\{').replace(/\]/gm, '\}');
}



// NOTE: soundness is guaranteed only for the models without function calls
function removeRedundantAssignmentTerms(e, acontent, assumeLength, resetLength, enterEdge, innerEdge, leaveEdge){
    let keepAssume = false;
    let keepReset = false;
    if(leaveEdge && !innerEdge){
        keepAssume = true;
    }
    
    if(enterEdge && !innerEdge){
        keepReset = true;
    }

    // check if 

    if(!keepAssume && keepReset){
        acontent = acontent.slice(assumeLength);
    }else if(keepAssume && !keepReset){
        acontent = acontent.slice(0,assumeLength+resetLength-1)
    }else if(!keepAssume && !keepReset){
        
    }else{ // keepAssume && keepReset
        // no changes
        return;
    }
}

export default {};
export { generateAbstraction };