import { Circle } from "./prototypes/Circle";
import { Rectangle } from "./prototypes/Rectangle";
import { PrototypeRegistry } from "./prototypes/PrototypeRegistry";

const registry = new PrototypeRegistry();

const circlePrototype = new Circle(10, 10, "red", 15);
const rectanglePrototype = new Rectangle(5, 5, "blue", 20, 30);

registry.addPrototype("smallCircle", circlePrototype);
registry.addPrototype("largeRectangle", rectanglePrototype);

const clonedCircle = registry.getPrototype("smallCircle");
const clonedRectangle = registry.getPrototype("largeRectangle");

console.log(clonedCircle);
console.log(clonedRectangle);