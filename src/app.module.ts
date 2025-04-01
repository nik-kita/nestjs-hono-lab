import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { resolver_Blog } from "./feature/blog/Resolver_Blog.ts";

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
  ],
  providers: [
    resolver_Blog,
  ],
})
export class AppModule {}
