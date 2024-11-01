interface FileStorage {
  uploadFile(fileName: string): void;
  downloadFile(fileName: string): void;
}

export default FileStorage;
