export interface QuackBehavior {
    squeak(): void;
}

export class Quack implements QuackBehavior {
    public squeak() {
        console.log('Quack Quack');
    }
}

export class Squeak implements QuackBehavior {
    public squeak() {
        console.log('Squeak');
    }
}

export class MuteQuack implements QuackBehavior {
    public squeak() {
        console.log('...');
    }
}