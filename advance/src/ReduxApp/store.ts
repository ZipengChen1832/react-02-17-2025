import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";

// other middlewares:
// redux saga, redux persist

// https://redux.js.org/understanding/history-and-design/middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
