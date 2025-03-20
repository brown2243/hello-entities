import { CommonEntity } from "common/common.entity";
import { OrderItem } from "stock-management/OrderItem";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("distributor")
export class Distributor extends CommonEntity {
  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["active", "deleted", "hidden"],
    default: "active",
  })
  status!: "active" | "deleted" | "hidden";

  @Column()
  name!: string;

  // 상품 url?
  @Column({ nullable: true })
  url?: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.distributor)
  orderItems?: OrderItem[];

  // //
  // @ManyToOne(() => User, (user) => user.stocks)
  // user?: User;
}
