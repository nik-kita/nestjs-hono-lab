import { TaskStatus } from "../domain/TaskStatus.ts";
import { TaskType } from "../domain/TaskType.ts";
import { Dto_Task } from "../dto/Dto_Task.dto.ts";

const tasks: Dto_Task[] = [
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
