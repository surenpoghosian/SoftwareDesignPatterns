
import { File } from "./components/FileSystem";
import { Folder } from "./components/FileSystem";

const root = new Folder("root");
const file1 = new File("file1.txt", 10);
const file2 = new File("file2.txt", 20);

const folder1 = new Folder("folder1");
const file3 = new File("file3.txt", 30);
const file4 = new File("file4.txt", 40);

folder1.add(file3);
folder1.add(file4);

root.add(file1);
root.add(file2);
root.add(folder1);

root.display();