import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rootReducer  from "./reducers/todoReducer";

const logger = createLogger({
    collapsed: true
  });

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default store;