import { QuackBehavior, Squeak, Quack } from "./quack-strategies";
import { FlyBehavior, NoFly } from "./fly-strategies";

export abstract class Duck {
    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    public abstract display(): void;

    // Setter, um Flugstrategie festzulegen
    public setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    // Methode, welche die festgelegte Strategie aufruft
    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.squeak();
    }
}

export class RubberDuck extends Duck {
    // Im constructor wird standardmäßig die Strategie "NoFly" festgelegt
    constructor() {
        super();
        this.flyBehavior = new NoFly();
        this.quackBehavior = new Squeak();
    }

    public display(): void {
        console.log('I am a rubber duck');
    }
}