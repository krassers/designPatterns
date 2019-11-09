import { ConcreteHeroFactory } from "./concrete-hero-factory";

// HeroFactory erstellen
const heroFactory = new ConcreteHeroFactory();

/**
 * Die HeroFactory erstellt ein Objekt der Klasse Hero oder Villain basierend auf dem Typ
 */
const spiderman = heroFactory.introduceHero('hero', { name: 'Peter' });
const thor = heroFactory.introduceHero('hero', { name: 'Thor', health: 200 });
const joker = heroFactory.introduceHero('villain', { name: 'Joker', health: 80 });

// Die Helden können jetzt vom Client verwendet werden
// spiderman.rampage() -- nicht möglich
joker.rampage();