export interface Flyweight {
  operation(extrinsicState: string): void;
}

export class ConcreteFlyweight implements Flyweight {
  private intrinsicState: string;

  constructor(intrinsicState: string) {
      this.intrinsicState = intrinsicState;
  }

  operation(extrinsicState: string): void {
      console.log(
          `ConcreteFlyweight: Intrinsic = ${this.intrinsicState}, Extrinsic = ${extrinsicState}`
      );
  }
}