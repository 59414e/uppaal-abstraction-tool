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


export default {};
export { cartesianProduct, arrayRange, arrayClone }