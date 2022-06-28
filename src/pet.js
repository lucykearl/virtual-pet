const minFitness = 0;
const maxFitness = 10;
const minHunger = 0;
const maxHunger = 10;
const hungerBreakPoint = 5;
const fitnessBreakPoint = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
};

Pet.prototype.feed = function() {
    this.hunger -= 3;
    if (this.hunger < minHunger){
        this.hunger = minHunger;
    }

Pet.prototype.checkUp = function() {
    if (this.fitness <= fitnessBreakPoint){
        return 'I need a walk';
    }

    if (this.hunger >= hungerBreakPoint){
        return 'I am hungry';
    }

    if (this.fitness <= fitnessBreakPoint && this.hunger >= hungerBreakPoint){
        return 'I am hungry AND I need a walk';
    }

    else {
        return 'I feel great';
    }
};
}


    module.exports = Pet;
