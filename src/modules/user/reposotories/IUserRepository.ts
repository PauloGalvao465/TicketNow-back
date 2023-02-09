import { Users } from "../entities/users";

interface ICreateUserDTO {
  name: string;
  cpf: string;
  category: string;
  email: string;
  coupon: string;
}

interface IUserRepository {
  findByCpf(cpf: string): Promise<Users>;
  list(): Promise<Users[]>;
  create({ name, cpf, category, email, coupon }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
