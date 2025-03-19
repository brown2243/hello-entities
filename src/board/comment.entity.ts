import { Post } from "board/post.entity";
import { User } from "board/user.entity";
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  Entity,
} from "typeorm";

@Entity("Comments")
export abstract class Comment {
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
  content!: string;

  // 중첩 깊이
  // 일반적으로 5 중첩 방지
  @Column({ type: "tinyint", default: 0 })
  depth!: number;

  //

  @ManyToOne(() => Post, (post) => post.comments)
  post?: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user?: User;

  // 부모 댓글 (없을 수도 있음)
  @ManyToOne(() => Comment, (comment) => comment.children, { nullable: true })
  parent?: Comment;

  // 자식 댓글들
  @OneToMany(() => Comment, (comment) => comment.parent)
  children?: Comment[];
}
