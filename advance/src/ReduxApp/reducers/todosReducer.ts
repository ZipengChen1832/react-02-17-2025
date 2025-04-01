import store from "../store";
import todosAPI from "../todosAPI";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type NewTodo = Omit<Todo, "id">;

export default function todosReducer(state: Todo[] = [], action: any): Todo[] {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

function setTodos(todos: Todo[]) {
  return {
    type: "SET_TODOS",
    payload: todos,
  };
}

function addTodo(newTodo: Todo) {
  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
}

function removeTodo(id: number) {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
}

function toggleTodo(id: number) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

type DispatchType = typeof store.dispatch;

// this function is called a thunk
export function fetchTodosAsync() {
  return function (dispatch: DispatchType) {
    todosAPI.getAll().then((todos) => {
      dispatch(setTodos(todos));
    });
  };
}

export function addTodoAsync(newTodo: NewTodo) {
  return function (dispatch: DispatchType) {
    todosAPI.add(newTodo).then((todo) => {
      dispatch(addTodo(todo));
    });
  };
}

export function removeTodoAsync(id: number) {
  return function (dispatch: DispatchType) {
    todosAPI.deleteById(id).then(() => {
      dispatch(removeTodo(id));
    });
  };
}

export function toggleTodoAsync(id: number, newStatus: boolean) {
  console.log("id", id);
  console.log("newStatus", newStatus);
  return function (dispatch: DispatchType) {
    todosAPI.toggle(id, newStatus).then(() => {
      dispatch(toggleTodo(id));
    });
  };
}
