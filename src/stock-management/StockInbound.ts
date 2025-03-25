import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { PurchaseOrderItem } from "stock-management/PurchaseOrderItem";
import { Stock } from "stock-management/Stock";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";

// 입고
@Entity("stock_in_bounds")
export class StockInbound extends CommonEntity {
  @Column({
    type: "enum",
    enum: ["normal", "modified"],
    default: "normal",
  })
  status!: "normal" | "modified";

  @Column()
  name!: string;

  @Column()
  amount!: number;

  @Column()
  price?: number;

  // 발주 상품으로 인한 입고
  @OneToOne(() => PurchaseOrderItem, (purchaseOrderItem) => purchaseOrderItem.stockInbound)
  purchaseOrderItem?: PurchaseOrderItem;

  @ManyToOne(() => Stock, (stock) => stock.stockInbounds)
  stock?: Stock;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.distributor)
  orderItems?: OrderItem[];
}
