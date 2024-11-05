import { RemoteControl } from './abstraction/RemoteControl';
import { TV } from './implementation/TV';
import { Radio } from './implementation/Radio';

const tv = new TV();
const radio = new Radio();

const tvRemote = new RemoteControl(tv);
const radioRemote = new RemoteControl(radio);

console.log("Testing TV Remote Control:");
tvRemote.togglePower();
tvRemote.volumeUp();
tvRemote.volumeDown();
tvRemote.togglePower();

console.log("\nTesting Radio Remote Control:");
radioRemote.togglePower();
radioRemote.volumeUp();
radioRemote.volumeDown();
radioRemote.togglePower();