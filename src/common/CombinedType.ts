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
  U extends Partial<
    Record<keyof T["prototype"], InstructionType | Type<unknown>>
  >,
  P extends Type<
    {
      [
        K in keyof U as K extends never ? K extends string ? K
          : never
          : never
      ]: unknown;
    }
  > =
    // deno-lint-ignore no-explicit-any
    any,
> = Type<
  {
    [
      K in keyof U as K extends string ? U[K] extends "omit" ? never
        : K
        : never
    ]: U[K] extends "pick_force_nullable" ? (T["prototype"][K] | null)
      : U[K] extends "pick" ? T["prototype"][K]
      : U[K] extends Type<Record<K, unknown>> ? U[K]["prototype"][K]
      : K extends keyof P["prototype"] ? P["prototype"][K]
      : never;
  }
>;

export function CombineType<
  T extends Type<unknown>,
  U extends Partial<
    Record<keyof T["prototype"], InstructionType | Type<unknown>>
  >,
  P extends Type<
    {
      [
        K in keyof Source<T, U>["prototype"] as K extends never
          ? K extends string ? K
          : never
          : never
      ]: unknown;
    }
  >[] = [],
>(
  source: T,
  instruction: U,
  ...traits: P
): Source<T, U, P[number]["prototype"]> {
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
    ...traits as Type<unknown>[],
  ) {
  }

  return GeneratedObjectType as Source<T, U, P[number]["prototype"]>;
}

type InstructionType =
  | "omit"
  | "pick_force_nullable"
  | "pick";

export function MergeType<
  T extends Type<unknown>[],
  R = T[number]["prototype"],
>(
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
