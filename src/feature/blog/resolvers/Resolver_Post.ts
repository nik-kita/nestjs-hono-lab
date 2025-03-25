import { Injectable } from "@nestjs/common";
import { Resolver } from "@nestjs/graphql";
import {
  IDataProvider_Base,
  ResolverBase,
} from "../../../common/Resolver_Base.ts";
import { Post } from "../domain/Post.ts";

@Injectable()
export class DataProvider_Post implements IDataProvider_Base<Post> {
  async get_many(): Promise<Post[]> {
    const data = await Promise.resolve([] as Post[]);

    return data;
  }
}

@Resolver(() => Post)
export class Resolver_Post extends ResolverBase({
  class_ref: Post,
  suffix: "Post",
}) {
  constructor(public data_provider: DataProvider_Post) {
    super();
  }
}
