import { Field, ObjectType } from "@nestjs/graphql";
import { CombineType } from "../../../common/CombinedType.ts";
import { Type_Partner_Required } from "../type/Type_Partner_Required.type.ts";

@ObjectType()
class Demo {
  @Field(() => String, {
    defaultValue: "Yes!",
  })
  it_works?: string;
}

@ObjectType()
export class ObjectType_Partner_core extends CombineType(
  Type_Partner_Required,
  {
    _id: "pick",
    is_active: "omit",
    created_at: "pick",
  },
)<Demo>(Demo) {
}
