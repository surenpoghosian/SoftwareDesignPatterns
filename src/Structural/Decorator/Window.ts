import { Window } from './types';

export class SimpleWindow implements Window {
    draw(): void {
        console.log("Drawing a simple window");
    }

    getDescription(): string {
        return "Simple Window";
    }
}