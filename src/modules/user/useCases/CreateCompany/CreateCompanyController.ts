import { Response, Request } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, cnpj, description, email } = request.body;

    this.createCompanyUseCase.execute({ name, cnpj, description, email });
    return response.status(201).send();
  }
}
export { CreateCompanyController };
