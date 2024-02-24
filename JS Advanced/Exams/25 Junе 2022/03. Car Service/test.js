import { carService } from './03. Car Service_Resources.js';
import { expect } from 'chai';

describe("Tests …", function() {
    describe("isItExpensive ", function() {
        it("sohuldReturnCorrectWithEngineInput", function() {
            expect(carService.isItExpensive("Engine"))
                .to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("sohuldReturnCorrectWithTransmissionInput", function() {
            expect(carService.isItExpensive("Transmission"))
                .to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("sohuldReturnCorrectWithCheeperElements", function() {
            expect(carService.isItExpensive("Wheel"))
                .to.equal(`The overall price will be a bit cheaper`);
        });
     });

     describe("discount", function(){
        it ('shouldThrowErrorForNonNumberInput', function(){
            expect(() => carService.discount('1', 1)).to.throw(Error, "Invalid input");
            expect(() => carService.discount(1, '1')).to.throw(Error, "Invalid input");
            expect(() => carService.discount('1', '1')).to.throw(Error, "Invalid input");
        })

        it('shouldReturnCoorectForTwoPartsOrLower', () => {
            expect(carService.discount(1, 10)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 10)).to.equal("You cannot apply a discount");
        });

        it('shouldApplyCorrectDiscountForItemsBetrweenThreeAndSeven', () => {
            expect(carService.discount(3, 100)).to.equal("Discount applied! You saved 15$");
            expect(carService.discount(5, 200)).to.equal("Discount applied! You saved 30$");
            expect(carService.discount(7, 150)).to.equal("Discount applied! You saved 22.5$");
        });

        it('shouldApplyCorrectDiscountForOverSevenParts', () => {
            expect(carService.discount(8, 100)).to.equal("Discount applied! You saved 30$");
            expect(carService.discount(10, 200)).to.equal("Discount applied! You saved 60$");
            expect(carService.discount(15, 150)).to.equal("Discount applied! You saved 45$");
        });
     })

     describe('partsToBuy', function(){
        it ('shoudlThrowErrorForNonArrayInput', function(){
            expect(() => carService.partsToBuy(1, [{ part: "coil springs", price: 230 }]))
                .to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy([{ part: "coil springs", price: 230 }], 'asd'))
                .to.throw(Error, "Invalid input");
            expect(() => carService.partsToBuy(1, 'asd'))
                .to.throw(Error, "Invalid input");
        })

        it('shouldReturn0', () => {
            expect(carService.partsToBuy([], ['blowoff valve'])).to.equal(0);
        });

        it('shouldCalulateTotalValue', () => {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "injectors", price: 180 }
            ];
            const neededParts = ["blowoff valve", "injectors"];

            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(325);
        });

        it('should0ForNoPartsNedeed', () => {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "injectors", price: 180 }
            ];
            const neededParts = [];

            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(0);
        });

        it('should0ForNoPartsMatcing', () => {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "injectors", price: 180 }
            ];
            const neededParts = ["spark plugs"];

            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(0);
        });
     })
});
