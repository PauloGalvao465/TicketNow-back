import { ICompanyRepository } from "../reposotories/companys/ICompanyRepository";

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
class CreateCompanyService {
  constructor(private CompanyRepository: ICompanyRepository) {}
  execute({ name, cnpj, description, email }: IRequest): void {
    const CompanyAlreadyExists = this.CompanyRepository.findByCnpj(cnpj);
    if (CompanyAlreadyExists) {
      throw new Error("cnpj Já existe!!");
    }

    this.CompanyRepository.create({ name, cnpj, description, email });
  }
}

export { CreateCompanyService };
