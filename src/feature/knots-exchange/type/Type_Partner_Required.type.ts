import { Field, ObjectType } from "@nestjs/graphql";
import { Partner } from "../domain/Partner.ts";

@ObjectType({ isAbstract: true })
export class Type_Partner_Required implements Partner {
  @Field()
  _id!: string;

  @Field()
  is_active!: boolean;

  @Field(() => Date, {
    get defaultValue() {
      return new Date();
    },
  })
  created_at!: Date;

  @Field(() => Date, {
    get defaultValue() {
      return new Date();
    },
  })
  updated_at!: Date;
}
