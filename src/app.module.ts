import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { KnotsExchange_module } from "./feature/knots-exchange/KnotsExchange_module.ts";

export const playground_plugin = ApolloServerPluginLandingPageLocalDefault() as // deno-lint-ignore no-explicit-any
any;

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
    KnotsExchange_module,
  ],
  providers: [],
})
export class AppModule {}
