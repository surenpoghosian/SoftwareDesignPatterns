import AwsDatabase from "../services/database/AwsDatabase";
import Database from "../services/database/Database";
import AwsFileStorage from "../services/fileStorage/AwsFileStorage";
import FileStorage from "../services/fileStorage/FileStorage";
import CloudServiceFactory from "./CloudServiceFactory";

class AwsFactory implements CloudServiceFactory {
  createFileStorage(): FileStorage {
    return new AwsFileStorage();
  }

  createDatabase(): Database {
    return new AwsDatabase();
  }
}

export default AwsFactory;
