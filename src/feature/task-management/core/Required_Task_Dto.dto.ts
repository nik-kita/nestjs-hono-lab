import { Field, ObjectType } from "@nestjs/graphql";
import { Task } from "../domain/Task.ts";
import { TaskStatus } from "../domain/TaskStatus.ts";
import { TaskType } from "../domain/TaskType.ts";
import { CoreDtoInput } from "./Core_Input_Dto.input-dto.ts";

@ObjectType({ isAbstract: true })
export class Required_Task_Dto extends CoreDtoInput implements
  Omit<
    Task,
    keyof Pick<Task, "blockers" | "parent_task" | "subtasks" | "topics">
  > {
  @Field(() => TaskType)
  type!: TaskType;
  @Field(() => TaskStatus)
  status!: TaskStatus;
  @Field(() => String)
  title!: string;
  @Field(() => String)
  description!: string;
}
