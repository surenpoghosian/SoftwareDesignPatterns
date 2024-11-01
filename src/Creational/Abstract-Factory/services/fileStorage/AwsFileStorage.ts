import FileStorage from "./FileStorage";

class AwsFileStorage implements FileStorage {
  uploadFile(fileName: string): void {
    console.log(`Uploading ${fileName} to AWS S3`);
  }
  
  downloadFile(fileName: string): void {
    console.log(`Downloading ${fileName} from AWS S3`);
  }
}

export default AwsFileStorage;
