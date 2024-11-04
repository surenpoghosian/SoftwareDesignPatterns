import { PaymentProcessor } from "../interfaces/PaymentProcessor";

export class PaymentService {
  private paymentProcessor: PaymentProcessor;

  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  process(amount: number): void {
    this.paymentProcessor.processPayment(amount);
  }
}