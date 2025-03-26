import { registerEnumType } from "@nestjs/graphql";

export enum TaskStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

registerEnumType(TaskStatus, {
  name: "TaskStatus",
  description:
    `The actual state of task processing. Default is <${TaskStatus.NOT_STARTED}>`,
});
