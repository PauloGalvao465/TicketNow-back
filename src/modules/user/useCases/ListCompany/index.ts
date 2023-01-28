import { CompanyRepository } from "../../reposotories/implementations/CompanyRepository";
import { ListCompanyController } from "./ListCompanyController";
import { ListCompanyUseCase } from "./ListCompanyUseCase";

const companyRepository = CompanyRepository.getInstance();

const listCompanyUseCase = new ListCompanyUseCase(companyRepository);

const listCompanyController = new ListCompanyController(listCompanyUseCase);

export { listCompanyController };
