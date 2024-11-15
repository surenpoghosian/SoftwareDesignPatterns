import { ManagerHandler } from "./handlers/ManagerHandler";
import { DirectorHandler } from "./handlers/DirectorHandler";
import { CEOHandler } from "./handlers/CEOHandler";

const manager = new ManagerHandler();
const director = new DirectorHandler();
const ceo = new CEOHandler();

manager.setNext(director).setNext(ceo);

const requests = [5000, 20000, 75000];

requests.forEach((amount) => {
  console.log(`Requesting approval for $${amount}:`);
  const result = manager.handle(amount);
  console.log(result ?? "No handler could handle the request.");
  console.log("----------");
});