import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class ThreeCommasDeal {
  @PrimaryColumn('int', { unique: true })
  @IsNotEmpty()
  public id: number;

  @Column()
  public type: string;

  @Column()
  public bot_id: number;

  @Column()
  public max_safety_orders: number;

  @Column()
  public deal_has_error: boolean;

  @Column()
  public from_currency_id: number;

  @Column()
  public to_currency_id: number;

  @Column()
  public account_id: number;

  @Column()
  public active_safety_orders_count: number;

  @Column()
  public created_at: Date;

  @Column()
  public updated_at: Date;

  @Column()
  public closed_at: Date;

  @Column()
  public finished: boolean;

  @Column()
  public current_active_safety_orders_count: number;

  @Column()
  public current_active_safety_orders: number;

  @Column()
  public completed_safety_orders_count: number;

  @Column()
  public completed_manual_safety_orders_count: number;

  @Column()
  public cancellable: boolean;

  @Column()
  public panic_sellable: boolean;

  @Column()
  public trailing_enabled: boolean;

  @Column()
  public tsl_enabled: boolean;

  @Column()
  public stop_loss_timeout_enabled: boolean;

  @Column()
  public stop_loss_timeout_in_seconds: number;

  @Column()
  public active_manual_safety_orders: number;

  @Column()
  public pair: string;

  @Column()
  public status: string;

  @Column()
  public take_profit: string;

  @Column()
  public base_order_volume: string;

  @Column()
  public safety_order_volume: string;

  @Column()
  public safety_order_step_percentage: string;

  @Column()
  public bought_amount: string;

  @Column()
  public bought_volume: string;

  @Column()
  public bought_average_price: string;

  @Column()
  public sold_amount: string;

  @Column()
  public sold_volume: string;

  @Column()
  public sold_average_price: string;

  @Column()
  public take_profit_type: string;

  @Column()
  public final_profit: string;

  @Column()
  public martingale_coefficient: string;

  @Column()
  public martingale_volume_coefficient: string;

  @Column()
  public martingale_step_coefficient: string;

  @Column()
  public stop_loss_percentage: string;

  @Column()
  public error_message: string;

  @Column()
  public profit_currency: string;

  @Column()
  public stop_loss_type: string;

  @Column()
  public safety_order_volume_type: string;

  @Column()
  public base_order_volume_type: string;

  @Column()
  public from_currency: string;

  @Column()
  public to_currency: string;

  @Column()
  public current_price: string;

  @Column()
  public take_profit_price: string;

  @Column()
  public stop_loss_price: string;

  @Column()
  public final_profit_percentage: string;

  @Column()
  public actual_profit_percentage: string;

  @Column()
  public bot_name: string;

  @Column()
  public account_name: string;

  @Column()
  public usd_final_profit: string;

  @Column()
  public actual_profit: string;

  @Column()
  public actual_usd_profit: string;

  @Column()
  public failed_message: string;

  @Column()
  public reserved_base_coin: string;

  @Column()
  public reserved_second_coin: string;

  @Column()
  public trailing_deviation: string;

  @Column()
  public trailing_max_price: string;

  @Column()
  public tsl_max_price: string;

  @Column()
  public strategy: string;
}
