import {mathEnforcer} from './toTest.js'
import { expect } from 'chai'

describe('mathEnforcer', function(){
    describe('addFive', function(){
        it ('shouldRetunCorrectResultWithCorrectParameter', function(){
            let num = 5;
            expect(mathEnforcer.addFive(num)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })

        it ('shouldReturnUndefinedForNonNumberParameter', function(){
            expect(mathEnforcer.addFive('2')).to.equal(undefined);
            expect(mathEnforcer.addFive('4', [1.2])).to.equal(undefined);
            expect(mathEnforcer.addFive('4', Object)).to.equal(undefined);
        })

        it ('shoudWorkWithFloatNum', function(){
            expect(mathEnforcer.addFive(5.1)).to.be.closeTo(10, 0.1);
            expect(mathEnforcer.addFive(5.01)).to.be.closeTo(10, 0.01);
            expect(mathEnforcer.addFive(-5.1)).to.be.closeTo(0, 0.1);
        })
    })

    describe('subtractTen', function(){
        it ('shouldReturnCorrextResultWithCorrectParameter', function(){
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
        })

        it ('shouldReturnUndefinedForNonNumberParameter', function(){
            expect(mathEnforcer.subtractTen('2')).to.equal(undefined);
            expect(mathEnforcer.subtractTen('4', [1.2])).to.equal(undefined);
            expect(mathEnforcer.subtractTen('4', Object)).to.equal(undefined);
        })

        it ('shoudWorkWithFloatNum', function(){
            expect(mathEnforcer.subtractTen(33.3)).to.be.closeTo(23, 0.3);
            expect(mathEnforcer.subtractTen(33.003)).to.be.closeTo(23, 0.03);
            expect(mathEnforcer.subtractTen(-33.3)).to.be.closeTo(-43, 0.3);
        })
    })

    describe('sum', function(){
        it ('shouldReturnCorrextResultWithCorrectParameters', function(){
            expect(mathEnforcer.sum(15, 5)).to.equal(20);
            expect(mathEnforcer.sum(15, -5)).to.equal(10);
        })

        it ('shouldReturnUndefinedForNonNumberParameter', function(){
            expect(mathEnforcer.sum(2, '1')).to.equal(undefined);
            expect(mathEnforcer.sum('4', 2)).to.equal(undefined);
            expect(mathEnforcer.sum('4', [1.2])).to.equal(undefined);
            expect(mathEnforcer.sum('4', Object)).to.equal(undefined);
        })

        it ('shoudWorkWithFloatNum', function(){
            expect(mathEnforcer.sum(30.3, 0.2)).to.be.closeTo(30, 0.5);
            expect(mathEnforcer.sum(30, 0.02)).to.be.closeTo(30, 0.02);
            expect(mathEnforcer.sum(30.3, -0.2)).to.be.closeTo(30, 0.2);
        })
    })
})