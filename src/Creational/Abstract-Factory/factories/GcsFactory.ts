import Database from "../services/database/Database";
import GcsDatabase from "../services/database/GcsDatabase";
import FileStorage from "../services/fileStorage/FileStorage";
import GcsFileStorage from "../services/fileStorage/GcsFileStorage";
import CloudServiceFactory from "./CloudServiceFactory";

class GcsFactory implements CloudServiceFactory {
  createFileStorage(): FileStorage {
    return new GcsFileStorage();
  }

  createDatabase(): Database {
    return new GcsDatabase();
  }
}

export default GcsFactory;
