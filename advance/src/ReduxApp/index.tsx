import { Provider } from "react-redux";
import store from "./store";
import TodosList from "./components/TodosList";
import Counter from "./components/Counter";

export default function ReduxApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TodosList />
        <Counter />
      </div>
    </Provider>
  );
}
