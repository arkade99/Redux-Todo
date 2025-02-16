import { createAction, createReducer } from "@reduxjs/toolkit";
//Actions
export const addTask = createAction("ADD_TASK");
export const completedTask = createAction("COMPLETED_TASK");
export const removeTask = createAction("REMOVE_TASK");
console.log("addTask", addTask());
//Reducer
let id = 0;

createReducer([], {
  ADD_TASK: (state, action) => {
    state.push({
      id: id++,
      task: action,
    });
  },
  REMOVE_TASK: () => {},
  COMPLETED_TASK: () => {},
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        { id: id++, task: action.payload.task, completed: false },
      ];
    case completedTask.type:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    case removeTask.type:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
