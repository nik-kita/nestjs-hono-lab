import { registerEnumType } from "@nestjs/graphql";

export enum TaskType {
  ONCE = "ONCE",
  REPEAT = "REPEAT",
}

registerEnumType(TaskType, {
  name: "TaskType",
  description: "The behavior of task management is related on it`s type",
});
