import { Users } from "../model/users";
import { ICreateUserDTO, IUserRepository } from "./IUserRepository";

class PostgresUserRepository implements IUserRepository {
  findByCpf(cpf: string): Users {
    console.log(cpf);
    return null;
  }
  list(): Users[] {
    return null;
  }
  create({ name, cpf, category, imail }: ICreateUserDTO): void {}
}

export { PostgresUserRepository };
