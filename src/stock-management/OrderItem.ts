import { CommonEntity } from "common/common.entity";
import { AbstractStock } from "stock-management/AbstractStock";
import { Distributor } from "stock-management/Distributor";
import { PurchaseOrderItem } from "stock-management/PurchaseOrderItem";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("order_items")
export class OrderItem extends CommonEntity {
  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["active", "deleted", "hidden"],
    default: "active",
  })
  status!: "active" | "deleted" | "hidden";

  @Column()
  name!: string; // 상품 명

  @Column()
  amount!: number;

  @Column()
  unit!: string;

  // 상품은 가격을 가지지만 상품 등록 시점과
  // 구매 시점의 가격이 다를 수 있기 때문에,
  // 입고로 처리받는게 맞을까?
  @Column()
  price!: number;

  // 상품 url?
  @Column({ nullable: true })
  url?: string;

  //
  @ManyToOne(() => AbstractStock, (abstractStock) => abstractStock.orderItems)
  abstractStock?: AbstractStock;

  // 유통사
  @ManyToOne(() => Distributor, (distributor) => distributor.orderItems)
  distributor?: Distributor;

  @OneToMany(() => PurchaseOrderItem, (purchaseOrderItem) => purchaseOrderItem.orderItem)
  purchaseOrderItems?: PurchaseOrderItem[];
}
