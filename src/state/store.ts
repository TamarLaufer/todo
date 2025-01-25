import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./tasks/taskSlice";
import userSlice from "./users/userSlice";

export const store = configureStore({
  reducer: { task: taskSlice, user: userSlice },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
