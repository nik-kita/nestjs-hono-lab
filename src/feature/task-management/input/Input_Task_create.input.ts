import { InputType, IntersectionType, PickType } from "@nestjs/graphql";
import { Partial_Task_Input } from "../core/Partial_Task.input.ts";
import { Required_Task_Input } from "../core/Required_Task_Input.input.ts";

@InputType("CreateTask_input")
export class Input_Task_create extends IntersectionType(
  PickType(Required_Task_Input, [
    "title",
  ]),
  PickType(Partial_Task_Input, [
    "description",
    "status",
    "type",
  ]),
) {}
