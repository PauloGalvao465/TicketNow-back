import { Response, Request } from "express";
import { ListCompanyUseCase } from "./ListCompanyUseCase";

class ListCompanyController {
  constructor(private listCompanyUseCase: ListCompanyUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCompanyUseCase.execute();
    return response.json(all);
  }
}

export { ListCompanyController };
