import { CommonEntity } from "common/common.entity";
import { Column, CreateDateColumn, Entity } from "typeorm";

@Entity("users")
export class BaseUser extends CommonEntity {
  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;
}
