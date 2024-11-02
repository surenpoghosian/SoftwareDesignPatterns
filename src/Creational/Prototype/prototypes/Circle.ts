import { Shape } from "./Shape";

export class Circle implements Shape {
    x: number;
    y: number;
    color: string;
    radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
    }

    clone(): Circle {
        return new Circle(this.x, this.y, this.color, this.radius);
    }
}