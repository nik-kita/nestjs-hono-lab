import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class CoreDtoInput {
  @Field(() => String)
  _id!: string;

  @Field(() => Date)
  created_at!: Date;

  @Field(() => Date)
  updated_at!: Date;
}
