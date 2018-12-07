"use strict";

/**
 * Flattens any nested array of integers.
 * @param {Array} array - A multiple level nested array.
 * @returns {Array} Array that is flattened to be only single level.
 */
function flatten(array) {
    if (array == null || !Array.isArray(array)) {
        throw new Error('Argument is invalid.');
    }
    let result = [];
    
    while(array.length > 0) {
      let arg = array.shift();
        if (Array.isArray(arg)) {
            array.unshift(...arg)
        } else {
            result.push(arg);
        }
    }
    return result;
}

module.exports = flatten;