import { InputType } from "@nestjs/graphql";
import { Partial_Task_Dto } from "./Partial_Task_Dto.dto.ts";

@InputType({ isAbstract: true })
export class Partial_Task_Input extends Partial_Task_Dto {}
