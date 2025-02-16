import store from "./store/configurestore";
import { addTask, completedTask, removeTask } from "./store/tasks";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask("Read Redux"));
store.dispatch(addTask("Read a book"));
console.log(store.getState());
//unsubscribe();
store.dispatch(completedTask(0));
console.log(store.getState());
store.dispatch(removeTask(1));
//store.dispatch(fetchTodo());
console.log(store.getState());
