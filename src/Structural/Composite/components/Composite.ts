export interface FileSystemComponent {
  getName(): string;
  getSize(): number;
  add(component: FileSystemComponent): void;
  remove(component: FileSystemComponent): void;
  display(indent: string): void;
}