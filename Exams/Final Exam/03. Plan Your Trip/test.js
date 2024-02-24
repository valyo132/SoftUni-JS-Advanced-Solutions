import {planYourTrip} from './planYourTrip.js';
import {expect} from 'chai';

describe("planYourTrip", function() {
    describe("choosingDestination", function() {
        it("shouldThorError", function() {
            expect(() => planYourTrip.choosingDestination('Bulgaria', 'Winter', 2023)).to.throw(Error, `Invalid Year!`);
            expect(() => planYourTrip.choosingDestination('Bulgaria', 'Winter', 2024)).to.throw(Error, `This destination is not what you are looking for.`);
        });
        it('shouldWork', function(){
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024))
                .to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024))
                .to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
            expect(planYourTrip.choosingDestination("Ski Resort", "Other", 2024))
                .to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        })
     });
     describe('exploreOptions', function(){
        it('shouldThrowError', function(){
            expect(() => planYourTrip.exploreOptions(1, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions(1.5, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions({}, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions('asd', 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking" ], '1')).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking" ], -1)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking" ], 3)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking" ], 4)).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            let array = ["Skiing", "Snowboarding", "Winter Hiking"];
            expect(planYourTrip.exploreOptions(array, 2)).to.equal("Skiing, Snowboarding");
            expect(planYourTrip.exploreOptions(array, 0)).to.equal("Snowboarding, Winter Hiking");
            expect(planYourTrip.exploreOptions(array, 1)).to.equal("Skiing, Winter Hiking");
        })
     })
     describe('estimateExpenses', function(){
        it('shouldThrowErrors', function(){
            expect(() => planYourTrip.estimateExpenses('1', 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses({}, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses([], 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(-1, 5)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(5, '5')).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(5, {})).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(5, [])).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(5, 0)).to.throw(Error, "Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(5, -1)).to.throw(Error, "Invalid Information!");
        })
        it('shouldWork', function(){
            expect(planYourTrip.estimateExpenses(200, 2)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
            expect(planYourTrip.estimateExpenses(200, 20)).to.equal("The estimated cost for the trip is $4000.00, plan accordingly.");
        })
     })
});
