import { rgbToHexColor } from './toTest.js';
import { expect } from 'chai';

    describe('rgbToHexColor', function(){
        it('itReturnsUndefined', function(){
            expect(rgbToHexColor(-1, 233,123)).to.equal(undefined);
            expect(rgbToHexColor(122, -1,123)).to.equal(undefined);
            expect(rgbToHexColor(122, 233,-2)).to.equal(undefined);

            expect(rgbToHexColor(122, 233, 300)).to.equal(undefined);
            expect(rgbToHexColor(122, 300, 122)).to.equal(undefined);
            expect(rgbToHexColor(300, 233, 122)).to.equal(undefined);
        })

        it('works', function(){
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
            expect(rgbToHexColor(122,122,122)).to.equal('#7A7A7A');
        })

        it ('returnsString', function(){
            expect(rgbToHexColor(122,122,122)).to.be.a('string');
        })

        it('dontWorkWithNonInt', function(){
            expect(rgbToHexColor('asd', 123,123)).to.equal(undefined);
            expect(rgbToHexColor(122, 233, "asd")).to.equal(undefined);
            expect(rgbToHexColor(122, "asd", 122)).to.equal(undefined);
        })
    })