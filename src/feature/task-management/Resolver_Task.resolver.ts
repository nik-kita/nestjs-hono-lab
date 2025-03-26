import { Resolver } from "@nestjs/graphql";
import { Task } from "./dto/Task.dto.ts";

@Resolver(() => Task)
export class Resolver_Task {
}
