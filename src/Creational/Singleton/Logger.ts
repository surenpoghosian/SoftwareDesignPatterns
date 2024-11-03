import fs from "fs";
import path from "path";

export class Logger {
  private static instance: Logger;
  private logFilePath: string;

  private constructor() {
    this.logFilePath = path.resolve(__dirname, "app.log");
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `${timestamp} - ${message}\n`;

    fs.appendFileSync(this.logFilePath, formattedMessage, "utf8");
    console.log("Logged:", message);
  }
}