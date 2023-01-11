/**
 * Generates an array filled with numbers of a given range
 * @param {number} from
 * @param {number} to 
 * @param {boolean} inclusive - for the right bound 
 * @returns {Array.<number>} 
 */
function arrayRange(from, to, inclusive = true) {
    if (typeof from !== 'number' || typeof to !== 'number') {
        console.error(`arrayRange: expects numeric parameters, but received ${typeof from} and ${typeof to}`)
        return null;
    }
    return Array.from({ length: to - from + (inclusive ? 1 : 0) }, (k, v) => v + from);
}

/**
 * Recursively clones array (until first non-array element)
 * @param {Array.<any>} arr 
 * @returns {Array.<any>} 
 */
function arrayClone(arr) {
    return arr.map(el => Array.isArray(el) ? arrayClone(el) : el)
}

/**
 * Computes a depth-1 flatten cartesian product (note that a shallow-copy is made)
 * @param  {Array.<Array.<any>>} arr - product terms
 * @returns {Array.<any>} 
 */
function cartesianProduct(...arr) {
    return arr.reduce(
        // acc initialized with first arr
        (acc, b) => acc.flatMap(
            d => b.map(
                e => [d, e].flat()
            )
        ),
    );
}

function printTable(arr, header=[]){
    let i,j;
    let n=arr.length;
    let m = arr?.[0].length;

    let columnPad = new Array(m).fill(0)

    if(header.length!==0 && header.length!==m){
        console.error("#printTable: inconsistent header length")
        return null;
    }

    // column width to fit header entries
    header.forEach((attr,ind)=> columnPad[ind] = attr.length)

    for(i=0;i<n;i++){
        if(arr[i]?.length!==m){
            console.error("#printTable: inconsistent number of columns among the rows of arr")
            return null;
        }
        for(j=0;j<m;j++){
            if(typeof arr[i][j]!=='string'){
                arr[i][j]=arr[i][j].toString();
            }
            columnPad[j] = Math.max(arr[i][j].length, columnPad[j]);
        }
    }

    // let str = header.map((x,ind)=>x.padEnd(columnPad[ind]+1, ' ')).join('\t');
    let str = header.map((x,ind)=>x.padEnd(columnPad[ind], ' ')).join(' | ');
    str += '\n' + columnPad.map(x=>'-'.repeat(x+1)).join('+-')
    for(i=0;i<n;i++){
        str+='\n'
        
        let row = [];
        for(j=0;j<m;j++){
            // str += arr[i][j].padEnd(columnPad[j]+1, ' ')+'\t';
            row.push(arr[i][j].padEnd(columnPad[j], ' '))
        }
        
        str += row.join(' | ')
    }

    console.log(str);
}


export default {};
export { printTable, cartesianProduct, arrayRange, arrayClone }