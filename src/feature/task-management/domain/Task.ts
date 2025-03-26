import { TaskStatus } from "./TaskStatus.ts";
import { TaskType } from "./TaskType.ts";
import { Topic } from "./Topic.ts";

export interface Task {
  type: TaskType;
  status: TaskStatus;
  title: string;
  description: string;
  topics: Topic[];
  subtasks: Task[];
  parent_task: Task;
  blockers: Task[];
}
