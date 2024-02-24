import {isOddOrEven} from './toTest.js';
import { expect } from 'chai';

describe('isOddOrEven', function(){
    it ('shouldReturnEven', function(){
        let input = "abcd"
        expect(isOddOrEven(input)).to.equal('even');
    })

    it ('shouldReturnOdd', function(){
        let input = "abc"
        expect(isOddOrEven(input)).to.equal('odd');
    })
    
    it ('shouldReturnUndefined', function(){
        let input = 1
        expect(isOddOrEven(input)).to.equal(undefined);
    })
})