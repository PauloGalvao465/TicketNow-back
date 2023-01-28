import { Companys } from "../../model/companys";
import { ICreateCompanyDTO, ICompanyRepository } from "./ICompanyRepository";

class CompanyRepository implements ICompanyRepository {
  private Companys: Companys[];

  constructor() {
    this.Companys = [];
  }

  create({ name, cnpj, description, email }: ICreateCompanyDTO): void {
    const Company: Companys = new Companys();

    Object.assign(Company, {
      name,
      cnpj,
      description,
      email,
      date: new Date(),
    });

    this.Companys.push(Company);
  }
  list(): Companys[] {
    return this.Companys;
  }

  findByCnpj(cnpj: string): Companys {
    const Company = this.Companys.find((Company) => Company.cnpj === cnpj);
    return Company;
  }
}

export { CompanyRepository };
