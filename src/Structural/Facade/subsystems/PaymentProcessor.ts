export class PaymentProcessor {
  public processPayment(amount: number): boolean {
      console.log(`Processing payment of $${amount}`);
      // simulate payment processing
      return true;
  }
}