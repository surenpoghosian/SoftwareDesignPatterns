import { Window } from '../types';

export class BorderDecorator implements Window {
    constructor(private window: Window) {}

    draw(): void {
        this.window.draw();
        this.drawBorder();
    }

    getDescription(): string {
        return `${this.window.getDescription()}, with Border`;
    }

    private drawBorder(): void {
        console.log("Adding a border to the window");
    }
}