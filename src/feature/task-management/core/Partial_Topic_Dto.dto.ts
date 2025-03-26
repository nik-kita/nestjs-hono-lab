import { PartialType } from "@nestjs/swagger";
import { Required_Topic_Dto } from "./Required_Topic_Dto.dto.ts";
import { ObjectType } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
export class Partial_Topic_Dto extends PartialType(Required_Topic_Dto) {}
