import { request, response, Router } from "express";
import { UserRepository } from "../../modules/user/reposotories/users/UserRepository";
import { CreateUserService } from "../../modules/user/services/CreateUserService";

const userRouter = Router();
const userRepository = new UserRepository();

userRouter.post("/", (request, response) => {
  const { name, cpf, category, email } = request.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({ name, cpf, category, email });
  return response.status(201).send();
});

userRouter.get("/", (request, response) => {
  const all = userRepository.list();
  return response.json(all);
});

export { userRouter };
