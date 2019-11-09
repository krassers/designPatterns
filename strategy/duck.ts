import { QuackBehavior, Squeak, Quack } from "./quack-strategies";
import { FlyBehavior, NoFly } from "./fly-strategies";

export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    public setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.squeak();
    }
}

export class RubberDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new NoFly();
        this.quackBehavior = new Squeak();
    }

    public display(): void {
        console.log('I am a rubber duck');
    }
}