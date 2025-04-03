import { Field, InputType, ObjectType } from "@nestjs/graphql";
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
    created_at: "pick",
    is_active: null,
    updated_at: null
  },
)<Demo>(Demo).object_type {
}

@InputType()
export class InputType_Partner_core extends CombineType(
  Type_Partner_Required,
  {
    _id: "pick",
    created_at: "pick",
    is_active: null,
    updated_at: null
  },
)<Demo>(Demo).input_type {
}
