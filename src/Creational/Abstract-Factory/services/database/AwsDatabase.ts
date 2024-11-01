import Database from "./Database";

class AwsDatabase implements Database {
  insertData(data: object): void {
    console.log(`Inserting data into AWS DynamoDB: ${JSON.stringify(data)}`);
  }

  fetchData(query: string): object {
    console.log(`Fetching data from AWS DynamoDB with query: ${query}`);
    return {}; // Mocked return
  }
}

export default AwsDatabase;
