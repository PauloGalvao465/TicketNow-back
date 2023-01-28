import { v4 as uuidV4 } from "uuid";

class Companys {
  "idCompany"?: string; // (?) Informa que é parametro Opcional
  "name": string;
  "cnpj": string;
  "description": string;
  "email": string;

  constructor() {
    if (!this.idCompany) {
      this.idCompany = uuidV4();
    }
  }
}
export { Companys };
