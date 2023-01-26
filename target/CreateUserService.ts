import { IUserRepository } from "../src/reposotories/IUserRepository";
import { UserRepository } from "../src/reposotories/userRepository";

interface IRequest {
  name: string;
  cpf: string;
  category: string;
  imail: string;
}
/**
 * Definir tipo de retorno
 * alterar o retorno do erro
 * acessar o repositorio
 * retornar algo
 */
class CreateUserService {
  constructor(private userRepository: IUserRepository) {}
  execute({ name, cpf, category, imail }: IRequest): void {
    const userAlreadyExists = this.userRepository.findByCpf(cpf);
    if (userAlreadyExists) {
      throw new Error("Cpf Já existe!!");
    }

    this.userRepository.create({ name, cpf, category, imail });
  }
}

export { CreateUserService };
