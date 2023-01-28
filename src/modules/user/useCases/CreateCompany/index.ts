import { CompanyRepository } from "../../reposotories/implementations/CompanyRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

const companyRepository = CompanyRepository.getInstance();
const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);

const createCompanyController = new CreateCompanyController(
  createCompanyUseCase
);

export { createCompanyController };
