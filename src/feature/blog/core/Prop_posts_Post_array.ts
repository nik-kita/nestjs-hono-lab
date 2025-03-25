import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "../domain/Post.ts";

@ObjectType()
export class Prop_posts_Post_array {
  @Field(() => [Post], { defaultValue: [] })
  posts: Post[] = [];
}
