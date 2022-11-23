// built-in
import * as fs from 'fs';
import * as path from 'path';

// third-party
import * as xml2js from 'xml2js';

import antlr4 from 'antlr4';
import yagLexer from './Parser/YetAnotherGrammar/yagLexer.js';
import yagParser from './Parser/YetAnotherGrammar/yagParser.js';
import CustomListener from './Parser/customListener1.js';

// custom libs/files
import CONFIG from './config.js';
import UppaalXML from './Parser/uppaalxml.js';

const NS_PER_SEC = 1e9;

const inputStr = `const int N_V = 2;
const int N_C = 3;

chan decl[2+1];
chan coll[2+1];
chan vote[2+1];
//int[0,2] tally[N_C+1];

int[0,2] sh_dec; // 1 - inperson, 2 - by mail
int[0,1] buff_mail[2+1]; // election package is delivered to mailbox
int[0,N_C] sh_vt; // chosen candidate
int[0,1] sh_sg; // signed form (honest+private casting)

int sum(int a, int b){
    int res = a + b;
    int temp;
    return res;
}`;


let measureTime = (cb)=>{
    let hrStart = process.hrtime();
    cb();
    let hrDiff = process.hrtime(hrStart);
    return (hrDiff[0]*NS_PER_SEC + hrDiff[1])/1000000;
}

let {tree, myListener} = parseTreeWalk(inputStr);
let dict = {'N_V':'not_NV', 'N_C':'notNC', 'sh_sg':1, 'sh_vt':2}

let genUsingTemplate = myListener.templateFunction(tree);

let x,y,z;

let t2 = measureTime(()=>{
    for(let i=0;i<100000;i++){
        y = myListener.substituteStr(tree, dict)
    }
})

let t1 = measureTime(()=>{
    for(let i=0;i<100000;i++){
        x = genUsingTemplate(dict)
    }
})


let foo = (d)=>{
    return `const int ${d?.['N_V'] || 'N_V'} = 2;
const int ${d?.['N_C'] || 'N_C'} = 3;

chan decl[2+1];
chan coll[2+1];
chan vote[2+1];
//int[0,2] tally[N_C+1];

int[0,2] ${d?.['sh_dec'] || 'sh_dec'}; // 1 - inperson, 2 - by mail
int[0,1] buff_mail[2+1]; // election package is delivered to mailbox
int[0,N_C] ${d?.['sh_vt'] || 'sh_vt'}; // chosen candidate
int[0,1] sh_sg; // signed form (honest+private casting)

int sum(int a, int b){
    int res = a + b;
    int temp;
    return res;
}`
}
let t3 = measureTime(()=>{
    `const int \${d?.['N_V'] || 'N_V'} = 2;
const int \${d?.['N_C'] || 'N_C'} = 3;

chan decl[2+1];
chan coll[2+1];
chan vote[2+1];
//int[0,2] tally[N_C+1];

int[0,2] \${d?.['sh_dec'] || 'sh_dec'}; // 1 - inperson, 2 - by mail
int[0,1] buff_mail[2+1]; // election package is delivered to mailbox
int[0,N_C] \${d?.['sh_vt'] || 'sh_vt'}; // chosen candidate
int[0,1] sh_sg; // signed form (honest+private casting)

int sum(int a, int b){
    int res = a + b;
    int temp;
    return res;
}`.replace(/\$\{([^\}]*)\}/gm, '$1')

    for(let i=0;i<100000;i++){
        x = foo(dict)
    }
})


console.log({t1,t2,t3});
// console.log(x);
// console.log(y);

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

// // read XML for the concrete model
// const xmlInputString = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
// // get local domain from file
// const localDomain = JSON.parse(fs.readFileSync(CONFIG.pathToInputMapping, 'utf-8'));

// // fs.writeFileSync(CONFIG.pathToOutputModel, xmlInputString);

// let model = new UppaalXML(xmlInputString);


// let x = model["Voter"].location
// console.log(model["Voter"].location.map(y=>y.$.id));
// console.log(model["Voter"].transition[0]);
// console.log(model["Voter"].transition[0].source[0].$.ref);

// console.log(model["Voter"].local);

// model["Voter"].transition.forEach(t => {
//         // console.log(`from ${t.source[0].$.ref} to ${t.target[0].$.ref}`);  
//         console.log(`from ${t.src} to ${t.trg}`);  
//     })
    
// console.log(model["Voter"].location[0]);
// console.log(model["Voter"].location[0].name);
// console.log(model["Voter"].location[1]);
// console.log(model["Voter"].location[2]);
// console.log(model["Voter"].location[2].name);
// console.log(model.getTemplateNames());

// model.fillMissingLocationNames();

// console.log(model.getLocationNameToIdMap("Voter"));
// console.log(model.getLocationIdToNameMap("Voter"));


// console.log(model.getLocationNameToIdMap("Authority"));
// console.log(model.getLocationIdToNameMap("Authority"));


// const xmlParser = new xml2js.Parser({includeWhiteChars :true});
// xmlParser.parseString(xmlInputString, function (err, res) {   
//     let obj = res;

//     const xmlBuilder = new xml2js.Builder({
//         headless:true,
//         // renderOpts: { pretty: false } 
//     });

//     obj = JSON.stringify(obj)
//     obj = JSON.parse(obj)
//     let outstr = xmlBuilder.buildObject(obj);
//     // fs.writeFileSync(CONFIG.pathToOutputModel, xmlInputString);
//     fs.writeFileSync(CONFIG.pathToOutputModel, outstr);
// })

// fs.writeFileSync(CONFIG.pathToOutputModel, model.toString(), {encoding: "utf8"});


