import FileStorage from "./FileStorage";

class GcsFileStorage implements FileStorage {
  uploadFile(fileName: string): void {
    console.log(`Uploading ${fileName} to Google Cloud Storage`);
  }

  downloadFile(fileName: string): void {
    console.log(`Downloading ${fileName} from Google Cloud Storage`);
  }
}

export default GcsFileStorage;
