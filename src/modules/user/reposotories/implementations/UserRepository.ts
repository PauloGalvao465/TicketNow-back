import { getRepository, Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { Users } from "../../entities/users";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<Users>;

  public constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  /**
   * getInstance
   */

  async create({
    name,
    cpf,
    category,
    email,
    coupon,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      category,
      name,
      email,
      cpf,
      coupon,
    });
    await this.repository.save(user);
    // this.users.push(user);
  }
  async list(): Promise<Users[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByCpf(cpf: string): Promise<Users> {
    // const user = await this.repository.findOne({cpf});
    return null;
  }
}

export { UserRepository };
