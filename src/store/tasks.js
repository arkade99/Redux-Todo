import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
    addTask: (state, action) => {
      console.log("Task  state-action", state, action);
      state.push({
        id: id++,
        task: action.payload.task,
        completed: false,
      });
    },
    completedTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
      console.log("state-action", state, action);
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = true;
    },
  },
});

// console.log("taskSlice", taskSlice.actions);
// console.log("taskSlice2", taskSlice.reducer);

export const { getTasks, addTask, completedTask, removeTask } =
  taskSlice.actions;

export default taskSlice.reducer;
