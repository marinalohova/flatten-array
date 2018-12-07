const { expect } = require('chai');
var flatten = require('../features/flatten2');

describe('flatten()', () => {
    it('should flatten nested arrays', () => {

        var array = [[1, 2, [3]], 4];

        var result = flatten(array);

        expect(result).to.be.eql([1, 2, 3, 4]);
    });

    it('should flatten any level of depth correctly', () => {

        var array = [[57, 78, 98, 4, 3], 1, 2, [3, 5, 7, 9], 89, 7, 0, 3, 5, [3, 5, 6, 7, 9, [45, 6, 7, 9], 4, 6, 7], 5, 7, 9];


        var result = flatten(array);

        expect(result).to.be.eql([57, 78, 98, 4, 3, 1, 2, 3, 5, 7, 9, 89, 7, 0, 3, 5, 3, 5, 6, 7, 9, 45, 6, 7, 9, 4, 6, 7, 5, 7, 9]);

    });
});