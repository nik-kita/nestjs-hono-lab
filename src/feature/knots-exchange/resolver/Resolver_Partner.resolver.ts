import { Args, Query, Resolver } from "@nestjs/graphql";
import { InputType_Partner_core, ObjectType_Partner_core } from "../object-type/ObjectType_Partner_core.object-type.ts";

@Resolver(() => ObjectType_Partner_core)
export class Resolver_Partner {
  @Query(() => ObjectType_Partner_core)
  test(
    @Args('input') input: InputType_Partner_core
  ): ObjectType_Partner_core {
    console.log(input);
    return {
      _id: "asdf",
      created_at: new Date(),
    };
  }
}
