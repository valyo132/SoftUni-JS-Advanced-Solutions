import {petAdoptionAgency} from './petAdoptionAgency.js';
import { expect } from 'chai';

describe("petAdoptionAgency", function() {
    describe("isPetAvailable", function() {
        it("shouldThrowErrors", function() {
            expect(() => petAdoptionAgency.isPetAvailable(1, 5, true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable(1.5, 5, true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable({}, 5, true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable([], 5, true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', '123', true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', {}, true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', [], true)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', 5, 4)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', 5, 'asd')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', 5, {})).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('string', 5, [])).to.throw(Error, "Invalid input");
        });
        it('shouldWork', function(){
            expect(petAdoptionAgency.isPetAvailable('dog', 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable('dog', -1, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable('dog', 3, true)).to.equal(`Great! We have 3 vaccinated dog(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable('dog', 3, false)).to.equal(`Great! We have 3 dog(s) available for adoption, but they need vaccination.`);
        })
     });
     describe('getRecommendedPets', function(){
        it('sholdTrowErrors', function(){
            expect(() => petAdoptionAgency.getRecommendedPets('1', 'valid')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(1, 'valid')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets(1.5, 'valid')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets({}, 'valid')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([], 123)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([], {})).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([], [])).to.throw(Error, "Invalid input");
        })
        it('shouldWork', function(){
            expect(petAdoptionAgency.getRecommendedPets([{name: "asd", traits: "trait"}], 'unAvalable'))
                .to.equal("Sorry, we currently have no recommended pets with the desired traits: unAvalable.");
            expect(petAdoptionAgency.getRecommendedPets([{name: "pet1", traits: "trait"}, {name: "pet2", traits: "trait"}], 'trait'))
                .to.equal("Recommended pets with the desired traits (trait): pet1, pet2");
            expect(petAdoptionAgency.getRecommendedPets([{name: "pet1", traits: "trait"}, {name: "pet2", traits: "trait"}, {name: "pet2", traits: "other"}], 'trait'))
                .to.equal("Recommended pets with the desired traits (trait): pet1, pet2");
        })
     })
     describe('adoptPet', function(){
        it('shouldThrowErrors', function(){
            expect(() => petAdoptionAgency.adoptPet(123, 'Gosho')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet(123.5, 'Gosho')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet([], 'Gosho')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet({}, 'Gosho')).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet('dog', 123)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet('dog', 123.4)).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet('dog', {})).to.throw(Error, "Invalid input");
            expect(() => petAdoptionAgency.adoptPet('dog', [])).to.throw(Error, "Invalid input");
        })
        it('shouldWork', function(){
            expect(petAdoptionAgency.adoptPet('dog', 'Gosho'))
                .to.equal(`Congratulations, Gosho! You have adopted dog from the agency. Enjoy your time with your new furry friend!`)
        })
     })
});
