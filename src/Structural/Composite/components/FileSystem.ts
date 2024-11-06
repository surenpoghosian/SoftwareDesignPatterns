import { FileSystemComponent } from "./Composite";

export class File implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  add(component: FileSystemComponent): void {
    throw new Error("Cannot add to a file");
  }

  remove(component: FileSystemComponent): void {
    throw new Error("Cannot remove from a file");
  }

  display(indent: string = ""): void {
    console.log(`${indent}File: ${this.name} (${this.size} KB)`);
  }
}

export class Folder implements FileSystemComponent {
  private components: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.components.reduce((sum, component) => sum + component.getSize(), 0);
  }

  add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index >= 0) this.components.splice(index, 1);
  }

  display(indent: string = ""): void {
    console.log(`${indent}Folder: ${this.name} (${this.getSize()} KB)`);
    for (const component of this.components) {
      component.display(indent + "  ");
    }
  }
}