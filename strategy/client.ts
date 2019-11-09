import { RubberDuck } from './duck'
import { FlyWithWings } from './fly-strategies';

// Die neu erstellte Gummiente, macht genau dass, was wir erwarten würden
const rubberDuck = new RubberDuck();
rubberDuck.display();
rubberDuck.performFly();
rubberDuck.performQuack();

/**
 * Die Setter-Methode ermöglicht es, den Algorithmus einfach auszutauschen
 */
rubberDuck.setFlyBehavior(new FlyWithWings());
rubberDuck.performFly();
// rubberDuck.setQuackBehavior(new Quack());
// rubberDuck.performQuack();