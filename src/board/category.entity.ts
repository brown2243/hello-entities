import { Post } from "board/post.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Categorys")
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // 활성, 삭제, 숨김
  @Column({
    type: "enum",
    enum: ["active", "deleted", "hidden"],
    default: "active",
  })
  status!: "active" | "deleted" | "hidden";

  // 카테고리 종류
  @Column({
    type: "enum",
    enum: ["it", "frontend", "backend"],
    default: "it",
  })
  type!: "it" | "frontend" | "backend";

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  //

  @OneToMany(() => Post, (post) => post.category)
  posts?: Post[];
}
