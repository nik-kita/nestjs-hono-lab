import { Type } from "@nestjs/common";
import {
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from "@nestjs/graphql";

export function CombineType<
  T extends Type<unknown>,
  U extends Partial<
    Record<keyof T["prototype"], InstructionType | Type<unknown>>
  >,
>(
  source: T,
  instruction: U,
): Source<T, U> {
  const {
    omit,
    pick,
    pick_force_nullable,
    extra,
  } = Object.entries(instruction).reduce(
    (acc, [k, v]) => {
      if (!(k && v)) return acc;
      if (typeof v === "string") {
        acc[v as InstructionType].push(k as keyof T);
      } else {
        acc.extra[k] = v;
      }

      return acc;
    },
    {
      extra: {} as Record<string, Type<unknown>>,
      omit: [] as (keyof T)[],
      pick: [] as (keyof T)[],
      pick_force_nullable: [] as (keyof T)[],
    } satisfies Record<InstructionType, (keyof T)[]> & {
      extra: Record<string, Type<unknown>>;
    },
  );

  @ObjectType({
    isAbstract: true,
  })
  class GeneratedObjectType extends MergeType(
    PartialType(PickType(source, pick_force_nullable as never[])),
    PickType(source, pick as never[]),
    OmitType(source, omit as never[]),
    ...Object.entries(extra).map(([prop, clazz]) =>
      PickType(clazz, [prop] as never[])
    ),
  ) {
  }

  return GeneratedObjectType as Source<T, U>;
}

type Source<
  T extends Type<unknown>,
  U extends Partial<
    Record<keyof T["prototype"], InstructionType | Type<unknown>>
  >,
> = Type<
  {
    [
      K in keyof U as K extends string ? U[K] extends "omit" ? never
        : K
        : never
    ]: U[K] extends "pick_force_nullable" ? (T["prototype"][K] | null)
      : U[K] extends "pick" ? T["prototype"][K]
      : U[K] extends Type<Record<K, unknown>> ? U[K]["prototype"][K]
      : never;
  }
>;

type InstructionType =
  | "omit"
  | "pick_force_nullable"
  | "pick";

function MergeType<
  T extends Type<unknown>[],
  R extends Type<
    // deno-lint-ignore no-explicit-any
    any
  >["prototype"] = {
    [K in keyof T[number]["prototype"] as K extends string ? K : never]:
      T[number]["prototype"][K] extends never ? never
        : T[number]["prototype"][K];
  },
>(
  ...args: T
): Type<R> {
  const len = args.length;

  if (len === 0) {
    return class {} as Type<R>;
  } else if (len === 1) {
    return args.pop() as Type<R>;
  }

  return args.reduce((first, second) =>
    IntersectionType(first, second)
  ) as Type<R>;
}
