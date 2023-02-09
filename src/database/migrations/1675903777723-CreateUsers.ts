import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1675903777723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    new Table({
      name: "tb_user",
      columns: [
        {
          name: "tb_user", //
          type: "uuid",
          isPrimary: true,
        },

        {
          name: "im_user", //
          type: "varchar",
        },

        {
          name: "nm_user", //
          type: "varchar",
        },

        {
          name: "cd_cpf",
          type: "char",
        },

        {
          name: "dt_birth",
          type: "timestamp",
        },
        {
          name: "ds_category_user",
          type: "varchar",
        },

        {
          name: "cd_coupon",
          type: "varchar",
        },
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_user");
  }
}
