import { InputType, ObjectType } from "@nestjs/graphql";
import { ITopic } from "../domain/ITopic.interface.ts";

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class Prop_topics_Topic_arr {
  topics!: ITopic[];
}
