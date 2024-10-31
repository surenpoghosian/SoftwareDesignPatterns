import Notification from "./Notification";

class PushNotification implements Notification {
  send(message: string): void {
    console.log(`Sending push notification with message: ${message}`);
  }
}

export default PushNotification;