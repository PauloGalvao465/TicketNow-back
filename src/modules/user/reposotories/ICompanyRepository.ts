import { Companys } from "../entities/companys";

interface ICreateCompanyDTO {
  name: string;
  cnpj: string;
  description: string;
  email: string;
}

interface ICompanyRepository {
  create({ name, cnpj, description, email }: ICreateCompanyDTO): void;
  list(): Companys[];
  findByCnpj(cnpj: string): Companys;
}

export { ICompanyRepository, ICreateCompanyDTO };
