import { CommonEntity } from "common/common.entity";
import { Column, Entity } from "typeorm";

@Entity("users")
export class BaseUser extends CommonEntity {
  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  phone!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;
}
