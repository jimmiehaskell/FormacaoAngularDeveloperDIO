// Classes

/*
    * data modifiers
    * public | todo mundo pode usar ou ver
    * private | apenas a própria classe consegue utilizar
    * protected | a própria classe e suas subclasses
    * '?' após o nome da variável, significa que ela é opcional
*/
class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

// Character: superclass
// Magician: subclass
class Magician extends Character {
    magicPoints: number;

    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Klobo", 10, 98);
const p2 = new Magician("MGJohn", 20, 110, 200);

p1.attack();
p2.attack();