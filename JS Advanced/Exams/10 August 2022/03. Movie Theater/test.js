import {movieTheater} from './03. Movie Theater _Resources.js';
import { expect } from 'chai';

describe("movieTheater", function() {
    describe("ageRestrictions", function() {
        it("shouldReturnG", function() {
            expect(movieTheater.ageRestrictions('G'))
                .to.equal("All ages admitted to watch the movie");
        });
        it("shouldReturnPG", function() {
            expect(movieTheater.ageRestrictions('PG'))
                .to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });
        it("shouldReturnR", function() {
            expect(movieTheater.ageRestrictions('R'))
                .to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });
        it("shouldReturnNC-17", function() {
            expect(movieTheater.ageRestrictions('NC-17'))
                .to.equal("No one under 17 admitted to watch the movie");
        });
        it("shouldReturnDefalt", function() {
            expect(movieTheater.ageRestrictions('other'))
                .to.equal("There are no age restrictions for this movie");
        });
     });

     describe('moneySpent', function(){
        it('shouldThorwError', () => {
            expect(() => movieTheater.moneySpent('1', [], [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(1, {}, [])).to.throw(Error, "Invalid input");
            expect(() => movieTheater.moneySpent(1, [], {})).to.throw(Error, "Invalid input");
        });

        it('shouldClaclulateWithoutDiscount', () => {
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda'])).to.equal('The total cost for the purchase is 38.50');
            expect(movieTheater.moneySpent(2, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase is 36.00');
        });

        it('shouldApplyDiscount', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase with applied discount is 40.80');
            expect(movieTheater.moneySpent(5, ['Popcorn', 'Popcorn'], ['Water', 'Water'])).to.equal('The total cost for the purchase with applied discount is 69.60');
        });
     })

     describe('reservation', function(){
        it('shouldThrowErrorForNonNumberInput', function(){
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '1')).to.throw(Error, "Invalid input");
        })
        it('shouldThrowErrorForNonArrayInput', function(){
            expect(() => movieTheater.reservation({}, 1)).to.throw(Error, "Invalid input");
        })
        it('shouldReturn2', function(){
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 1)).to.equal(2);
        })
     })
});
