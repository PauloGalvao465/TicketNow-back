import { IUserRepository } from "../reposotories/users/IUserRepository";

interface IRequest {
  name: string;
  cpf: string;
  category: string;
  email: string;
}
/**
 * Definir tipo de retorno
 * alterar o retorno do erro
 * acessar o repositorio
 * retornar algo
 */
class CreateUserService {
  constructor(private userRepository: IUserRepository) {}
  execute({ name, cpf, category, email }: IRequest): void {
    const userAlreadyExists = this.userRepository.findByCpf(cpf);
    if (userAlreadyExists) {
      throw new Error("Cpf Já existe!!");
    }

    this.userRepository.create({ name, cpf, category, email });
  }
}

export { CreateUserService };
