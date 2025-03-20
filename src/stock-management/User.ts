import { BaseUser } from "common/user.entity";
import { Stock } from "stock-management/Stock";
import { Column, Entity, OneToMany } from "typeorm";

@Entity("users")
export class User extends BaseUser {
  @Column({
    type: "enum",
    enum: ["branch", "master", "admin"],
    default: "branch",
  })
  role!: "branch" | "master" | "admin";

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  // branch name~
  @Column()
  nickName!: string;

  @Column()
  companyCode!: string;

  @OneToMany(() => Stock, (stock) => stock.user)
  stocks?: Stock[];

  // @OneToMany(() => Like, (like) => like.user)
  // likes?: Like[];
}
