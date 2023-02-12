import { Router } from "express";
import createUserController from "../../modules/user/useCases/CreateUser";
import { listUserController } from "../../modules/user/useCases/ListUsers";
import multer from "multer";
import { importUserController } from "../../modules/user/useCases/ImportUser";

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
