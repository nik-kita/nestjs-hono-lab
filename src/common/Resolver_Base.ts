import { Type } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";

export interface IDataProvider_Base<T> {
  get_many: () => Promise<T[]>;
}
export abstract class Resolver_Base<T> {
  abstract data_provider: IDataProvider_Base<T>;
}

export function ResolverBase<T>(configuration: {
  class_ref: Type<T>;
  suffix: string;
}): abstract new () => Resolver_Base<T> {
  const {
    class_ref,
    suffix,
  } = configuration;

  @Resolver({ isAbstract: true })
  abstract class Resolver_Base_Instance extends Resolver_Base<T> {
    @Query(() => [class_ref], { name: `findAll_${suffix}` })
    async findAll(): Promise<T[]> {
      const result = await this.data_provider.get_many();

      return result;
    }
  }

  return Resolver_Base_Instance;
}
