// ============================================================
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

const INT16_MAX = CONFIG.approximateDomain.int16Max;

const input1 = `const int N_V = 2;
const int N_C = 3;

chan decl[2+1];
chan coll[2+1];
chan vote[2+1];
//int[0,2] tally[N_C+1];

int[0,2] sh_dec; // 1 - inperson, 2 - by mail
int[0,1] buff_mail[2+1]; // election package is delivered to mailbox
int[0,N_C] sh_vt; // chosen candidate
int[0,1] sh_sg; // signed form (honest+private casting)`;


let {tree, myListener} = parseTreeWalk(input1);
let arrDict = computeArrDim(myListener._arr_dict);
let constDict = getConstVars(input1);
let varDomain  = getVarDomain(input1, constDict);
// console.log(arrDict);
console.log(varDomain);

let etaRed = generateEvalSpace(varDomain, constDict, arrDict)

let avars = ['buff_mail'];

etaRed = generateEvalSpace(
    varDomain, 
    Object.keys(varDomain).filter(
        v=>avars.indexOf(v)==-1
    ).reduce((acc,el)=>(acc[el]=true, acc), []),
    arrDict
)


let prodSize = 1;
etaRed= Object.entries(etaRed).map(x=>{
    prodSize *= typeof x[1]=='string' && etaRed[x[1]] ? etaRed[x[1]].length : x[1].length
    return {
        "name":x[0],
        "vals":typeof x[1]=='string' && etaRed[x[1]] ? etaRed[x[1]] : x[1]
    }
})

console.log(etaRed);


let x = singleVarStateSpaceWithValFilter('dec_recv',[0,1],(x)=>x[1]==0, {'dec_recv':3})
console.log(x);


let {tree:t, myListener:l} = parseTreeWalk("buff_mail[1] = buff_mail[0] + buff_mail[1] + buff_mail[2];", "statement");


let etaCurr = {};
for(let ii=0;ii<prodSize;ii++){
    let etaCurr = {};
    let k = ii;
    
    for(let jj=0;jj<etaRed.length;jj++){
        let name = etaRed[jj].name;
        let m = etaRed[jj].vals.length;
        let val = etaRed[jj].vals[k%m];
        etaCurr[name]=val;
        k = Math.floor(k/m);
    }

    l.assignment_list.forEach(stm=>{
        let left = stm[0].getText();
        let right = stm[1];
        let res = l.substituteStr(right, etaCurr);
        // console.log(res);
        // console.log(`${left} = ${eval(res)}`);
        // etaCurr[left] = eval(res);

        const ARR_EL_REG = /([^\[\]]+)\[(\d+)\]/;
        let arrMatch = left.match(ARR_EL_REG)
        if(arrMatch && arrMatch[1]){
            left = arrMatch[1];
            // etaCurr[left] = etaCurr[left].replace(/[\]\[]+/g, '').split(',');
            // etaCurr[left][Number(arrMatch[2])] = eval(res);
            etaCurr[left] = setStrArrEl(etaCurr[left], Number(arrMatch[2]), eval(res));
            // etaCurr[left] = `[${etaCurr[left].join(',')}]`;
        }else{
            etaCurr[left] = eval(res);
        }
        // console.log(etaCurr);
    })
}

function setStrArrEl(str, ind, val){
    let x = str.replace(/[\]\[]+/g, '').split(',');
    x[ind] = val;
    return '['+x.join(',')+']'
}





function computeArrDim(arrDict){
    for(let k in arrDict){
        arrDict[k] = eval(arrDict[k])[0]
    }
    return arrDict;
}



// let inputStr = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
// let model = new UppaalXML(inputStr);
// model = substituteConst(model);

// fs.writeFileSync(CONFIG.OUTPUT.DIR + '/test_model.xml', model.toString());



// only global decs overwrite
function substituteConst(model, overWriteDict={}){
    let {tree:gtree, myListener:glistener} = parseTreeWalk(model.global, 'translation');

    let gConstDict = {
        ...glistener._const_dict,
        ...overWriteDict
    };
    let grenameCallback = genDictReplacer(gConstDict);

    const SELECT_RANGE_REG =  /[^\[]*\[([^,]+),([^,]+)\]/m;      // pattern: `selector:int[<1>,<2>]`


    // process global declarations
    model.global = glistener.renameWithCallbackStr(gtree, grenameCallback)

    model.getTemplateNames().forEach(_t => {
        let {tree:ttree, myListener:tlistener} = parseTreeWalk(model[_t].declaration[0]);
        let tConstDict = {
            ...gConstDict,
            ...tlistener._const_dict,
        };
        let trenameCallBack = genDictReplacer(tConstDict);


        if(model[_t].hasOwnProperty("parameter")){
            let {tree:t, myListener:l} = parseTreeWalk(model[_t].parameter[0]+';', 'statement');
            model[_t].parameter[0] = l.renameWithCallbackStr(t, trenameCallBack).slice(0,-1)
        }

        // process local declarations
        model[_t].declaration[0] = tlistener.renameWithCallbackStr(ttree, trenameCallBack)

        // process local edges
        model[_t].transition.forEach(edge=>{
            if(edge["select"]){
                edge["select"] = model.getSelectLabelVars(edge["select"]).map(x=>{
                    let m = x.type.match(SELECT_RANGE_REG);
                        let intFrom = trenameCallBack(m[1]);
                        let intTo = trenameCallBack( m[2]);
                        
                        return `${x.name}:int[${intFrom},${intTo}]`;
                }).join(',\n')
            }
            if(edge["synchronisation"]){
                let m = edge["synchronisation"].match(/([^\[]*)\[([^\]]*)\](.)/)
                if(m && m[2]){
                    let ch = m[1];
                    let dim = m[2];
                    let symb = m[3];
                    let {tree:t, myListener:l} = parseTreeWalk(dim, 'expr');
                    let str = l.renameWithCallbackStr(t,trenameCallBack);
                    
                    edge["synchronisation"] = `${ch}[${str}]${symb}`;
                }
            }
            ['assignment', 'guard'].forEach((kind)=>{
                if(edge[kind]){
                    let {tree:t, myListener:l} = parseTreeWalk(edge[kind]+';', 'statement');
                    edge[kind] = l.renameWithCallbackStr(t, trenameCallBack).slice(0,-1)
                }
            })
        })
    });

    return model;
}

function parseTreeWalk(input, ruleName = 'translation'){
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

function genDictReplacer(dict){
    return (str)=>{
        if(dict.hasOwnProperty(str))
            return dict[str];
        else 
            return str;
    }
}


function getConstVars(input){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    return myListener._const_dict;
}


function getVarDomain(input, contextDict={}){
    let {tree, myListener} = parseTreeWalk(input, 'translation');
    // string-to-string map
    let varDomain = myListener._vlist.reduce((acc,x)=>(acc[x.vid.text]=x._varType,acc),{});

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

function retrieveNumberOrDictEntry(val, dict={}){
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
            if(arrDict.hasOwnProperty(k)){
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
    // -left???
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
