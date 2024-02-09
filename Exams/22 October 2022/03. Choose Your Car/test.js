import {chooseYourCar} from './chooseYourCar.js';
import { expect } from 'chai';

describe("chooseYourCar", function() {
    describe("choosingType", function() {
        it("shouldReturnInvalidYear", function() {
            expect(() => chooseYourCar.choosingType('car', 'blue', 1899))
                .to.throw(Error, `Invalid Year!`);
            expect(() => chooseYourCar.choosingType('car', 'blue', 2023))
                .to.throw(Error, `Invalid Year!`);
        });
        it ('shouldTrowErrorForNoSedanInput', function(){
            expect(() => chooseYourCar.choosingType('car', 'blue', 2000))
                .to.throw(Error, `This type of car is not what you are looking for.`);
        })
        it ('shouldReturnCorrectOutputForOver2010Year', function(){
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2012))
                .to.equal(`This blue Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2022))
                .to.equal(`This blue Sedan meets the requirements, that you have.`);
        })
        it ('shouldRetunrCorrectForBelowYear2010', function(){
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009))
                .to.equal(`This Sedan is too old for you, especially with that blue color.`);
            expect(chooseYourCar.choosingType('Sedan', 'blue', 1900))
                .to.equal(`This Sedan is too old for you, especially with that blue color.`);
        })
     });
     
     describe('brandName' , function(){
        it ('shouldThronErrorForNonArrayInput', function(){
            expect(() => chooseYourCar.brandName({}, 1))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName('123', 1))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName(123, 1))
                .to.throw(Error, "Invalid Information!");
        })
        it ('shouldThrowErrorsForNonValidIndexes', function(){
            let array = ["BMW", "Toyota", "Peugeot"];
            expect(() => chooseYourCar.brandName(array, '1'))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName(array, -1))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName(array, 3))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName(array, 4))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.brandName(array, 4.1))
                .to.throw(Error, "Invalid Information!");
        })
        it('shouldRetunrCorrectOutput', function(){
            let array = ["BMW", "Toyota", "Peugeot"];
            expect(chooseYourCar.brandName(array, 1))
                .to.equal('BMW, Peugeot');
            expect(chooseYourCar.brandName(array, 0))
                .to.equal('Toyota, Peugeot');
            expect(chooseYourCar.brandName(array, 2))
                .to.equal('BMW, Toyota');
        })
     })

     describe('carFuelConsumption', function(){
        it ('shouldThrowErrorForNonValidInputDistance', function(){
            expect(() => chooseYourCar.carFuelConsumption('1', 12))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(0, 12))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(-1, 12))
                .to.throw(Error, "Invalid Information!");
        })
        it ('shouldThrowErrorForNonValidInputLiters', function(){
            expect(() => chooseYourCar.carFuelConsumption(3, '1'))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(12, 0))
                .to.throw(Error, "Invalid Information!");
            expect(() => chooseYourCar.carFuelConsumption(12, -12))
                .to.throw(Error, "Invalid Information!");
        })
        it ('shouldWorkCorrectly', function(){
            expect(chooseYourCar.carFuelConsumption(100, 4))
                .to.equal("The car is efficient enough, it burns 4.00 liters/100 km.");
            expect(chooseYourCar.carFuelConsumption(100, 20))
                .to.equal("The car burns too much fuel - 20.00 liters!");
        })
     })
});
