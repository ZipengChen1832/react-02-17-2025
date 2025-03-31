import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../reducers";
import {
  addTodo,
  removeTodo,
  Todo,
  toggleTodo,
  setTodos,
} from "../reducers/todosReducer";
import { FormEvent, useEffect, useState } from "react";
import todosAPI from "../todosAPI";

export default function TodosList() {
  const todos = useSelector((state: IRootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    todosAPI.getAll().then((todos) => {
      dispatch(setTodos(todos));
    });
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
  const dispatch = useDispatch();

  const handleRemove = () => {
    todosAPI.deleteById(id).then(() => {
      dispatch(removeTodo(id));
    });
  };

  const handleToggle = () => {
    todosAPI.toggle(id, !completed).then(() => {
      dispatch(toggleTodo(id));
    });
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
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      text: newTodoTask,
      completed: false,
    };

    todosAPI.add(newTodo).then((todo) => {
      dispatch(addTodo(todo));
    });

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
