import { AbstractHandler } from "./AbstractHandler";

export class ManagerHandler extends AbstractHandler {
  public handle(request: number): string | null {
    if (request <= 10000) {
      return `Manager: I can approve $${request}`;
    }
    return super.handle(request);
  }
}