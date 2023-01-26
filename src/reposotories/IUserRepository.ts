import { Users } from "../model/users";

interface ICreateUserDTO {
  name: string;
  cpf: string;
  category: string;
  imail: string;
}

interface IUserRepository {
  findByCpf(cpf: string): Users;
  list(): Users[];
  create({ name, cpf, category, imail }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };
