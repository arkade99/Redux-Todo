import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/http";
import error from "./middleware/error";

let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      console.log("Task  state-action", state, action);
      state.tasks.push({
        id: id++,
        task: action.payload.task,
        completed: false,
      });
    },
    completedTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.tasks.splice(index, 1);
      console.log("state-action", state, action);
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.tasks[index].completed = true;
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.tasks = action.payload.error;
      state.loading = true;
    },
  },
});

// console.log("taskSlice", taskSlice.actions);
// console.log("taskSlice2", taskSlice.reducer);

export const { getTasks, addTask, completedTask, removeTask } =
  taskSlice.actions;

export default taskSlice.reducer;
