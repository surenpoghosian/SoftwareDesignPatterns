import { PaymentProcessor } from "../interfaces/PaymentProcessor";
import { OldPayment } from "../payment-systems/OldPayment";

export class OldPaymentAdapter implements PaymentProcessor {
  private oldPayment: OldPayment;

  constructor(oldPayment: OldPayment) {
    this.oldPayment = oldPayment;
  }

  processPayment(amount: number): void {
    this.oldPayment.makePayment(amount);
  }
}