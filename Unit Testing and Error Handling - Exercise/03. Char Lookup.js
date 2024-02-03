import { lookupChar } from './toTest.js'
import { expect } from 'chai'

describe('lookupChar', function(){
    it ('shoudWork', function(){
        let str = 'asd';
        let index = 1;
        expect(lookupChar(str, index)).to.equal('s');
    })

    it ('shoudReturnUndefined1', function(){
        let str = 123;
        expect(lookupChar(str, 2)).to.equal(undefined);
    })

    it ('shoudReturnUndefined2', function(){
        let index = "a";
        expect(lookupChar("asd", index)).to.equal(undefined);
    })

    it ('shoudReturnUndefined3', function(){
        let index = 1.4;
        expect(lookupChar("asd", index)).to.equal(undefined);
    })

    it ('shoudReturnIncorectIndex1', function(){
        let index = -1;
        expect(lookupChar("asd", index)).to.equal("Incorrect index");
    })

    it ('shoudReturnIncorectIndex2', function(){
        let str = 'asd';
        expect(lookupChar(str, 6)).to.equal("Incorrect index");
    })
})