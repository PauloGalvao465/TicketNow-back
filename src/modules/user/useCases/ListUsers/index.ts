import { UserRepository } from "../../reposotories/implementations/UserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const userRepository = UserRepository.getInstance();

const listUserUseCase = new ListUserUseCase(userRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserController };
