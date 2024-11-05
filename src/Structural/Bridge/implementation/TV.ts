import { Device } from '../abstraction/Device';

export class TV implements Device {
    private enabled: boolean = false;
    private volume: number = 20;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(value: number): void {
        this.volume = value;
    }
}