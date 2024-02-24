import { sum } from './toTest.js';
import { expect } from 'chai';

describe('sum', function (){
    it ('works', function (){
        expect(sum([1,2,3,4,5])).to.equal(15);
    });
});
    