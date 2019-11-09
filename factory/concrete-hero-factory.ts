import { Hero } from "./hero";
import { Villain } from "./villain";
import { HeroOptions } from "./superhero";
import { HeroFactory } from "./hero-factory";

export class ConcreteHeroFactory extends HeroFactory {

    createHero(type: 'hero', heroOptions: HeroOptions): Hero;
    createHero(type: 'villain', heroOptions: HeroOptions): Villain;

    // createHero() == factoryMethod()
    public createHero(type: 'hero' | 'villain', heroOptions: HeroOptions): Hero | Villain {
        if (type === 'hero') {
            return new Hero(heroOptions.name, heroOptions.health);
        }
        else if (type === 'villain') {
            return new Villain(heroOptions.name, heroOptions.health);
        }
    }
}