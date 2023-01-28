import { Router } from "express";
import { createCompanyController } from "../../modules/user/useCases/CreateCompany";
import { listCompanyController } from "../../modules/user/useCases/ListCompany";

const companyRouter = Router();

companyRouter.post("/", (request, response) => {
  return createCompanyController.handle(request, response);
});

companyRouter.get("/", (request, response) => {
  return listCompanyController.handle(request, response);
});

export { companyRouter };
