import {weddingDay} from './weddingDay.js';
import { expect } from 'chai';

describe("weddingDay", function() {
    describe("pickVenue", function() {
        it("throwErrors", function() {
            expect(() => weddingDay.pickVenue('1', 5, 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue({}, 5, 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue([], 5, 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, '5', 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, [], 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, {}, 'sofia')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, 3, 1)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, 3, 1.3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, 3, [])).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, 3, {})).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.pickVenue(5, 3, 'NoVarna')).to.throw(Error, `The location of this venue is not in the correct area!`);
        });
        it('shouldWork', function(){
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 150 guests and 120$ cover.`);
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal(`This venue does not meet your requirements!`);
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal(`This venue does not meet your requirements!`);
        })
     });
     describe('otherSpendings', function(){
        it("throwErrors", function(){
            expect(() => weddingDay.otherSpendings('1', [], true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings(1, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings({}, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings(1.5, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], '1', true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], 1, true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], {}, true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], 1.5, true)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], 1)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], 1.5)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], [])).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], {})).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], '1')).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
            expect(weddingDay.otherSpendings(["flowers"], ["pictures"], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
        })
     })
     describe('tableDistribution', function(){
        it('shouldThrowErrors', function(){
            expect(() => weddingDay.tableDistribution('1', 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution({}, 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution([], 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(0, 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(-1, 3)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(2, '1')).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(2, {})).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(2, [])).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(2, 0)).to.throw(Error, "Invalid Information!");
            expect(() => weddingDay.tableDistribution(2, -2)).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            expect(weddingDay.tableDistribution(10, 3)).to.equal("There is only 3 people on every table, you can join some tables.");
            expect(weddingDay.tableDistribution(100, 3)).to.equal("You have 3 tables with 33 guests on table.");
        })
     })
});
