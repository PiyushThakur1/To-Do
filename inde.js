// let currentIndex = 3;
// function addtodo() {
//   const inputEl = document.getElementById("inp");
//   const textNode = document.createElement("div");
//   //textNode.innerHTML = "<div id='todo-" + currentIndex + "'><h4>" + inputEl.value + '</h4><button onclick="deleteTodo(' + currentIndex + ') ">Delete</button>;

//   textNode.innerHTML =
//     "<div id ='todo-" +
//     currentIndex +
//     "'><h4>" +
//     inputEl.value +
//     '</h4><button onclick = "deleteTodo(' +
//     currentIndex +
//     ') ">Delete</button>' +
//     "</div>";
//   const parentEl = document.getElementById("todos");
//   parentEl.appendChild(textNode);
// }

// function deleteTodo(index) {
//   const element = document.getElementById("todo-" + index);
//   element.parentNode.removeChild(element);
// }

let currentIndex = 3;
function addtodo() {
  const inputEl = document.getElementById("inp");
  const todoText = inputEl.value.trim();
  if (todoText === "") {
    alert("Please enter a todo");
    return;
  }

  const parentEl = document.getElementById("todos");

  ///new todo div
  const newtodo = document.createElement("div");
  newtodo.setAttribute("id", "todo-" + currentIndex);

  //new heading
  const newheading = document.createElement("h4");
  newheading.textContent = currentIndex + ". " + todoText;

  //new button
  const newbutton = document.createElement("button");
  newbutton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");
  newbutton.textContent = "Delete";
  newtodo.appendChild(newheading);
  newtodo.appendChild(newbutton);

  parentEl.appendChild(newtodo);

  currentIndex++;

  inputEl.value = "";
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  if (element) {
    element.parentElement.removeChild(element);
  }
}
