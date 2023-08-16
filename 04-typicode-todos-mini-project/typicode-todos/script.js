const todoForm = document.getElementById("todo-form");
const titleInput = document.getElementById("title");
const todoList = document.getElementById("todo-list");

// Fetch and display todos
function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => response.json())
        .then((todos) => {
            todoList.innerHTML = "";

            todos.forEach((todo) => {
                createTodoItem(todo.title, todo.completed);
            });
        })
        .catch((error) => {
            console.error("Error fetching todos:", error);
        });
}

// Create a new todo item
function createTodoItem(title, completed) {
    const todoItem = document.createElement("div");
    todoItem.textContent = title;
    todoItem.className = completed ? "done" : "";

    // Add click event listener
    todoItem.addEventListener("click", () => {
        todoItem.classList.toggle("done");
    });

    todoItem.addEventListener("dblclick", () => {
        // Double click: Delete
        todoList.removeChild(todoItem);
    });

    todoList.appendChild(todoItem);
}

// Add todo
function addTodo() {
    const title = titleInput.value;
    if (title) {
        createTodoItem(title, false);
        titleInput.value = "";
    }
}

// Submit event listener for the todo form
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
});

// Initial fetch of todos
fetchTodos();