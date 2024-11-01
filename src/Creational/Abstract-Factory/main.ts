import AwsFactory from "./factories/AwsFactory";
import CloudServiceFactory from "./factories/CloudServiceFactory";
import GcsFactory from "./factories/GcsFactory";

function useCloudServices(factory: CloudServiceFactory): void {
  const fileStorage = factory.createFileStorage();
  const database = factory.createDatabase();

  fileStorage.uploadFile("example.txt");
  database.insertData({ key: "value" });
}


const awsFactory = new AwsFactory();
useCloudServices(awsFactory);

const gcsFactory = new GcsFactory();
useCloudServices(gcsFactory);