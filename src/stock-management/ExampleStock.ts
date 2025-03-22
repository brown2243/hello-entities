import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("example_stocks")
export class ExampleStock extends CommonEntity {
  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["active", "deleted", "hidden"],
    default: "active",
  })
  status!: "active" | "deleted" | "hidden";

  @Column()
  name!: string;

  @Column()
  unit!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.stock)
  orderItems?: OrderItem;
}
