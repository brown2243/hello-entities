import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { Stock } from "stock-management/Stock";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

// 입고
@Entity("stock_out_bounds")
export class StockOutbound extends CommonEntity {
  // 입고 상품
  @Column()
  name!: string;

  @Column()
  amount!: number;

  @Column()
  price?: number;

  @ManyToOne(() => Stock, (stock) => stock.stockOutbounds)
  stock?: Stock;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.distributor)
  orderItems?: OrderItem[];
}
