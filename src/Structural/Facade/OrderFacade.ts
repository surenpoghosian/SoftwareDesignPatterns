import { PaymentProcessor } from './subsystems/PaymentProcessor';
import { Inventory } from './subsystems/Inventory';
import { Shipping } from './subsystems/Shipping';

export class OrderFacade {
    private paymentProcessor: PaymentProcessor;
    private inventory: Inventory;
    private shipping: Shipping;

    constructor() {
        this.paymentProcessor = new PaymentProcessor();
        this.inventory = new Inventory();
        this.shipping = new Shipping();
    }

    public placeOrder(productId: string, amount: number, quantity: number): void {
        console.log("Starting order process...");

        if (!this.inventory.checkInventory(productId)) {
            console.log("Product is out of stock.");
            return;
        }

        if (!this.paymentProcessor.processPayment(amount)) {
            console.log("Payment failed.");
            return;
        }

        this.inventory.reduceInventory(productId, quantity);
        this.shipping.shipOrder(productId);

        console.log("Order placed successfully.");
    }
}