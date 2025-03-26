import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { TaskStatus } from "./domain/TaskStatus.ts";
import { TaskType } from "./domain/TaskType.ts";
import { db } from "./draft/db.ts";
import { Dto_Task } from "./dto/Dto_Task.dto.ts";
import { Input_Task_create } from "./input/Input_Task_create.input.ts";

@Resolver()
export class MutationResolver_TaskManagement {
  @Mutation(() => Dto_Task)
  async create_task(
    @Args("input") input: Input_Task_create,
  ): Promise<Dto_Task> {
    await Promise.resolve();
    const now = new Date();
    const task = {
      status: TaskStatus.NOT_STARTED,
      type: TaskType.ONCE,
      ...input,
      _id: `Task_mock_${Date.now()}`,
      created_at: now,
      updated_at: now,
    };
    db.tasks.push(task);

    return task;
  }
}
