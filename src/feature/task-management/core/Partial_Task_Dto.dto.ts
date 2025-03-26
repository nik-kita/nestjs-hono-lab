import { ObjectType, PartialType } from "@nestjs/graphql";
import { Required_Task_Dto } from "./Required_Task_Dto.dto.ts";

@ObjectType({ isAbstract: true })
export class Partial_Task_Dto extends PartialType(Required_Task_Dto) {}
