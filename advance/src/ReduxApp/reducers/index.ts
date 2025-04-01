import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  count: countReducer,
});

export default rootReducer;
