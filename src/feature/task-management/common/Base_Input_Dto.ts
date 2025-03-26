import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
export class Base_Input_Dto {
  @Field(() => String)
  _id!: string;

  @Field(() => Date)
  created_at!: Date;

  @Field(() => Date)
  updated_at!: Date;
}
