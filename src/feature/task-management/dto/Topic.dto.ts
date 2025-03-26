import {
  IntersectionType,
  ObjectType,
  OmitType,
  PickType,
} from "@nestjs/graphql";
import { Partial_Topic_Dto } from "../core/Partial_Topic_Dto.dto.ts";
import { Required_Topic_Dto } from "../core/Required_Topic_Dto.dto.ts";
import { ITopic } from "../domain/ITopic.interface.ts";

const partials = [] satisfies (keyof ITopic)[];

@ObjectType("Topic")
export class Topic extends IntersectionType(
  OmitType(Required_Topic_Dto, partials),
  PickType(Partial_Topic_Dto, partials),
) {}
