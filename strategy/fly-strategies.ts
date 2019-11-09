// Interface für alle Flugstrategien
export interface FlyBehavior {
    fly(): void;
}

// Konkrete Strategie
export class FlyWithWings implements FlyBehavior {
    public fly() {
        console.log('This duck flies with wings');
    }
}

// Konkrete Strategie
export class NoFly implements FlyBehavior {
    public fly() {
        console.log('This duck does not fly at all');
    }
}