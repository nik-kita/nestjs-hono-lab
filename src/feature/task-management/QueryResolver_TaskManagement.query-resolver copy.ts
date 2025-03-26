import { Query, Resolver } from "@nestjs/graphql";
import { db } from "./draft/db.ts";
import { Dto_Task } from "./dto/Dto_Task.dto.ts";

@Resolver()
export class QueryResolver_TaskManagement {
  @Query(() => [Dto_Task])
  async tasks(): Promise<Dto_Task[]> {
    await Promise.resolve();

    return db.tasks;
  }
}
