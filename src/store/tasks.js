//Action Types
const ADD_TASK = "ADD_TASK";
const TASK_COMPLETED = "COMPLETED_TASK";
const REMOVE_TASK = "REMOVE_TASK";

//Actions
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: { task },
  };
};

export const completedTask = (taskid) => {
  return {
    type: TASK_COMPLETED,
    payload: { id: taskid },
  };
};

export const removeTask = (taskid) => {
  return {
    type: REMOVE_TASK,
    payload: { id: taskid },
  };
};

export const fetchTodo = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
  const task = await response.json();
  dispatch(addTask(task.title));
  //dispatch(addTask(task));
};

//Reducer
let id = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: id++, task: action.payload.task, completed: false },
      ];
    case TASK_COMPLETED:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
