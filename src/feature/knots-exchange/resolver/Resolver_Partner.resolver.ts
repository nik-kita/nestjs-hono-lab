import { Query, Resolver } from "@nestjs/graphql";
import { ObjectType_Partner_core } from "../object-type/ObjectType_Partner_core.object-type.ts";

@Resolver(() => ObjectType_Partner_core)
export class Resolver_Partner {
  @Query(() => ObjectType_Partner_core)
  test(): ObjectType_Partner_core {
    return {
      _id: "asdf",
      created_at: new Date(),
    };
  }
}
