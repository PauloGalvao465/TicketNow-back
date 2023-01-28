import { ICompanyRepository } from "../../reposotories/ICompanyRepository";
import { Companys } from "../../model/companys";
class ListCompanyUseCase {
  constructor(private CompanyRepository: ICompanyRepository) {}
  execute(): Companys[] {
    const Companys = this.CompanyRepository.list();

    return Companys;
  }
}

export { ListCompanyUseCase };
