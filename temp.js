const fs = require('fs');


class UppaalModel{
    constructor(){
        this.graphs = {}; // moduleName-graph dict
    }

    fromFile(path){
        const data = fs.readFileSync(path, 'utf8');
        this.fromStr(data);
    }

    fromStr(str){
        const regTemplate = /template><name[^<>]*?>([^<>]*)([\s\S]*?)<\/template/g;
        //let templateData = [...str.mathAll(regTemplate)].map(x=>({[x[1]]:x[2]}));
        let templateData = [...str.matchAll(regTemplate)].forEach(x=>{
            let g = new Graph();
            g.fromStr(x[2]);
            g.calcTransClosure();
            console.log(`graph name= ${x[1]}`);
            this.graphs[x[1]] = g;
        });
    }
}

class Graph {
    constructor() {
        this.edges = [];
        this.nodes = [];
        this.nid = {};
        this.nreach = {};
        this.nreach_named = {};
    }

    // fromFile(path){
    //     const data = fs.readFileSync(path, 'utf8');
    //     this.fromStr(data);
    // }

    fromStr(str){
        // const regTemplate = /template><name[^<>]*?>([^<>]*)([\s\S]*?)<\/template/g;
        //let templateData = [...str.mathAll(regTemplate)].map(x=>({[x[1]]:x[2]}));
        // let templateData = [...str.mathAll(regTemplate)].map(x=>[x[1],x[2]]);

        // templateData.forEach(s=>{
        //     this.regNodes(s[1],s[0]); 
        // })

        this.regNodes(str);
        this.regEdges(str);

        this.nid = this.nodes.reduce((acc,x,i)=>(acc[x.id]=i,acc),{});
    }

    regNodes(str, from = 'xml') {
        const regLocation = new RegExp(/<location(.*?)>(.*?)<\/location>/, 'g')
        let locData = [...str.matchAll(regLocation)].map(x => [x[1] || '', x[2] || '']);
        // console.log(x);

        for (const el of locData) {
            const regLocationId = /.*?id="(.+?)"/;
            let locId = (el[0].match(regLocationId))[1];
            // console.log(locId);

            const regLocationName = /.*?<name.*?>(.*?)<\/name/;
            let locName = (el[1]) ? (el[1].match(regLocationName) || ['',''])[1] : '';
            // console.log(locName);

            this.nodes.push({ 
                id: locId, 
                name: locName 
            });
        }
        console.log(this.nodes);
    }

    regEdges(str, from = 'xml') {
        const regTransition = /<transition.*?>(.*?)<\/transition>/g;
        let transData = [...str.matchAll(regTransition)].map(x => x[1]);
        for (const el of transData) {
            const regTransSrc = /source[^>]*?"(.*?)"/;
            const regTransTrg = /target[^>]*?"(.*?)"/;
            let transSrc = el.match(regTransSrc)[1];
            let transTrg = el.match(regTransTrg)[1];

            const regLTransLabel = /<label[^<]*?kind="([^<]*?)"[^<]*?>([^<]*?)<\/label/g;
            let transLabels = [...el.matchAll(regLTransLabel)].reduce((acc,x)=>(acc[x[1]]=x[2], acc), {});
           
            this.edges.push({
                source:transSrc, 
                target:transTrg,
                labels:transLabels
            })
        }
        console.dir(this.edges, { depth: null });
    }

    flatUpd() {
        let updList = [];
        this.edges.forEach(x => {
            if (x.labels.assignment) {
                updList.push(x.labels.assignment);
            }
        })
        console.log(updList);
    }

    flatCond() {
        let condList = [];
        this.edges.forEach(x => {
            if (x.labels.guard) {
                condList.push(x.labels.guard);
            }
        })
        console.log(condList);
    }

    calcTransClosure(){
        const n = this.nodes.length;
        this.adj = Array.from(Array(n), ()=>new Array(n).fill(0));

        // console.log(nid);
        this.edges.forEach(e=>{
            // console.log(e.source,nid[e.source],e.target,nid[e.target]);
            this.adj[this.nid[e.source]][this.nid[e.target]] = 1;
        })

        let d = JSON.parse(JSON.stringify(this.adj));
        

        for(let k=0;k<n;k++){
            for(let i=0;i<n;i++){
                for(let j=0;j<n;j++){
                    d[i][j] = d[i][j] ||  d[i][k] && d[k][j];
                }
            }
        }

        for(let i=0;i<n;i++){
            d[i][i] = d[i][i] && this.adj[i][i];
        }

        for(let i=0;i<n;i++){
            if(i!=this.nid[this.nodes[i].id]){console.log("ERR, nid indices were mixed up...");break;}
            this.nreach[this.nodes[i].id] = d[i].reduce((acc, x) => acc += x, 0);
            this.nreach_named[this.nodes[i].name] = d[i].reduce((acc,x)=>acc+=x,0);
        }

        
        // console.dir(this.adj)
        // console.dir(d);
        // console.log(this.nreach);
        // console.log(this.nreach_named);

        return d;
    }

    printNreach(withNames = true){
        // TODO:...
        // const n = this.nodes.length;
        // if(withNames){
        //     let v = {};
        //     for(let k in this.nreach){
                
        //     }
        // }
    }
}

// let g = new Graph();
// g.fromFile('./sample_big.xml');
// g.fromFile('../xml/removeVar_samples/basic_cycle_updates_only.xml');
// g.fromFile('../xml/removeVar_samples/on_self_reachability.xml');

let m = new UppaalModel();
// m.fromFile('../xml/removeVar_samples/postal_model.xml');
// m.fromFile('../xml/removeVar_samples/on_self_reachability.xml');
m.fromFile('./output_files/ext_model.xml');

// console.log(m.graphs)
m.graphs["VoterL"].flatCond();
m.graphs["VoterL"].flatUpd();

// g.calcTransClosure();

// function foo(path){
//     const reg = /template><name[^<>]*?>([^<>]*)([\s\S]*?)<\/template/g;
//     const data = fs.readFileSync(path, 'utf8');
// }

