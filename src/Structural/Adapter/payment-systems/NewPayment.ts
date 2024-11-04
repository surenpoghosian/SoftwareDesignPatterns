export class NewPayment {
  executeTransaction(amount: number): void {
    console.log(`NewPayment: Executed transaction of ${amount}`);
  }
}