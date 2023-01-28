import { request, response, Router } from "express";
import { UserRepository } from "../../modules/user/reposotories/implementations/UserRepository";
import { createUserController } from "../../modules/user/useCases/CreateUser";
import { CreateUserUseCase } from "../../modules/user/useCases/CreateUser/CreateUserUseCase";
import { listUserController } from "../../modules/user/useCases/ListUsers";

const userRouter = Router();

userRouter.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

userRouter.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

export { userRouter };
