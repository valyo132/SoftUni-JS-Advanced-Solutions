import { describe } from 'mocha';
import { isSymmetric } from './toTest.js';
import { expect } from 'chai';

describe('isSymetricFunc', function (){
    it('dontTakeArray', function() {
        let nonArray = 'not array';
        expect(isSymmetric(nonArray)).to.equal(false);
    });

    it('returnTrue', function(){
        let validArray = [1,2,3,2,1];
        expect(isSymmetric(validArray)).to.equal(true);
    });

    it('returnFalse', function(){
        let validArray = [1,2,3,2,2];
        expect(isSymmetric(validArray)).to.equal(false);
    });

    it("dontTakeInt", function(){
        expect(isSymmetric(2)).to.equal(false);
        expect(isSymmetric("23")).to.equal(false);
    });

    it("takaArray", function(){
        let array = [1,2,3,4]
        expect(isSymmetric(array)).to.equal(false);
        expect(Array.isArray(array)).to.equal(true);
    });
})