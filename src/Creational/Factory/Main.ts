import NotificationFactory, { NotificationType } from "./factory/NotificationFactory";

const emailNotification = NotificationFactory.createNotification(NotificationType.EMAIL);
emailNotification.send("Hello via Email!");

const smsNotification = NotificationFactory.createNotification(NotificationType.SMS);
smsNotification.send("Hello via SMS!");

const pushNotification = NotificationFactory.createNotification(NotificationType.PUSH);
pushNotification.send("Hello via Push Notification!");