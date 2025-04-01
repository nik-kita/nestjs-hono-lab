import { Type } from "@nestjs/common";
import {
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from "@nestjs/graphql";

type Source<
  T extends Type<unknown>,
  U extends Record<keyof T, InstructionType>,
> = Type<
  {
    [
      K in keyof T as K extends string ? K
        : ("extra_nullable" | "extra_required")
    ]: U[K] extends "omit" ? never
      : U[K] extends "pick_as_nullable" ? (T[K] | null)
      : U[K] extends "pick_as_required" ? Required<T>[K]
      : U[K] extends "pick_as_it_is" ? T[K]
      : "oops... Your <instruction> how to extend <source> is incorrect...";
  }
>;

export function CombineType<
  T extends Type<unknown>,
  U extends Record<keyof T, InstructionType>,
  P extends ([] | [
    Type<
      {
        [
          K in keyof Source<T, U> as K extends never ? K extends string ? K
            : never
            : never
        ]: unknown;
      }
    >,
  ]) = [],
>(
  source: T,
  instruction: U,
  traits: P,
): Source<T, U> & P[number] {
  const {
    omit,
    pick_as_it_is,
    pick_as_nullable,
  } = Object.entries(instruction).reduce(
    (acc, [k, v]) => {
      acc[v].push(k as keyof T);

      return acc;
    },
    {
      omit: [] as (keyof T)[],
      pick_as_it_is: [] as (keyof T)[],
      pick_as_nullable: [] as (keyof T)[],
      extra_nullable: [] as (keyof T)[],
      extra_required: [] as (keyof T)[],
    } satisfies Record<InstructionType, (keyof T)[]>,
  );

  @ObjectType({
    isAbstract: true,
  })
  class GeneratedObjectType extends MergeType(
    PartialType(PickType(source, pick_as_nullable as never[])),
    PickType(source, pick_as_it_is as never[]),
    OmitType(source, omit as never[]),
    ...traits,
  ) {
  }

  return GeneratedObjectType as Source<T, U> & P[number];
}

type InstructionType =
  | "omit"
  | "pick_as_nullable"
  | "pick_as_it_is"
  | "extra_nullable"
  | "extra_required";

export function MergeType<T extends Type<unknown>[], R = T[number]>(
  ...args: T
): R {
  const len = args.length;

  if (len === 0) {
    return class {} as R;
  } else if (len === 1) {
    return args.pop() as R;
  }

  return args.reduce((first, second) => IntersectionType(first, second)) as R;
}
