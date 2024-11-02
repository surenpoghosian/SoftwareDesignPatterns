import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export class PrototypeRegistry {
    private prototypes: { [key: string]: Shape } = {};

    addPrototype(key: string, prototype: Shape): void {
        this.prototypes[key] = prototype;
    }

    getPrototype(key: string): Shape | null {
        const prototype = this.prototypes[key];
        return prototype ? prototype.clone() : null;
    }
}