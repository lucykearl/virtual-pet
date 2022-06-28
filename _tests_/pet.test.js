const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('fido');

        expect(pet.name).toEqual('fido');
    });

    it('has an inital age of 0', () => {
        const pet = new Pet('fido');

        expect(pet.age).toEqual(0);
    });

    it('has an inital hunger of 0', () => {
        const pet = new Pet('fido');

        expect(pet.hunger).toEqual(0);
    });

    it('has an inital fitness of 10', () => {
        const pet = new Pet('fido')

        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    it('increments the hunger by 5', () => {
        const pet = new Pet('fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    it('decreases the fitness by 3', () => {
        const pet = new Pet('fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('fido');

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases the hunger by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 9;
        pet.feed();

        expect(pet.hunger).toEqual(6);
    });

    it('make sure hunger does not go below minimum hunger', () => {
        const pet = new Pet('fido');

        pet.hunger = 1;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    })
})

describe('checkUp', () => {
    it('has a method called checkUp', () => {
        const pet = new Pet('fido');

        expect(pet.checkUp).toBeInstanceOf(Function);
    });

    it('returns I need a walk when fitness level is 3 or less', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;

        expect(pet.checkUp()).toEqual('I need a walk');
    });

    it('returns I am hungry when hunger level is 5 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;

        expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('returns I am hungry AND I need a walk if fitness is 3 or less and hunger is 5 or more', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        pet.hunger = 5;

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('returns I feel great if hunger level is less than 5 and fitness level is more than 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 4;
        pet.fitness = 4;

        expect(pet.checkUp()).toEqual('I feel great');
    });
})

describe('isAlive', () => {
    it('returns false if pet hunger is 10 or more, fitness 0 or less or age is 30 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 11;
        pet.fitness = 0;
        pet.age = 31;

        expect(pet.isAlive).toEqual(false);
    });
});
