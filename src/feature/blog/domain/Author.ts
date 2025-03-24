import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Post } from "./Post.ts";
import { type Type } from "@nestjs/common";

@ObjectType()
export class Author {
  @Field(() => ID)
  _id!: string;

  @Field(() => String, { nullable: true })
  name: string | null = null;

  @Field(() => [Post])
  posts: Type<Post>[] = [];
}
