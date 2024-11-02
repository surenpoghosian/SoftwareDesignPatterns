import { Car } from "../models/Car";

export class CarBuilder {
  private make?: string;
  private model?: string;
  private year?: number;
  private color?: string;
  private engineType?: string;

  public setMake(make: string): CarBuilder {
    this.make = make;
    return this;
  }

  public setModel(model: string): CarBuilder {
    this.model = model;
    return this;
  }

  public setYear(year: number): CarBuilder {
    this.year = year;
    return this;
  }

  public setColor(color: string): CarBuilder {
    this.color = color;
    return this;
  }

  public setEngineType(engineType: string): CarBuilder {
    this.engineType = engineType;
    return this;
  }

  public build(): Car {
    return new Car(this.make, this.model, this.year, this.color, this.engineType);
  }
}