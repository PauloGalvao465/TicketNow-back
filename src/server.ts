import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "TICKETNOW-BACK" });
});

app.listen(3333);

interface Cursos {
  name: string;
  duracao?: number; // ? adiciona como opcional
}
