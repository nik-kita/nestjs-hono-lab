import {
  IntersectionType,
  ObjectType,
  OmitType,
  PickType,
} from "@nestjs/graphql";
import { Partial_Task_Dto } from "../core/Partial_Task.dto.ts";
import { Required_Task_Dto } from "../core/Required_Task_Dto.dto.ts";
import { Task } from "../domain/Task.ts";

const partials = [
  "description",
] satisfies (keyof Task)[];

@ObjectType("Task")
export class Dto_Task extends IntersectionType(
  OmitType(Required_Task_Dto, partials),
  PickType(Partial_Task_Dto, partials),
) {}
