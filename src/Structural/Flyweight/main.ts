import { FlyweightFactory } from "./flyweight/FlyweightFactory";

const factory = new FlyweightFactory();

function addCar(factory: FlyweightFactory, color: string, owner: string) {
    console.log(`\nClient: Adding car - Color: ${color}, Owner: ${owner}`);
    const flyweight = factory.getFlyweight(color);
    flyweight.operation(owner);
}

addCar(factory, "Red", "Alice");
addCar(factory, "Blue", "Bob");
addCar(factory, "Red", "Charlie");
addCar(factory, "Blue", "Diana");

console.log("\nCurrent flyweights in the factory:");
factory.listFlyweights();