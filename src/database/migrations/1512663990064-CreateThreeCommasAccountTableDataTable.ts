import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Service } from 'typedi';

@Service()
export class CreateThreeCommasAccountTableDataTable1512663990064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'three_commas_account_table_data',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '255',
          isPrimary: true,
          isNullable: false,
        },
        {
          name: 'currency_code',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'currency_name',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'currency_icon',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'currency_slug',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'percentage',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },

        {
          name: 'position',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'borrowed',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'on_orders',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'equity',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'current_price',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'current_price_usd',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'day_change_percent',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'day_change_percent_btc',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'day_change_percent_usd',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'btc_value',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'usd_value',
          type: 'double',
          isPrimary: false,
          isNullable: false,
        },
        {
          name: 'account_id',
          type: 'int',
          isPrimary: false,
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('three_commas_account_table_data');
  }
}
