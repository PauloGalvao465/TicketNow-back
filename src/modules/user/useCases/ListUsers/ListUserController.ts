import { Response, Request } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listUserUseCase.execute();
    return response.json(all);
  }
}

export { ListUserController };
