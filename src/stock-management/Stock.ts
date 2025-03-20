import { CommonEntity } from "common/common.entity";
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
  name!: string;

  @Column()
  amount!: number;

  @Column()
  unit!: string;

  @Column({ nullable: true })
  description?: string;

  //
  @ManyToOne(() => User, (user) => user.stocks)
  user?: User;
}
