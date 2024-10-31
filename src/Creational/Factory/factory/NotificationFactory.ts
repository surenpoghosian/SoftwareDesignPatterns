import Notification from "../products/Notification";
import SMSNotification from "../products/SMSNotification";
import PushNotification from "../products/PushNotification";
import EmailNotification from "../products/EmailNotification";

export enum NotificationType {
  EMAIL = "email",
  SMS = "sms",
  PUSH = "push",
}

class NotificationFactory {
  static createNotification(type: NotificationType): Notification {
    switch (type) {
      case NotificationType.EMAIL:
        return new EmailNotification();
        case NotificationType.SMS:
          return new SMSNotification();
          case NotificationType.PUSH:
            return new PushNotification();
            default:
              throw new Error("Invalid notification type");
            }
          }
        }

export default NotificationFactory;