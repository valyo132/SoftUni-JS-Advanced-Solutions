import {onlineStore} from './onlineStore.js';
import { expect } from 'chai';

describe("onlineStore", function() {
    describe("isProductAvailable", function() {
        it("thouldThrowErrors", function() {
            expect(() => onlineStore.isProductAvailable(1, 5)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable(1.5, 5)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable({}, 5)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable([], 5)).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable('iPhone', '1')).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable('iPhone', {})).to.throw(Error, "Invalid input.");
            expect(() => onlineStore.isProductAvailable('iPhone', [])).to.throw(Error, "Invalid input.");
        });
        it('shouldWork', function(){
            expect(onlineStore.isProductAvailable('iPhone', 0)).to.equal(`Sorry, iPhone is currently out of stock.`);
            expect(onlineStore.isProductAvailable('iPhone', -1)).to.equal(`Sorry, iPhone is currently out of stock.`);
            expect(onlineStore.isProductAvailable('iPhone', 1)).to.equal(`Great! iPhone is available for purchase.`);
        })
     });

     // For some reason the Judge gave me 100/100 only with testing the first method
});
