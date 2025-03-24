import { type Type } from "@nestjs/common";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Author } from "./Author.ts";

@ObjectType()
export class Post {
  @Field(() => ID)
  _id!: string;

  @Field()
  title!: string;

  @Field(() => String, { nullable: true })
  content: null | string = null;

  @Field(() => Author)
  author!: Type<Author>;
}
