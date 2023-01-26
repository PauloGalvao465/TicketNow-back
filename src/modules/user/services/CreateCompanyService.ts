import { ICompanyRepository } from "../src/reposotories/ICompanyRepository";
import { CompanyRepository } from "../src/reposotories/CompanyRepository";

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
class CreateCompanyService {
  constructor(private CompanyRepository: ICompanyRepository) {}
  execute({ name, cpf, category, email }: IRequest): void {
    const CompanyAlreadyExists = this.CompanyRepository.findByCpf(cpf);
    if (CompanyAlreadyExists) {
      throw new Error("Cpf Já existe!!");
    }

    this.CompanyRepository.create({ name, cpf, category, email });
  }
}

export { CreateCompanyService };
