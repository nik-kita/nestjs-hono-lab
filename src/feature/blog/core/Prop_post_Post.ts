import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "../domain/Post.ts";

@ObjectType()
export class Prop_post_Post {
  @Field(() => Post)
  post!: Post;
}
