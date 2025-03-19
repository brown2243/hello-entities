import { Comment } from "board/comment.entity";
import { Like } from "board/like.entity";
import { Post } from "board/post.entity";
import { BaseUser } from "common/user.entity";
import { Entity, OneToMany } from "typeorm";

@Entity("users")
export class User extends BaseUser {
  @OneToMany(() => Post, (post) => post.user)
  posts?: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments?: Comment[];

  @OneToMany(() => Like, (like) => like.user)
  likes?: Like[];
}
