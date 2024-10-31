import Notification from "./Notification";

class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export default EmailNotification;