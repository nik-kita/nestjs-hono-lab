import { Field, ObjectType } from "@nestjs/graphql";
import { TaskType } from "../domain/TaskType.enum.ts";
import { Base_Input_Dto } from "../common/Base_Input_Dto.ts";
import { ITask } from "../domain/ITask.interface.ts";
import { TaskStatus } from "../domain/TaskStatus.enum.ts";

@ObjectType({ isAbstract: true })
export class Required_Task_Dto extends Base_Input_Dto implements
  Omit<
    ITask,
    keyof Pick<ITask, "blockers" | "parent_task" | "subtasks" | "topics">
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
