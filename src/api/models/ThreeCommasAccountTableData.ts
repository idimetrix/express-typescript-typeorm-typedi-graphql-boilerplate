import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ThreeCommasAccountTableData {
  @PrimaryColumn('uuid')
  public id: string;

  @IsNotEmpty()
  @Column()
  public currency_code: string;

  @IsNotEmpty()
  @Column()
  public currency_name: string;

  @Column()
  public currency_icon: string;

  @IsNotEmpty()
  @Column()
  public currency_slug: string;

  @IsNotEmpty()
  @Column()
  public percentage: number;

  @IsNotEmpty()
  @Column()
  public position: number;

  @IsNotEmpty()
  @Column()
  public borrowed: number;

  @IsNotEmpty()
  @Column()
  public on_orders: number;

  @IsNotEmpty()
  @Column()
  public equity: number;

  @IsNotEmpty()
  @Column()
  public current_price: number;

  @IsNotEmpty()
  @Column()
  public current_price_usd: number;

  @IsNotEmpty()
  @Column()
  public day_change_percent: number;

  @IsNotEmpty()
  @Column()
  public day_change_percent_btc: number;

  @IsNotEmpty()
  @Column()
  public day_change_percent_usd: number;

  @IsNotEmpty()
  @Column()
  public btc_value: number;

  @IsNotEmpty()
  @Column()
  public usd_value: number;

  @IsNotEmpty()
  @Column()
  public account_id: number;
}
