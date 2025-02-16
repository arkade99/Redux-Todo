import { legacy_createStore as createStore } from "redux";
import reducer from "./tasks";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
