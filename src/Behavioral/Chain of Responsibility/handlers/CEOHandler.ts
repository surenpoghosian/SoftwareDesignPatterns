import { AbstractHandler } from "./AbstractHandler";

export class CEOHandler extends AbstractHandler {
  public handle(request: number): string | null {
    return `CEO: I can approve $${request}`;
  }
}