import { HeroOptions, Superhero } from "./superhero";
import { Hero } from "./hero";
import { Villain } from "./villain";

export abstract class HeroFactory {
    public abstract createHero(type: 'hero' | 'villain', heroOptions: HeroOptions): Superhero;


    introduceHero(type: 'hero', heroOptions: HeroOptions): Hero;
    introduceHero(type: 'villain', heroOptions: HeroOptions): Villain;
    /**
     * Jeder Superhero wird bei der Erstellung vorgestellt.
     * Ob ein Hero oder ein Villain erstellt wird, hängt vom Typ ab.
     */
    public introduceHero(type: 'hero' | 'villain', heroOptions: HeroOptions): Superhero {
        const hero = this.createHero(type, heroOptions);
        console.log(`My name is ${heroOptions.name} and I am a ${type}`);

        return hero;
    }
}