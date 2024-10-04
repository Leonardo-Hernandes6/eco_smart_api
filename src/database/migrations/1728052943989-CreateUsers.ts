import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1728052943989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "60",
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "username",
            type: "varchar",
            length: "60",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            length: "254",
            isUnique: true,
          },
          {
            name: "birthday",
            type: "date",
          },
          {
            name: "password",
            type: "varchar",
            length: "60",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
