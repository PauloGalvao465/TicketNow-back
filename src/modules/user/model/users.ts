import { v4 as uuidV4 } from "uuid";

class Users {
  id?: string; // (?) Informa que é parametro Opcional
  "name": string;
  "date": Date;
  "cpf": string;
  "category": string;
  "email": string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Users };
