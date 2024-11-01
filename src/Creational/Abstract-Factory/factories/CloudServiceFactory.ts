import Database from "../services/database/Database";
import FileStorage from "../services/fileStorage/FileStorage";

interface CloudServiceFactory {
  createFileStorage(): FileStorage;
  createDatabase(): Database;
}

export default CloudServiceFactory;