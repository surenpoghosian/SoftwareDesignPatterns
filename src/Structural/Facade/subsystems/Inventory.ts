export class Inventory {
  public checkInventory(productId: string): boolean {
      console.log(`Checking inventory for product ID: ${productId}`);
      // simulate inventory check
      return true;
  }

  public reduceInventory(productId: string, quantity: number): void {
      console.log(`Reducing inventory for product ID: ${productId} by ${quantity}`);
      // simulate reducing inventory
  }
}