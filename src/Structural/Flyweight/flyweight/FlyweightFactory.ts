import { Flyweight, ConcreteFlyweight } from "./Flyweight";

export class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    getFlyweight(key: string): Flyweight {
        if (!(key in this.flyweights)) {
            console.log(`FlyweightFactory: Creating new flyweight for key: ${key}`);
            this.flyweights[key] = new ConcreteFlyweight(key);
        } else {
            console.log(`FlyweightFactory: Reusing existing flyweight for key: ${key}`);
        }
        return this.flyweights[key];
    }

    listFlyweights(): void {
        console.log(`FlyweightFactory: I have ${Object.keys(this.flyweights).length} flyweights.`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}