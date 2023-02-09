import { request, response, Router } from "express";
import { UserRepository } from "../../modules/user/reposotories/implementations/UserRepository";
import createUserController from "../../modules/user/useCases/CreateUser";
import { CreateUserUseCase } from "../../modules/user/useCases/CreateUser/CreateUserUseCase";
import { listUserController } from "../../modules/user/useCases/ListUsers";
import multer from "multer";
import { importUserController } from "../../modules/user/useCases/ImportUser";
import { Users } from "../../modules/user/entities/users";

const userRouter = Router();

const upload = multer({
  dest: "./tmp",
});
userRouter.post("/", async (request, response) => {
  return createUserController().handle(request, response);
});

userRouter.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

userRouter.post("/import", upload.single("file"), (request, response) => {
  return importUserController.handle(request, response);
});
export { userRouter };
