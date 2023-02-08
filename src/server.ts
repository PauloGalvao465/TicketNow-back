import express, { request, response } from "express";
import { router } from "./router";
import { companyRouter } from "./router/users/company.router";
import { userRouter } from "./router/users/user.router";
import "./database";
const app = express();
// async () => {
//   const db = require("./database/db.js");
//   const Produto = require("./database/produto");
//   await db.sync();
// };
// console.log("foi");
// app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Servidor Ativo"));
