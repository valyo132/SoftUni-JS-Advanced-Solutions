import {findNewApartment} from "./findApartment.js";
import { expect } from "chai";

describe("findNewApartment", function() {
    describe("isGoodLocation", function() {
        it("throwErrors", function() {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", 1)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", {})).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", 'true')).to.throw(Error, "Invalid input!");
        });
        it('shouldReturnFirstString', function(){
            expect(findNewApartment.isGoodLocation('NoSofia', true)).to.equal("This location is not suitable for you.");
        })
        it('shouldReturnSecondString', function(){
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        })
        it('shouldReturnThirdString', function(){
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
        })
     });

     describe('isLargeEnough', function(){
        it('shouldThrowErrorsForArray', function(){
            expect(() => findNewApartment.isLargeEnough(1, 2)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough('1', 2)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough({}, 2)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(1.2, 2)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 2)).to.throw(Error, "Invalid input!");
        })
        it('shouldThrowErrorsForNumber', function(){
            let arr = [40, 50, 60];
            expect(() => findNewApartment.isLargeEnough(arr, '1')).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(arr, [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(arr, {})).to.throw(Error, "Invalid input!");
        })
        it('shouldWork', function(){
            let arr = [40, 50, 60];
            expect(findNewApartment.isLargeEnough(arr, 45)).to.equal('50, 60');
        })
     })

     describe('isItAffordable', function(){
        it('shourThrowErrorsForPrice', function(){
            expect(() => findNewApartment.isItAffordable('1', 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable([], 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable({}, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(-1, 5)).to.throw(Error, "Invalid input!");
        })
        it('shourThrowErrorsForBuget', function(){
            expect(() => findNewApartment.isItAffordable(5, '1')).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, {})).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, 0)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, -1)).to.throw(Error, "Invalid input!");
        })
        it('shouldReturnFirstString', function(){
            expect(findNewApartment.isItAffordable(501, 500)).to.equal("You don't have enough money for this house!");
        })
        it('shouldReturnSecondString', function(){
            expect(findNewApartment.isItAffordable(500, 501)).to.equal("You can afford this home!");
        })
     })
});
