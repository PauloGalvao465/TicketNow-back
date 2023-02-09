import { IUserRepository } from "../../reposotories/IUserRepository";

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
class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute({ name, cpf, category, email }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByCpf(cpf);
    if (userAlreadyExists) {
      throw new Error("Cpf Já existe!!");
    }

    var coupon = "11";
    this.userRepository.create({ name, cpf, category, email, coupon });
  }
}

export { CreateUserUseCase };
