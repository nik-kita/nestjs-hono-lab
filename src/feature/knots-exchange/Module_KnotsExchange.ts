import { Module } from "@nestjs/common";
import { Resolver_Partner } from "./resolver/Resolver_Partner.resolver.ts";

@Module({
  providers: [Resolver_Partner],
})
export class Module_KnotsExchange {}
