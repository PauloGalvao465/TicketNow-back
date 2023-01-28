import { Users } from "../model/users";

interface ICreateUserDTO {
  name: string;
  cpf: string;
  category: string;
  email: string;
}

interface IUserRepository {
  findByCpf(cpf: string): Users;
  list(): Users[];
  create({ name, cpf, category, email }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };
