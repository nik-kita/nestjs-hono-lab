import { Field } from "@nestjs/graphql";

export class Base_Input_Dto {
  @Field(() => String)
  _id!: string;

  @Field(() => Date)
  created_at!: Date;

  @Field(() => Date)
  updated_at!: Date;
}
