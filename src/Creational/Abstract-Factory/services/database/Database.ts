interface Database {
  insertData(data: object): void;
  fetchData(query: string): object;
}

export default Database;
