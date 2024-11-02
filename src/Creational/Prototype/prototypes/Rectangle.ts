import { Shape } from "./Shape";

export class Rectangle implements Shape {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;

  constructor(x: number, y: number, color: string, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  clone(): Rectangle {
    return new Rectangle(this.x, this.y, this.color, this.width, this.height);
  }
}