export class Light {
  private isOn: boolean = false;

  public turnOn(): void {
      this.isOn = true;
      console.log("Light is ON");
  }

  public turnOff(): void {
      this.isOn = false;
      console.log("Light is OFF");
  }
}