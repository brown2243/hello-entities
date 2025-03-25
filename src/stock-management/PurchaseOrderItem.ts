import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { StockInbound } from "stock-management/StockInbound";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity("purchase_order_items")
export class PurchaseOrderItem extends CommonEntity {
  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["pending", "finished"],
    default: "pending",
  })
  status!: "pending" | "finished";

  @Column()
  orderCount!: number;

  @Column()
  arrivedCount!: number;

  // 상품은 가격을 가지지만 상품 등록 시점과
  // 구매 시점의 가격이 다를 수 있기 때문에,
  // 입고로 처리받는게 맞을까?
  @Column()
  price!: number;

  @OneToOne(() => StockInbound, (stockInbound) => stockInbound.purchaseOrderItem)
  @JoinColumn({ name: "stockInboundId" }) // 외래 키 컬럼 명시
  stockInbound?: StockInbound; // ?로 옵셔널 표시

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.purchaseOrderItems)
  orderItem?: OrderItem;
}
