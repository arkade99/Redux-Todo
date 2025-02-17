import store from "./store/configurestore";
import { EmployeeStore } from "./store/employees";
import { addTask, completedTask, removeTask } from "./store/tasks";
import { addEmployee } from "./store/employees";

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask({ task: "Read Redux" }));
// store.dispatch(addTask({ task: "Read a book" }));
// console.log(store.getState());
// //unsubscribe();
// store.dispatch(completedTask({ id: 0 }));
// console.log(store.getState());
// store.dispatch(removeTask({ id: 1 }));
// //store.dispatch(fetchTodo());
// console.log(store.getState());

//EmployeeStore.dispatch(addEmployee({ EmpName: "Jacob" }));
store.dispatch(addEmployee({ name: "Jacob" }));
console.log(store.getState());
