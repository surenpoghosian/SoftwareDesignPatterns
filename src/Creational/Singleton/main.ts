import { Logger } from "./Logger";

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("This is the first log message.");
logger2.log("This is the second log message.");

if (logger1 === logger2) {
  console.log("Logger works as a Singleton. Both instances are the same.");
} else {
  console.log("Logger failed as a Singleton. Instances are different.");
}