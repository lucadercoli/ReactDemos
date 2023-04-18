import { createStore } from "redux";
import appReducer from "./reducers";

const appStore = createStore(appReducer);

export default appStore;