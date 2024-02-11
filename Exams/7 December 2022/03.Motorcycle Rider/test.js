import {motorcycleRider} from './Motorcycle Rider.js';
import { expect } from 'chai';

describe("motorcycleRider", function() {
    describe("licenseRestriction", function() {
        it("ReturnCorrectry", function() {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('ShouldThrowError', function(){
            expect(() => motorcycleRider.licenseRestriction('diff')).to.throw(Error, "Invalid Information!");
        })
     });
    
     describe('motorcycleShowroom', function(){
        it('shouldThrowError', function(){
            expect(() => motorcycleRider.motorcycleShowroom({}, 2)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 51)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], '2')).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            const engineVolume = ["125", "250", "600", "1000"];
            const maximumEngineVolume = 500;
            const result = motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume);
            expect(result).to.equal("There are 2 available motorcycles matching your criteria!");
        })
     })

     describe('otherSpendings', function(){
        it('shouldThrowError', function(){
            expect(() => motorcycleRider.otherSpendings("not an array", ["engine oil", "oil filter"], true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacket"], ["engine oil", "oil filter"])).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            const result = motorcycleRider.otherSpendings(["helmet", "jacket"], ["engine oil", "oil filter"], false);
            expect(result).to.equal("You spend $300.00 for equipment and consumables!");
        })
        it('shouldWorkWithDiscount', function(){
            const result = motorcycleRider.otherSpendings(["helmet", "jacket"], ["engine oil", "oil filter"], true);
            expect(result).to.equal("You spend $270.00 for equipment and consumables with 10% discount!");
        })
     })
});
