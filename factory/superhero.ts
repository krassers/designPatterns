export interface Superhero {
    name: string;
    health: number;
    heal(healValue: number): void;
    attack(attackValue: number): void;
}

export interface HeroOptions {
    name: string;
    health?: number;
}