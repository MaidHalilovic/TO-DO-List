//input in vanilla js

function addTodo() {
  const todoInput = document.getElementById("new-todo");
  const todoList = document.getElementById("todo-list");

  if (todoInput.value.trim() !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
}
