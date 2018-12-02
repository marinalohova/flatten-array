"use strict";

/**
 * Flattens any nested array of integers.
 * @param {Array} array - A multiple level nested array.
 * @returns {Array} Array that is flattened to be only single level.
 * @throws {Error} Argument must not be null.
 * @throws {Error} Array value is non-integer.
 */
function hackerFlatten(array) {
    if (array == null) {
        throw new Error('Argument is null.');
    }
    
    let result = array.toString();
    
    if (!/^[\-0-9,]+$/.test(result)) {
        throw new Error('Must be an integer.'); 
    }
    
    return result.split(',')
        .filter(value => value)
        .map(value => parseInt(value));
}

module.exports = hackerFlatten;