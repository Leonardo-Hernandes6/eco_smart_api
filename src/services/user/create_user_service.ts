import { AppDataSource } from "../../database/data-source";
import { User } from "../../entities/User";

interface ICreateUser {
  name: string;
  username: string;
  email: string;
  password: string;
  birthday: string;
  cpf: string;
}

export class CreateUserService {
  async execute({
    name,
    username,
    email,
    password,
    birthday,
    cpf,
  }: ICreateUser): Promise<User | Error> {
    const repo = AppDataSource.getRepository(User);

    if (await repo.findOneBy({ cpf: cpf })) {
      throw new Error("CPF already registred.");
    }

    if (await repo.findOneBy({ username: username })) {
      throw new Error("Username already registred.");
    }

    if (await repo.findOneBy({ email: email })) {
      throw new Error("Email already registred.");
    }

    const user = repo.create({
      name,
      username,
      email,
      password,
      birthday,
      cpf,
    });

    await repo.save(user);

    return user;
  }
}
