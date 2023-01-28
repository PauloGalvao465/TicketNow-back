import { ICompanyRepository } from "../../reposotories/ICompanyRepository";

interface IRequest {
  name: string;
  cnpj: string;
  description: string;
  email: string;
}
/**
 * Definir tipo de retorno
 * alterar o retorno do erro
 * acessar o repositorio
 * retornar algo
 */
class CreateCompanyUseCase {
  constructor(private companyRepository: ICompanyRepository) {}
  execute({ name, cnpj, description, email }: IRequest): void {
    const companyAlreadyExists = this.companyRepository.findByCnpj(cnpj);
    if (companyAlreadyExists) {
      throw new Error("cnpj Já existe!!");
    }

    this.companyRepository.create({ name, cnpj, description, email });
  }
}

export { CreateCompanyUseCase };
