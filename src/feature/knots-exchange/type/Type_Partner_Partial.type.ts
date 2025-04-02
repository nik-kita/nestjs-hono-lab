import { ObjectType } from "@nestjs/graphql";
import { PartialType } from "@nestjs/swagger";
import { Type_Partner_Required } from "./Type_Partner_Required.type.ts";

@ObjectType({ isAbstract: true })
export class Type_Partner_Partial extends PartialType(Type_Partner_Required) {}
