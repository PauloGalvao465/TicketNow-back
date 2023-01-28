import express, { request, response } from "express";
import { companyRouter } from "./router/users/company.router";
import { userRouter } from "./router/users/user.router";
const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.use("/company", companyRouter);

app.listen(3333, () => console.log("Servidor Ativo"));
