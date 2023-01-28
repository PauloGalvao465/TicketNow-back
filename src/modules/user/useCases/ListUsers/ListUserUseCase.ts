import { Users } from "../../model/users";
import { IUserRepository } from "../../reposotories/IUserRepository";

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  execute(): Users[] {
    const users = this.userRepository.list();

    return users;
  }
}

export { ListUserUseCase };
