import { AppDataSource } from "../../database/data-source";
import { User } from "../../entities/User";

type UserUpdateRequest = {
  id: string;
  username?: string;
  email?: string;
};

export class UpdateUserService {
  async execute({ id, username, email }: UserUpdateRequest): Promise<User> {
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOneBy({ id });

    if (!user) {
      throw new Error("User does not exist!");
    }

    if (username) {
      const existingUserByUsername = await repo.findOneBy({ username });
      if (existingUserByUsername && existingUserByUsername.id !== id) {
        throw new Error("Username already in use.");
      }
      user.username = username;
    }

    if (email) {
      const existingUserByEmail = await repo.findOneBy({ email });
      if (existingUserByEmail && existingUserByEmail.id !== id) {
        throw new Error("Email already in use.");
      }
      user.email = email;
    }

    await repo.save(user);

    return user;
  }
}
