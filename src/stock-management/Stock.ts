import { CommonEntity } from "common/common.entity";
import { AbstractStock } from "stock-management/AbstractStock";
import { StockInbound } from "stock-management/StockInbound";
import { StockOutbound } from "stock-management/StockOutbound";
import { User } from "stock-management/User";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity("stocks")
export class Stock extends CommonEntity {
  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["active", "deleted", "hidden"],
    default: "active",
  })
  status!: "active" | "deleted" | "hidden";

  @Column()
  amount!: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => User, (user) => user.stocks)
  user?: User;

  @ManyToOne(() => AbstractStock, (abstractStock) => abstractStock)
  abstractStock?: AbstractStock;

  @OneToMany(() => StockInbound, (stockInbound) => stockInbound.stock)
  stockInbounds?: StockInbound[];

  @OneToMany(() => StockOutbound, (stockOutbound) => stockOutbound.stock)
  stockOutbounds?: StockOutbound[];
}
