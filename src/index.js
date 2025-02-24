import store from "./store/configurestore";
import { getTasks } from "./store/tasks";
import axios from "axios";

const gettingTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/tasks");
    console.log(response);
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: "Show_Error", payload: { error: error.message } });
  }
};

gettingTasks();
