import express, { request, response } from "express";
import { router } from "./router";
import { companyRouter } from "./router/users/company.router";
import { userRouter } from "./router/users/user.router";

import "./database";
const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Servidor Ativo"));
