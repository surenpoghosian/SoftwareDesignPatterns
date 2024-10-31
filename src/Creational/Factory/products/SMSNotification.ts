import Notification from "./Notification";

class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}

export default SMSNotification;