import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoCorreo_tableUsers1795649500812 implements MigrationInterface {
    name = 'EliminandoCorreo_tableUsers1795649500812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "mail" character varying NOT NULL`);
    }

}
