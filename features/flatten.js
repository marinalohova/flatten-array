"use strict";

/**
 * Flattens any nested array of integers.
 * @param {Array} array - A multiple level nested array.
 * @returns {Array} Array that is flattened to be only single level.
 * @throws {Error} Argument must not be null.
 * @throws {Error} Array value is non-integer.
 */
function flatten(array) {
    if (array == null || !Array.isArray(array)) {
        throw new Error('Argument is null.');
    }
    
    return array.reduce((memo, value) => {
        if (Array.isArray(value)) {
            memo = [...memo, ...flatten(value)];
        } else if (Number.isInteger(value)) {
            memo.push(value);
        } else if (value != null)
            throw new Error('Must be an integer.');
        
        return memo;
    }, []);
}

module.exports = flatten;