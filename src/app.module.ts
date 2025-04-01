import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import {
  Field,
  GraphQLModule,
  ObjectType,
  Query,
  Resolver,
} from "@nestjs/graphql";
import { Module_KnotsExchange } from "./feature/knots-exchange/Module_KnotsExchange.ts";

export const playground_plugin = ApolloServerPluginLandingPageLocalDefault() as // deno-lint-ignore no-explicit-any
any;

@ObjectType()
class HelloWorld {
  @Field()
  hello!: string;
}

@Resolver()
export class Resolver_HelloWorld {
  @Query(() => HelloWorld)
  hello(): HelloWorld {
    return {
      hello: "world",
    };
  }
}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [
        playground_plugin,
      ],
    }),
    Module_KnotsExchange,
  ],
  providers: [Resolver_HelloWorld],
})
export class AppModule {}
