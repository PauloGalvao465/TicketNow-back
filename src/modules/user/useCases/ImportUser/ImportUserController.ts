import { Response, Request } from "express";
import { ImportUserUseCase } from "./ImportUserUseCase";

class ImportUserController {
  constructor(private importUserUseCase: ImportUserUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importUserUseCase.execute(file);
    return response.send();
  }
}

export { ImportUserController };
