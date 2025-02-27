class TodosModel {
  #todos = [];

  constructor() {
    this.#todos = [];
  }

  setTodos(todos) {
    this.#todos = todos;
  }

  getTodos() {
    return this.#todos;
  }

  addTodo(newTodo) {
    this.#todos.push(newTodo);
  }

  removeTodo(id) {
    // this filter is how you remove an item from a list
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}

class TodosView {
  constructor() {
    this.todosList = document.querySelector(".todos-list");
    this.newTodoForm = document.querySelector(".new-todo-form");
    this.newTodoInput = document.querySelector("#new-todo-input");
  }

  renderTodos(todos) {
    this.todosList.innerHTML = "";
    for (const todo of todos) {
      this.addTodo(todo);
    }
  }

  addTodo(newTodo) {
    const { id, title, completed } = newTodo;
    this.todosList.innerHTML += `
        <div class="todo" id="todo-${id}">
          <input type="checkbox" />
          <span class="todo__title">${title}</span>
          <button class="todo__delete">Delete</button>
        </div>
    `;
  }

  removeTodo(id) {
    const todoElement = document.getElementById(`todo-${id}`);
    todoElement.remove();
  }
}

class TodosController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  async init() {
    // fetch and render todos
    const todos = await todosAPI.getAll();
    this.model.setTodos(todos);
    this.view.renderTodos(todos);

    // set up event listeners
    this.setupAddEvent();
    this.setupDeleteEvent();
  }

  setupAddEvent() {
    this.view.newTodoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const newTodoTitle = this.view.newTodoInput.value;

      const newTodo = await todosAPI.add({
        title: newTodoTitle,
        completed: false,
      });
      this.model.addTodo(newTodo);
      this.view.addTodo(newTodo);
    });
  }

  setupDeleteEvent() {
    // event delegation
    this.view.todosList.addEventListener("click", async (e) => {
      if (e.target.classList.contains("todo__delete")) {
        const todoElem = e.target.parentElement;
        const id = todoElem.id.split("-")[1];
        await todosAPI.deleteById(id);
        this.model.removeTodo(id);
        this.view.removeTodo(id);
      }
    });
  }
}

const todosModel = new TodosModel();
const todosView = new TodosView();
const todosController = new TodosController(todosModel, todosView);
