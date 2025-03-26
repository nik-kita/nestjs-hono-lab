import { Module } from "@nestjs/common";
import { Resolver_Task } from "./Resolver_Task.resolver.ts";
import { QueryResolver_TaskManagement } from "./QueryResolver_TaskManagement.query-resolver copy.ts";
import { MutationResolver_TaskManagement } from "./MutationResolver_TaskManagement.mutation-resolver.ts";

@Module({
  providers: [
    Resolver_Task,
    QueryResolver_TaskManagement,
    MutationResolver_TaskManagement,
  ],
})
export class Module_TaskManagement {}
