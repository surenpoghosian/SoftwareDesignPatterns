import { AbstractHandler } from "./AbstractHandler";

export class DirectorHandler extends AbstractHandler {
  public handle(request: number): string | null {
    if (request <= 50000) {
      return `Director: I can approve $${request}`;
    }
    return super.handle(request);
  }
}