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
let extModel = generateProduct(alphaStr);
// console.log(extModel.nta.template[0].location.length);


let ld = approximateLocalDomain(
    extModel.toString(),
    {
        vars: ['Voter_1_mem_dec', 'Voter_1_mem_sg', 'Voter_1_mem_vt'],
        valInit: [0, 0, 0]
    }
);

let myMapping = restictionOfLocalDomain(ld, 1)

console.log(myMapping);

// -------
let abstractionParams = {
    template: "Voter",
    scope: "*",
    val0: {
        mem_sg: 0,
        mem_vt: 0
    },
    get argsR() {
        return Object.keys(this.val0)
    },
    argsN: [
        {
            name: "validVote",      // for now argsN are reset when argsR are assumed and eval'd when those are reset
            val0: 0,
            f: `mem_sg && mem_vt`   //? should we allow self-referencing? (e.g. to simulate reduce with acc)
        },
        {
            name: "invalidVote",
            val0: 1,
            f: `!(mem_sg && mem_vt)`
        },
    ],
    // get d from restrMapping
    d: {
        "id3": [[0, 0]],
        "id2": [[0, 0]],
        "id0": [[0, 0]],
        "id1": [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]]
    },
}

generateAbstractModel(inputStr, abstractionParams)