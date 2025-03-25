import {
  Field,
  ID,
  IntersectionType,
  ObjectType,
  PickType,
} from "@nestjs/graphql";
import { Prop_post_Post } from "../core/Prop_post_Post.ts";
import { Prop_posts_Post_array } from "../core/Prop_posts_Post_array.ts";

@ObjectType()
export class Author extends IntersectionType(
  PickType(Prop_posts_Post_array, ["posts"]),
  PickType(Prop_post_Post, ["post"]),
) {
  @Field(() => ID)
  _id!: string;

  @Field(() => String, { nullable: true })
  name: string | null = null;
}
