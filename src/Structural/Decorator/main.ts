import { SimpleWindow } from './Window';
import { BorderDecorator } from './decorators/BorderDecorator';
import { ScrollDecorator } from './decorators/ScrollDecorator';

let window = new SimpleWindow();
console.log(window.getDescription());
window.draw();

window = new ScrollDecorator(window);
console.log(window.getDescription());
window.draw();

window = new BorderDecorator(window);
console.log(window.getDescription());
window.draw();