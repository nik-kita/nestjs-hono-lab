import { ObjectType } from "@nestjs/graphql";
import { CombineType } from "../../../common/CombinedType.ts";
import { Type_Partner_Required } from "../type/Type_Partner_Required.type.ts";

class Demo {
  NO!: false;
  YES!: true;
  _id!: number;
}

@ObjectType()
export class ObjectType_Partner_core extends CombineType(
  Type_Partner_Required,
  {
    _id: Demo,
    is_active: "omit",
    created_at: "pick",
  },
) {}

const x: ObjectType_Partner_core = {
  _id: 5,
  created_at: new Date(),
};

x;
