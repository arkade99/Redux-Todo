import store from "./store/configurestore";
import { fetchTasks, getTasks } from "./store/tasks";
import axios from "axios";

// const gettingTasks = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     console.log(response);
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: "Show_Error", payload: { error: error.message } });
//   }
// };

// gettingTasks();

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/tasks",
    onSuccess: "tasks/getTasks",
    onError: "SHOW_ERROR",
  },
});
