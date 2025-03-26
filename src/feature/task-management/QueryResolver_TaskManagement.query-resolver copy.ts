import { Query, Resolver } from "@nestjs/graphql";
import { db } from "./draft/db.ts";
import { Task } from "./dto/Task.dto.ts";

@Resolver()
export class QueryResolver_TaskManagement {
  @Query(() => [Task])
  async tasks(): Promise<Task[]> {
    await Promise.resolve();

    return db.tasks;
  }
}
