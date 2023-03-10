import { UserRepository } from "../../reposotories/implementations/UserRepository";
import { ImportUserController } from "./ImportUserController";
import { ImportUserUseCase } from "./ImportUserUseCase";

const userRepository = null;

const importUserUseCase = new ImportUserUseCase(userRepository);

const importUserController = new ImportUserController(importUserUseCase);

export { importUserController };
