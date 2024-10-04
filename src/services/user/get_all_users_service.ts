import { AppDataSource } from "../../database/data-source";
import { User } from "../../entities/User";

export class GetAllUsersService {
  async execute() {
    const repo = AppDataSource.getRepository(User);

    const users = await repo.find();

    return users;
  }
}
