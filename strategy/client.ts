import { RubberDuck } from './duck'
import { FlyWithWings } from './fly-strategies';

// The newly created rubber duck does everything we would expect from a rubber duck
const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performFly();
rubberDuck.performQuack();

/**
 * The setter allows the client to swap out the algorithm for a different one
 */
rubberDuck.setFlyBehavior(new FlyWithWings());
// rubberDuck.setQuackBehavior(new Quack());
rubberDuck.performFly();
// rubberDuck.performQuack();