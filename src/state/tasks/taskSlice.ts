import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockTasks } from "src/helpers/mockData";

export interface TaskType {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  icon?: string;
  status: "pending" | "completed";
  category: string;
  description?: string;
  reminder?: string;
  priority?: "low" | "medium" | "high";
  participants?: string[];
}

interface TaskSliceType {
  tasks: TaskType[];
}

const initialState: TaskSliceType = {
  tasks: mockTasks,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<TaskType>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    resetTasks: (state)=>{
      state.tasks = [];
    }
  },
});

export const { addTask, updateTask, deleteTask, resetTasks } = taskSlice.actions;
export default taskSlice.reducer;
