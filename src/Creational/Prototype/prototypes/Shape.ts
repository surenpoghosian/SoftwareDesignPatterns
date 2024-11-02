export interface Shape {
  x: number;
  y: number;
  color: string;

  clone(): Shape;
}