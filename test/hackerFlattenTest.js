const { expect, assert } = require('chai');
var flatten = require('../features/hackerFlatten');

describe('flatten()', () => {
    it('should flatten nested arrays', () => {

        var array = [[1,2,[3]],4];

        var result = flatten(array);
        
        expect(result).to.be.eql([1,2,3,4]);
    });

    it('should flatten any level of depth correctly', () => {

        var array = [[57,78,98,4,3],1,2,[3,5,7,9],89,7,0,3,5,[3,5,6,7,9,[45,6,7,9],4,6,7],5,7,9];
        

        var result = flatten(array);

        expect(result).to.be.eql([57,78,98,4,3,1,2,3,5,7,9,89,7,0,3,5,3,5,6,7,9,45,6,7,9,4,6,7,5,7,9]);

    });

    it('should flatten empty nested arrays correctly', () => {

        var array = [[1,2,[]],4];

        var result = flatten(array);

        expect(result).to.be.eql([1,2,4]);

    });

    it('should throw error if argument is null', () => {

        assert.throws(flatten, Error, 'Argument is null.');

    });

    it('should throw error if value is not integer', () => {

        var badArray = [[1,2,[{name: 'Marina'}]],null];

        assert.throws(() => flatten(badArray), Error, 'Must be an integer.');

        badArray = [[1,2,[0.86]],null];

        assert.throws(() => flatten(badArray), Error, 'Must be an integer.');
    });

    it('should omit value if it is null', () => {

        var array = [[1,2,[null]],null];

        var result = flatten(array);

        expect(result).to.be.eql([1,2]);
    });
});