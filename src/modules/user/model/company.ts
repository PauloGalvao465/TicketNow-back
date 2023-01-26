import { v4 as uuidV4 } from "uuid";

class Company {
  "idCompany"?: string; // (?) Informa que é parametro Opcional
  "name": string;
  "CNPJ": string;
  "description": string;
  "email": string;

  constructor() {
    if (!this.idCompany) {
      this.idCompany = uuidV4();
    }
  }
}
export { Company };
