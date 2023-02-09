import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, category, email, coupon } = request.body;

    this.createUserUseCase.execute({ name, cpf, category, email });
    return response.status(201).send();
  }
}
export { CreateUserController };
