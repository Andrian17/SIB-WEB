document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

let todos = [];
const RENDER_EVENT = "render-todo";

function addToDo() {
  const textTodo = document.getElementById("title").value;
  const timestamp = document.getElementById("date").value;

  const generatedID = +new Date();
  const todoObject = generateTodoObject(
    generatedID,
    textTodo,
    timestamp,
    false
  );
  todos.push(todoObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function generateTodoObject(id, task, timestamp, isComplete) {
  return {
    id,
    task,
    timestamp,
    isComplete,
  };
}

document.addEventListener(RENDER_EVENT, function () {
  //console.log(todos);

  const unCompleteTodoList = document.getElementById("todos");
  unCompleteTodoList.innerHTML = "";

  const completeTodoList = document.getElementById("completed-todos");
  completeTodoList.innerHTML = "";

  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);

    if (todoItem.isComplete == false) {
      unCompleteTodoList.append(todoElement);
    } else {
      completeTodoList.append(todoElement);
    }
  }
});

function makeTodo(todoObject) {
  const title = document.createElement("h2");
  title.innerText = todoObject.task;

  const textTimesamp = document.createElement("p");
  textTimesamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(title, textTimesamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  if (todoObject.isComplete) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");
    undoButton.addEventListener("click", () => {
      undoTaskFromCompleted(todoObject.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.addEventListener("click", () => {
      removeTaskFromComplete(todoObject.id);
    });
    container.append(undoButton, trashButton);
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.addEventListener("click", () => {
      addTaskFromCompleted(todoObject.id);
    });

    container.append(checkButton);
  }

  return container;
}

function addTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) {
    return;
  }

  todoTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id == todoId) {
      return todoItem;
    }
  }
  return null;
}

function removeTaskFromComplete(todoId) {
  const todoTarget = findTodoIndex(todoId);
  if (todoTarget == -1) {
    return;
  }

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);
  if (todoTarget == null) {
    return;
  }
  todoTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodoIndex(todoId) {
  for (const key in todos) {
    if (todos[key].id === todoId) {
      return key;
    }
  }
  return -1;
}

const SAVED_EVENT = "saved-todo";
const STORAGE_KEY = "TODO_APPS";

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, () => {
  console.log(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);
  if (data !== null) {
    for (const todo of data) {
      todos.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}
