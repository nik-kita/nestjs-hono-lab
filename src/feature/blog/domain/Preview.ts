import { PickType } from "@nestjs/swagger";
import { Post } from "./Post.ts";

export class Preview extends PickType(Post, [
  "_id",
  "title",
]) {}
