import { Superhero } from "./superhero";

export class Hero implements Superhero {
    name: string;
    health: number;

    constructor(name: string, health: number = 100) {
        this.name = name;
        this.health = health;
    }

    heal(healValue: number) { }

    attack(attackValue: number) { }
}