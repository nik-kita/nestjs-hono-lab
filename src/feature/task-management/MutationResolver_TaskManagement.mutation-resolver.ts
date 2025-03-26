import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { TaskType } from "./domain/TaskType.enum.ts";
import { db } from "./draft/db.ts";
import { Task } from "./dto/Task.dto.ts";
import { Input_Task_create } from "./input/Input_Task_create.input.ts";
import { TaskStatus } from "./domain/TaskStatus.enum.ts";

@Resolver()
export class MutationResolver_TaskManagement {
  @Mutation(() => Task)
  async create_task(
    @Args("input") input: Input_Task_create,
  ): Promise<Task> {
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
