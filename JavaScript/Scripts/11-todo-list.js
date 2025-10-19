let todoList1 = []; // to store the todo items
let todoList2 = [];
let todoList3 = [];

renderTodoSimple2(); // to render the initial empty list

function addTodoSimple() {
  const toDoValue = document.querySelector(".js-todo-name-simple").value;

  // to check if the input is empty
  if (toDoValue === "") {
    alert("Enter some valid values");
    return;
  }

  todoList1.push(toDoValue);
  document.querySelector(".js-todo-name-simple").value = "";
  return;
}
function addTodoSimple2() {
  const toDoValue = document.querySelector(".js-todo-name-simple-2").value;

  // to check if the input is empty
  if (toDoValue === "") {
    alert("Enter some valid values");
    return;
  }

  todoList2.push(toDoValue);
  document.querySelector(".js-todo-name-simple-2").value = "";

  // call the render function to update the UI
  renderTodoSimple2();
}

function renderTodoSimple2() {
  let toDoListHTML = "";

  // loop through the array and create a <p> element for each todo
  for (let i = 0; i < todoList2.length; i++) {
    toDoListHTML += `
          <p>
            ${todoList2[i]}
          </p>
          `;
  }
  document.querySelector(".js-todo-list-simple-2").innerHTML = toDoListHTML; // to update the UI
}

function addTodoSimple3() {
  const toDoValue = document.querySelector(".js-todo-name-simple-3").value;

  // to check if the input is empty
  if (toDoValue === "") {
    alert("Enter some valid values");
    return;
  }
  const date = document.querySelector(".js-due-date-input").value;

  todoList3.push({
    name: toDoValue,
    dueDate: date,
  });
  document.querySelector(".js-todo-name-simple-3").value = "";
  document.querySelector(".js-due-date-input").value = "";

  // call the render function to update the UI
  renderTodoSimple3();
}

function renderTodoSimple3() {
  let toDoListHTML = "";

  // loop through the array and create a <p> element for each todo
  for (let i = 0; i < todoList3.length; i++) {
    const { name, dueDate } = todoList3[i];
    toDoListHTML += `
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
            todoList3.splice(${i}, 1);
            renderTodoSimple3();
          " class="cs-delete-btn">Delete</button>
          
          `;
  }

  document.querySelector(".js-todo-list-simple-3").innerHTML = toDoListHTML; // to update the UI
}
