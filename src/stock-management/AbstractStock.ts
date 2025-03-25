import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { Column, Entity, OneToMany, Unique } from "typeorm";

@Entity("abstract_stocks")
@Unique(["name"])
export class AbstractStock extends CommonEntity {
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

  @Column({ type: "date", nullable: true })
  expirationDate?: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.abstractStock)
  orderItems?: OrderItem;
}
