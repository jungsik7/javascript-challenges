const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function deleteToDo(event) {
    const parentElement = event.target.parentElement;
    const toDoId = parseInt(parentElement.id);

    let filterToDos = toDos.filter((value) => {
        console.log(value, toDoId);
        return (value.id !== toDoId);
    });
    toDos = filterToDos;
    console.log(filterToDos);
    parentElement.remove();
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const htmlButton = document.createElement("button");

    li.id = newToDo.id;
    li.appendChild(span);
    li.appendChild(htmlButton);
    span.innerText = newToDo.text;
    htmlButton.innerText = "X"

    htmlButton.addEventListener("click", deleteToDo);

    const ul = document.getElementById("todo-list");
    ul.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {id:Date.now(), text: newTodo};
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos != null) {
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element);
    });
}
