/*
================================
Assumptions/Limitations:
- no struct support
- local domain cannot have multi-dim arrays (arrays for argsR will be added later) 
- no passing by reference for fdec
- myHash serves two purposes:
    1) it uniquely identifies (from timestamp) the instance of abstraction:
        - abstract (copies of) functions are appended with a `__<myHash>` suffix
        - local domain constants are appended with a `__<myHash>` suffix
        - useful to avoid name collisions if abstraction procedure gets repeated
    2) it is used as a name for selector_id (index of a local domain element), which is a bit shorter than writing `i_<myHash>`]

- no existing `__shadowed` vars or the ones with the `_myHash` suffix
================================
Template draft:

in declarations:
const int <LDE_namePrefix>_at_<location>[<sizeof d(location)>][<sizeof argsR>] = {...} // with no nested arrays
///
e.g.
const int __d_vals_at_id0[1][2] = {{0,0}};
///

void foo(params){...}
void foo__with_assume(params, argsR){...}

in select:
local_domain_val_i: ...

in guard/update:
...<var>...
...<LDE_namePrefix>_at_<location>[local_domain_val_i][argsR.indexOf(var)]...


================================
Prototype idea:
- get an input model
- parameters:
    - target template
    - local domain
    - argsR
    - argsN
    - mapping function
    - scope 
- abstract the local declarations (both vdec and fdec)
    - if argsR in f-n body, then append an abstract copy (two versions are needed as it could be the case that target var appears on the LHS)
- THEN process the edge labels 
    - if in scope - add the select label
    - for function call - add the renaming and append the arg
- append a typedef for each unique set of values in local domain (the type will be used for the select label range)

Extras:
- generating mapping template wrt selected parameters
- parse the declaration/initialization block 
    - to be refined for the scoped abstraction
- parse the edges
    - possibly adding the select label
    - possibly removing the edge (e.g., if abstract guard is always false)
- extract keywords/template for the reserved/generated identifier names to the config
================================
*/


// !!!
/*
TODO: filter out locations which are associated to an empty location domain (make sure, no int[0][3] lists are declared)

TODO: if only some variables are shadowed by a selector, then in an abstract expr/function those must be used IN PLAIN (w/o pointing to an ld element)

TODO: instead of reassigning the argsR - add a property argsR_shadowed (this will improve readability and ensure abscence of logical bugs)
*/
// !!!

// built-in
import * as fs from 'fs';
import * as path from 'path';

// custom libs/files
import CONFIG from './config.js';
import { renamingPreproc, generateProduct } from './ModelGenerator/gen_product.js';
import { approximateLocalDomain, restictionOfLocalDomain } from './ModelGenerator/approx_ld.js';
import { generateAbstractModel } from './ModelGenerator/gen_abstract.js';


let inputStr = fs.readFileSync(CONFIG.pathToInputModel, "utf8");
let alphaStr = renamingPreproc(inputStr).toString();
// console.log(alphaStr);
// let extModel = generateProduct(alphaStr);
let prodStr = newlineFix(generateProduct(alphaStr).toString());
// console.log(extModel.nta.template[0].location.length);


// newline fix
function newlineFix(str){
    let nl_reg = /(?<=<label[^<]*?kind="assignment"[^<]*?>)([^<]*?)(?=<\/label>)/g;
    return str.replace(nl_reg,function(match){
        return match.replace(/\s+/gm,'').split(',').join(',\n')
    })
}

function convertMapping(myMapping){
    let res = {};
    for(let x in myMapping){
        res[x] = [...myMapping[x] ].map(s=>{
            return s.split(',').map(v=>Number(v))
        })
    }
    return res;
}

// ================================
// Abstraction 1 
// (remove mem_vt, mem_sg)
// ================================

let ld_1_on_templates = approximateLocalDomain(
    prodStr,
    {
        vars: ['mem_sg', 'mem_vt'],
        valInit: [0, 0]
    }
);

let d_1_t = convertMapping( 
    restictionOfLocalDomain(ld_1_on_templates, 1) 
);


