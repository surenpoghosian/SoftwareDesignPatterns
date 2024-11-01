import Database from "./Database";

class GcsDatabase implements Database {
  insertData(data: object): void {
    console.log(`Inserting data into Google Firestore: ${JSON.stringify(data)}`);
  }

  fetchData(query: string): object {
    console.log(`Fetching data from Google Firestore with query: ${query}`);
    return {}; // Mocked return
  }
}

export default GcsDatabase;
