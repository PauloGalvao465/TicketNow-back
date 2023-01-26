import { Router } from "express";

const userRouter = Router();

const user = [];

userRouter.post("/User", (request, response) => {
  const { id, name, date, cpf, category, imail } = request.body;

  user.push({
    id,
    name,
    date,
    cpf,
    category,
    imail,
  });

  return response.status(201).send;
});

export { userRouter };