let params_1_on_templates = {
    template: "Voter",
    scope: "*",
    val0: {
        'mem_sg': 0,
        'mem_vt': 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    d: d_1_t,
    argsN: [
    ],
}

let amodel_1_on_templates = generateAbstractModel(
    inputStr, 
    params_1_on_templates
);

fs.writeFileSync('./output_files/a1_t.xml', amodel_1_on_templates.toString())

// --------------------------------

let ld_1_on_instances1 = approximateLocalDomain(
    prodStr,
    {
        vars: ['Voter_1_mem_sg', 'Voter_1_mem_vt'],
        valInit: [0, 0]
    }
);

let d_1_i1 = convertMapping(ld_1_on_instances1);

let params_1_on_instances1 = {
    template: "ExtendedMAS",
    scope: "*",
    val0: {
        'Voter_1_mem_sg': 0,
        'Voter_1_mem_vt': 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    d: d_1_i1,
    argsN: [
    ],
}


let amodel_1_on_instances1 = generateAbstractModel(
    prodStr, 
    params_1_on_instances1
);

fs.writeFileSync('./output_files/a1_i1.xml', amodel_1_on_instances1.toString())

// --------------------------------

let ld_1_on_instances2 = approximateLocalDomain(
    prodStr,
    {
        vars: [
            'Voter_1_mem_sg', 'Voter_1_mem_vt',
            'Voter_2_mem_sg', 'Voter_2_mem_vt'
        ],
        valInit: [0, 0, 0, 0]
    }
);

let d_1_i2 = convertMapping(ld_1_on_instances2);

let params_1_on_instances2 = {
    template: "ExtendedMAS",
    scope: "*",
    val0: {
        'Voter_1_mem_sg': 0,
        'Voter_1_mem_vt': 0,
        'Voter_2_mem_sg': 0,
        'Voter_2_mem_vt': 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    d: d_1_i2,
    argsN: [
    ],
}


let amodel_1_on_instances2 = generateAbstractModel(
    prodStr, 
    params_1_on_instances2
);

fs.writeFileSync('./output_files/a1_i2.xml', amodel_1_on_instances2.toString())

// --------------------------------

let ld_1_on_instances3 = approximateLocalDomain(
    prodStr,
    {
        vars: [
            'Voter_1_mem_sg', 'Voter_1_mem_vt',
            'Voter_2_mem_sg', 'Voter_2_mem_vt',
            'Voter_3_mem_sg', 'Voter_3_mem_vt'
        ],
        valInit: [0, 0, 0, 0, 0, 0]
    }
);

let d_1_i3 = convertMapping(ld_1_on_instances3);

let params_1_on_instances3 = {
    template: "ExtendedMAS",
    scope: "*",
    val0: {
        'Voter_1_mem_sg': 0,
        'Voter_1_mem_vt': 0,
        'Voter_2_mem_sg': 0,
        'Voter_2_mem_vt': 0,
        'Voter_3_mem_sg': 0,
        'Voter_3_mem_vt': 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    d: d_1_i3,
    argsN: [
    ],
}


let amodel_1_on_instances3 = generateAbstractModel(
    prodStr, 
    params_1_on_instances3
);

fs.writeFileSync('./output_files/a1_i3.xml', amodel_1_on_instances3.toString())

// --------------------------------

let ld_1_on_instances4 = approximateLocalDomain(
    prodStr,
    {
        vars: [
            'Voter_1_mem_sg', 'Voter_1_mem_vt',
            'Voter_2_mem_sg', 'Voter_2_mem_vt',
            'Voter_3_mem_sg', 'Voter_3_mem_vt',
            'Voter_4_mem_sg', 'Voter_4_mem_vt'
        ],
        valInit: [0, 0, 0, 0, 0, 0, 0, 0]
    }
);

let d_1_i4 = convertMapping(ld_1_on_instances4);

let params_1_on_instances4 = {
    template: "ExtendedMAS",
    scope: "*",
    val0: {
        'Voter_1_mem_sg': 0,
        'Voter_1_mem_vt': 0,
        'Voter_2_mem_sg': 0,
        'Voter_2_mem_vt': 0,
        'Voter_3_mem_sg': 0,
        'Voter_3_mem_vt': 0,
        'Voter_4_mem_sg': 0,
        'Voter_4_mem_vt': 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    d: d_1_i4,
    argsN: [
    ],
}


let amodel_1_on_instances4 = generateAbstractModel(
    prodStr, 
    params_1_on_instances4
);

fs.writeFileSync('./output_files/a1_i4.xml', amodel_1_on_instances4.toString())


// ================================
// Abstraction 2
// ================================


// ================================
// Abstraction 3
// ================================



// let ld = approximateLocalDomain(
//     extModel.toString(),
//     {
//         vars: ['Authority_tally_1','Authority_tally_2','Authority_tally_3'],
//         valInit: [0,0,0]
//     }
// );

// console.log(ld);


// let ld = approximateLocalDomain(
//     extModel.toString(),
//     {
//         vars: ['Voter_1_mem_sg', 'Voter_1_mem_vt'],
//         valInit: [0, 0]
//     }
// );

// let ld2 = approximateLocalDomain(
//     extModel.toString(),
//     {
//         vars: ['Voter_2_mem_dec', 'Voter_2_mem_sg', 'Voter_2_mem_vt'],
//         valInit: [0, 0, 0]
//     }
// );
// console.log(restictionOfLocalDomain(ld, 1));
// console.log(restictionOfLocalDomain(ld2, 2));

// let myMapping = restictionOfLocalDomain(ld, 0)
// let myMapping = restictionOfLocalDomain(ld, 1)
// let myMapping = ld;


// console.log(myMapping);

// // -------
// let abstractionParams = {
//     template: "Voter",
//     scope: "*",
   
//     val0: {
//         mem_sg: 0,
//         mem_vt: 0
//     },
//     get argsR() {
//         return Object.keys(this.val0)
//     },
//     // d: myMapping,
//     argsN: [
//         // {
//         //     name: "validVote",      // for now argsN are reset when argsR are assumed and eval'd when those are reset
//         //     val0: 0,
//         //     f: `mem_sg && mem_vt`   //? should we allow self-referencing? (e.g. to simulate reduce with acc)
//         // },
//         // {
//         //     name: "invalidVote",
//         //     val0: 1,
//         //     f: `!(mem_sg && mem_vt)`
//         // },
//     ],
//     // get d from restrMapping
//     d: {
//         "id3": [[0, 0]],
//         "id2": [[0, 0]],
//         "id0": [[0, 0]],
//         "id1": [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]]
//     },
// }

// let abstractionParams3 = {
//     template: "Authority",
//     scope: "*",
//     val0: {
//         tally_1: 0,
//         tally_2: 0,
//         tally_3: 0
//     },
//     get argsR() {
//         return Object.keys(this.val0)
//     },
//     argsN: [
//         {
//             name: 'tally_total',      // for now argsN are reset when argsR are assumed and eval'd when those are reset
//             val0: 0,
//             f: `tally_1+tally_2+tally_3`   //? should we allow self-referencing? (e.g. to simulate reduce with acc)
//         }
//     ],
//     d: myMapping
// }

// let abstrModel = generateAbstractModel(extModel.toString(), abstractionParams);
// let abstrModel = generateAbstractModel(inputStr, abstractionParams);


// let abstractionParams1 = {
//     template: "ExtendedMAS",
//     scope: "*",
//     val0: {
//         Authority_tally_1: 0,
//         Authority_tally_2: 0,
//         Authority_tally_3: 0
//     },
//     get argsR() {
//         return Object.keys(this.val0)
//     },
//     argsN: [
//         {
//             name: 'tally_total',      // for now argsN are reset when argsR are assumed and eval'd when those are reset
//             val0: 0,
//             f: `Authority_tally_1+Authority_tally_2+Authority_tally_3`   //? should we allow self-referencing? (e.g. to simulate reduce with acc)
//         }
//     ],
//     d: myMapping,
// }

// generateAbstractModel(extModel.toString(), abstractionParams1);


// let abstractionParams4 = {
//     template: "ExtendedMAS",
//     scope: "*",
//     val0: {
//         'Voter_1_mem_sg': 0,
//         'Voter_1_mem_vt': 0
//     },
//     get argsR() {
//         return Object.keys(this.val0)
//     },
//     d: myMapping,
//     argsN: [
//     ],
// }

// let abstrModel = generateAbstractModel(newlineFix(extModel.toString()), abstractionParams4);