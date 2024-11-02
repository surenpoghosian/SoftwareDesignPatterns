export class Car {
  make?: string;
  model?: string;
  year?: number;
  color?: string;
  engineType?: string;

  constructor(
    make?: string,
    model?: string,
    year?: number,
    color?: string,
    engineType?: string
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engineType = engineType;
  }

  public display(): void {
    console.log(`Car details: ${this.make} ${this.model} (${this.year}), Color: ${this.color}, Engine: ${this.engineType}`);
  }
}