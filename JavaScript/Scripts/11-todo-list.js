let todoList1 = []; // to store the todo items
let todoList2 = [];
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
  console.log(todoList1);
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
  console.log(todoList2);

  // call the render function to update the UI
  renderTodoSimple2();
}

function renderTodoSimple2() {
  let toDoListHTML = "";

  // loop through the array and create a <p> element for each todo
  for (let i = 0; i < todoList2.length; i++) {
    toDoListHTML += `
          <p>${todoList2[i]}</p>
          `;
  }

  document.querySelector(".js-todo-list-simple-2").innerHTML = toDoListHTML; // to update the UI
}
