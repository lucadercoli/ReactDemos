import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import appReducer from "./reducers";

const appStore = createStore(appReducer, {}, applyMiddleware(logger));

export default appStore;