import { TaskType } from "src/state/tasks/taskSlice";

export const mockTasks: TaskType[] = [
  {
    id: '1',
    title: 'string',
    date: 'string',
    startTime: 'string',
    endTime: 'string',
    icon: undefined,
    status: "completed",
    category: 'string',
    description: 'string',
    reminder: 'string',
    priority: "high",
    participants: [''],
  }
];
