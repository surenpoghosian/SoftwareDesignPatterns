import { Command } from "../commands/Command";

export class RemoteControl {
    private commandSlot: Command | null = null;

    public setCommand(command: Command): void {
        this.commandSlot = command;
    }

    public pressButton(): void {
        if (this.commandSlot) {
            this.commandSlot.execute();
        } else {
            console.log("No command assigned to this button.");
        }
    }

    public pressUndo(): void {
        if (this.commandSlot) {
            this.commandSlot.undo();
        } else {
            console.log("No command assigned to undo.");
        }
    }
}