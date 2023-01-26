import { request, response, Router } from "express";
import { CreateUserService } from "../../target/createUserService";

import { PostgresUserRepository } from "../reposotories/PostgresUserRepository";

import { UserRepository } from "../reposotories/userRepository";

const userRouter = Router();
const userRepository = new PostgresUserRepository();

userRouter.post("/", (request, response) => {
  const { name, cpf, category, imail } = request.body;

  const createUserService = new CreateUserService(userRepository);

  createUserService.execute({ name, cpf, category, imail });
  return response.status(201).send();
});

userRouter.get("/", (request, response) => {
  const all = userRepository.list();
  return response.json(all);
});

export { userRouter };
