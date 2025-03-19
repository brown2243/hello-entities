import { Category } from "entities/board/category.entity";
import { Comment } from "entities/board/comment.entity";
import { Like } from "entities/board/like.entity";
import { User } from "entities/board/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Posts")
export class Post {
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

  @Column()
  title!: string;

  @Column()
  content!: string;

  @ManyToOne(() => Category, (category) => category.posts)
  category?: Category;

  @ManyToOne(() => User, (user) => user.posts)
  user?: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments?: Comment[];

  @OneToMany(() => Like, (like) => like.post)
  likes?: Like[];
}
