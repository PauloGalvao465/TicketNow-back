import { Companys } from "../../entities/companys";
import { ICreateCompanyDTO, ICompanyRepository } from "../ICompanyRepository";

class CompanyRepository implements ICompanyRepository {
  private Companys: Companys[];

  private static INSTANCE: CompanyRepository;

  private constructor() {
    this.Companys = [];
  }

  /**
   * getInstance
   */
  public static getInstance(): CompanyRepository {
    if (!CompanyRepository.INSTANCE) {
      CompanyRepository.INSTANCE = new CompanyRepository();
    }
    return CompanyRepository.INSTANCE;
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
