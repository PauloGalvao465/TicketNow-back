import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, cpf, category, email } = request.body;

    this.createUserUseCase.execute({ name, cpf, category, email });
    return response.status(201).send();
  }
}
export { CreateUserController };
