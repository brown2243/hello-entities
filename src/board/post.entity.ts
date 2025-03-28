import { Category } from "board/category.entity";
import { Comment } from "board/comment.entity";
import { Like } from "board/like.entity";
import { User } from "board/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
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

  // 공지사항, 기본
  @Column({
    type: "enum",
    enum: ["normal", "announcement"],
    default: "normal",
  })
  type!: "normal" | "announcement";

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column({ default: 0 })
  likeCount!: number;

  @Column({ default: 0 })
  dislikeCount!: number;

  @Column({ type: "int", default: 0 })
  viewCount!: number; // 조회수 필드 추가

  //

  @ManyToOne(() => Category, (category) => category.posts)
  category?: Category;

  @ManyToOne(() => User, (user) => user.posts)
  user?: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments?: Comment[];

  @OneToMany(() => Like, (like) => like.post)
  likes?: Like[];
}
