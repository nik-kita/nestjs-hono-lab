import { Field, ObjectType } from "@nestjs/graphql";
import { ITopic } from "../domain/ITopic.interface.ts";
import { Base_Input_Dto } from "../common/Base_Input_Dto.ts";

@ObjectType({ isAbstract: true })
export class Required_Topic_Dto extends Base_Input_Dto implements ITopic {
  @Field(() => String)
  name!: string;
}
