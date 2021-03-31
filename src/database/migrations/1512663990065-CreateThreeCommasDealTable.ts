import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Service } from 'typedi';

@Service()
export class CreateThreeCommasDealTable1512663990065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: 'three_commas_deal',
      columns: [
        {
          name: 'id',
          type: 'int',
          isUnique: true,
          isNullable: false,
        },
        {
          name: 'type',
          type: 'varchar',
          length: '255',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'bot_id',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'max_safety_orders',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'deal_has_error',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'from_currency_id',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },

        {
          name: 'to_currency_id',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'account_id',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'active_safety_orders_count',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'datetime',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'updated_at',
          type: 'datetime',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'closed_at',
          type: 'datetime',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'finished',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'current_active_safety_orders_count',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'current_active_safety_orders',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'completed_safety_orders_count',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'completed_manual_safety_orders_count',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'cancellable',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'panic_sellable',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'trailing_enabled',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'tsl_enabled',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },
        {
          name: 'stop_loss_timeout_enabled',
          type: 'boolean',
          isPrimary: false,
          isNullable: true,
        },

        {
          name: 'stop_loss_timeout_in_seconds',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },

        {
          name: 'active_manual_safety_orders',
          type: 'int',
          isPrimary: false,
          isNullable: true,
        },

        { name: 'pair', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'status', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'take_profit', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'base_order_volume', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'safety_order_volume', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'safety_order_step_percentage', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'bought_amount', type: 'varchar', length: '255', isPrimary: false, isNullable: true },

        { name: 'bought_volume', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'bought_average_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'sold_amount', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'sold_volume', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'sold_average_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'take_profit_type', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'final_profit', type: 'varchar', length: '255', isPrimary: false, isNullable: true },

        { name: 'martingale_coefficient', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'martingale_volume_coefficient', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'martingale_step_coefficient', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'stop_loss_percentage', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'error_message', type: 'varchar', length: '1023', isPrimary: false, isNullable: true },
        { name: 'profit_currency', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'stop_loss_type', type: 'varchar', length: '255', isPrimary: false, isNullable: true },

        { name: 'safety_order_volume_type', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'base_order_volume_type', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'from_currency', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'to_currency', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'current_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'take_profit_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'stop_loss_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },

        { name: 'final_profit_percentage', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'actual_profit_percentage', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'bot_name', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'account_name', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'usd_final_profit', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'actual_profit', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'actual_usd_profit', type: 'varchar', length: '255', isPrimary: false, isNullable: true },

        { name: 'failed_message', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'reserved_base_coin', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'reserved_second_coin', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'trailing_deviation', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'trailing_max_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'tsl_max_price', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
        { name: 'strategy', type: 'varchar', length: '255', isPrimary: false, isNullable: true },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('three_commas_deal');
  }
}
