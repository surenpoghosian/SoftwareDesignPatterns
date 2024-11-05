import { Device } from '../abstraction/Device';

export class Radio implements Device {
    private enabled: boolean = false;
    private volume: number = 30;

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