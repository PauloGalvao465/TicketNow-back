import { Users } from "../../entities/users";
import { IUserRepository } from "../../reposotories/IUserRepository";
import fs from "fs";
import csvParce from "csv-parse";

//TODO: Nao Implemtentado

class ImportUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  // execute(file: Express.Multer.File): void {
  //   const strean = fs.createReadStream(file.path);
  //   // pipe ler em varios pedaços e enviar

  //   strean.pipe(parseFile);
  // }
}

export { ImportUserUseCase };
