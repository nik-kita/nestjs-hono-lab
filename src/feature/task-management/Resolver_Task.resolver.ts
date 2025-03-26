import { Resolver } from "@nestjs/graphql";
import { Dto_Task } from "./dto/Dto_Task.dto.ts";

@Resolver(() => Dto_Task)
export class Resolver_Task {
}
