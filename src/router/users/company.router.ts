import { Router } from "express";
import { CompanyRepository } from "../../modules/user/reposotories/companys/CompanyRepository";
import { CreateCompanyService } from "../../modules/user/services/CreateCompanyService";

const companyRouter = Router();
const companyRepository = new CompanyRepository();

companyRouter.post("/", (request, response) => {
  const { name, cnpj, description, email } = request.body;

  const createCompanyService = new CreateCompanyService(companyRepository);

  createCompanyService.execute({ name, cnpj, description, email });
  return response.status(201).send();
});

companyRouter.get("/", (request, response) => {
  const all = companyRepository.list();
  return response.json(all);
});

export { companyRouter };
