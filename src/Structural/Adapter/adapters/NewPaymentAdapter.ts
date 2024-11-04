import { PaymentProcessor } from "../interfaces/PaymentProcessor";
import { NewPayment } from "../payment-systems/NewPayment";

export class NewPaymentAdapter implements PaymentProcessor {
  private newPayment: NewPayment;

  constructor(newPayment: NewPayment) {
    this.newPayment = newPayment;
  }

  processPayment(amount: number): void {
    this.newPayment.executeTransaction(amount);
  }
}