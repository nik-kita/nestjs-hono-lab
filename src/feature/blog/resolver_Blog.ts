import { Query, Resolver } from "@nestjs/graphql";
import { Author } from "./domain/Author.ts";
import { Post } from "./domain/Post.ts";

@Resolver()
export class resolver_Blog {
  @Query(
    () => [Post],
  )
  async posts() {
    const posts = await Promise.resolve([]);

    return posts;
  }

  @Query(
    () => [Author],
  )
  async authors() {
    const authors = await Promise.resolve([]);

    return authors;
  }
}
