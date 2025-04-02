import { ObjectType } from "@nestjs/graphql";
import { CombineType, MergeType } from "../../../common/CombinedType.ts";
import { Type_Partner_Required } from "../type/Type_Partner_Required.type.ts";

class Demo {
  NO!: false;
  YES!: true;
  _id!: number;
}

class A {
  a!: string;
}

class B {
  b!: number;
}

@ObjectType()
export class ObjectType_Partner_core extends CombineType(
  Type_Partner_Required,
  {
    _id: Demo,
    is_active: "omit",
    created_at: "pick",
  },
)<A & B>(A, B) {}

const x: ObjectType_Partner_core = {
  _id: +"",
  created_at: new Date(),
  a: "",
  b: 0,
};

x;

class Example extends MergeType<A & B>(A, B) {}

const example: Example = {
  a: "",
  b: 4,
};
