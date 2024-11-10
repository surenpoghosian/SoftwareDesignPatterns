import { Window } from '../types';

export class ScrollDecorator implements Window {
    constructor(private window: Window) {}

    draw(): void {
        this.window.draw();
        this.addScroll();
    }

    getDescription(): string {
        return `${this.window.getDescription()}, with Scroll`;
    }

    private addScroll(): void {
        console.log("Adding scroll functionality to the window");
    }
}