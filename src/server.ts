import express, { request, response } from "express";
import { userRouter } from "./router/user.router";
const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(3333, () => console.log("Servidor Ativo"));
