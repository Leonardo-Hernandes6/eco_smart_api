import { CreateDateColumn } from "typeorm";
import { PrimaryColumn } from "typeorm";
import { Entity, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  birthday: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
