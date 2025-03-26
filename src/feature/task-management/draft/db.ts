import { TaskStatus } from "../domain/TaskStatus.enum.ts";
import { TaskType } from "../domain/TaskType.enum.ts";
import { Task } from "../dto/Task.dto.ts";

const tasks: Task[] = [
  {
    _id: "Task_mock_" + Date.now(),
    created_at: new Date(),
    updated_at: new Date(),
    status: TaskStatus.IN_PROGRESS,
    title: "demo",
    type: TaskType.REPEAT,
  },
];

export const db = {
  tasks,
};
