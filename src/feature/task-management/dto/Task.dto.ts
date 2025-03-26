import {
  Field,
  IntersectionType,
  ObjectType,
  OmitType,
  PickType,
} from "@nestjs/graphql";
import { Partial_Task_Dto } from "../core/Partial_Task_Dto.dto.ts";
import { Required_Task_Dto } from "../core/Required_Task_Dto.dto.ts";
import { ITask } from "../domain/ITask.interface.ts";
import { ITopic } from "../domain/ITopic.interface.ts";

const partials = [
  "description",
] satisfies (keyof ITask)[];

@ObjectType("Task")
export class Task extends IntersectionType(
  OmitType(Required_Task_Dto, partials),
  PickType(Partial_Task_Dto, partials),
) implements ITask {
  @Field(() => [])
  topics!: ITopic[];
  @Field(() => [Task])
  subtasks!: ITask[];
  @Field(() => Task, { nullable: true, defaultValue: null })
  parent_task?: ITask | null = null;
  @Field(() => [Task])
  blockers!: ITask[];
}
