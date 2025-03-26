import { TaskType } from "./TaskType.enum.ts";
import { ITopic } from "./ITopic.interface.ts";
import { TaskStatus } from "./TaskStatus.enum.ts";

export interface ITask {
  type: TaskType;
  status: TaskStatus;
  title: string;
  description?: string | null;
  topics: ITopic[];
  subtasks: ITask[];
  parent_task?: ITask | null;
  blockers: ITask[];
}
