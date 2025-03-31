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

export function setTodos(todos: Todo[]) {
  return {
    type: "SET_TODOS",
    payload: todos,
  };
}

export function addTodo(newTodo: Todo) {
  return {
    type: "ADD_TODO",
    payload: newTodo,
  };
}

export function removeTodo(id: number) {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
}

export function toggleTodo(id: number) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}
