import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoEmail_tableUsers1795696988316 implements MigrationInterface {
    name = 'AgregandoEmail_tableUsers1795696988316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
