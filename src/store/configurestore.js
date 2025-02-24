import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
import log from "../middleware/log";
import error from "../middleware/error";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log, error],
});

export default store;
