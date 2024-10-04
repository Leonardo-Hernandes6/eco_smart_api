import { AppDataSource } from "../../database/data-source";
import { User } from "../../entities/User";

export class DeleteUserService {
  async execute(id: string): Promise<void> {
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOneBy({ id });

    if (!user) {
      throw new Error("User does not exist!");
    }

    await repo.delete(id);
  }
}
