import { Light } from "./receivers/Light";
import { LightOnCommand } from "./commands/LightOnCommand";
import { LightOffCommand } from "./commands/LightOffCommand";
import { RemoteControl } from "./invokers/RemoteControl";

const livingRoomLight = new Light();

const lightOnCommand = new LightOnCommand(livingRoomLight);
const lightOffCommand = new LightOffCommand(livingRoomLight);

const remoteControl = new RemoteControl();

console.log("Pressing ON button:");
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton();

console.log("\nPressing UNDO button:");
remoteControl.pressUndo();

console.log("\nPressing OFF button:");
remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton();

console.log("\nPressing UNDO button:");
remoteControl.pressUndo();