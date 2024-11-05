import { Device } from './Device';

export class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
      console.log("Device turned off.");
    } else {
      this.device.enable();
      console.log("Device turned on.");
    }
  }

  volumeUp(): void {
    const newVolume = this.device.getVolume() + 10;
    this.device.setVolume(newVolume);
    console.log(`Volume increased to ${newVolume}`);
  }

  volumeDown(): void {
    const newVolume = this.device.getVolume() - 10;
    this.device.setVolume(newVolume);
    console.log(`Volume decreased to ${newVolume}`);
  }
}