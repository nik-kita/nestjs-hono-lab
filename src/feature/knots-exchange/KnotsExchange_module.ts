import { Module } from "@nestjs/common";
import { Field, ObjectType, Query, Resolver } from "@nestjs/graphql";

@ObjectType()
class HelloWorld {
  @Field()
  hello!: string;
}

@Resolver()
export class PartnerResolver {
  @Query(() => HelloWorld)
  hello(): HelloWorld {
    return {
      hello: "world",
    };
  }
}

@Module({
  providers: [PartnerResolver],
})
export class KnotsExchange_module {}
