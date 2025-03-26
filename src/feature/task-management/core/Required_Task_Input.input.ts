import { InputType } from "@nestjs/graphql";
import { Required_Task_Dto } from "./Required_Task_Dto.dto.ts";

@InputType({ isAbstract: true })
export class Required_Task_Input extends Required_Task_Dto {}
