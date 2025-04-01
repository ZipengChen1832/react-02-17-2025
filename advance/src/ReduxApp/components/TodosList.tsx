import {
  Todo,
  addTodoAsync,
  fetchTodosAsync,
  removeTodoAsync,
  toggleTodoAsync,
} from "../reducers/todosReducer";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";

export default function TodosList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  return (
    <div>
      <div>Todo</div>
      <NewTodoForm />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  const { id, completed, text } = todo;
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeTodoAsync(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodoAsync(id, !completed));
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <span>{text}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

function NewTodoForm() {
  const [newTodoTask, setNewTodoTask] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      text: newTodoTask,
      completed: false,
    };

    dispatch(addTodoAsync(newTodo));
    setNewTodoTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTodoTask}
        onChange={(e) => setNewTodoTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}
