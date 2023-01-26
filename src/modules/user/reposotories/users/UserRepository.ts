import { Users } from "../../model/users";
import { ICreateUserDTO, IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private users: Users[];

  constructor() {
    this.users = [];
  }

  create({ name, cpf, category, email }: ICreateUserDTO): void {
    const user: Users = new Users();

    Object.assign(user, {
      name,
      cpf,
      category,
      email,
      date: new Date(),
    });

    this.users.push(user);
  }
  list(): Users[] {
    return this.users;
  }

  findByCpf(cpf: string): Users {
    const user = this.users.find((user) => user.cpf == cpf);
    return user;
  }
}

export { UserRepository };
