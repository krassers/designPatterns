export interface FlyBehavior {
    fly(): void;
}

export class FlyWithWings implements FlyBehavior {
    public fly() {
        console.log('This duck flies with wings');
    }
}

export class NoFly implements FlyBehavior {
    public fly() {
        console.log('This duck does not fly at all');
    }
}