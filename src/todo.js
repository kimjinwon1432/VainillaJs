const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("span input:first-child")
const toDoList = document.getElementById("todo-list");
let toDos =[]; 
//when going to do painted todolist i will push texts into the array
// for update toDos -> use "let"
//gives id ot toDos texts... for delete them
const TODOS_KEY ="todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   
}

function deleteToDo(event){
        //target is clicked element
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id!== parseInt(li.id));
    saveTodos();
}

function paintToDo(newTodo){ //painting Todo
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    li.id = newTodo.id;
    span.innerHTML=`${newTodo["text"]}`;

    button.innerText="❌";    
    button.addEventListener("click", deleteToDo);
    li.appendChild(button); 
    li.appendChild(span);
    toDoList.appendChild(li);   
}
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ='';
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}
toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item){
    console.log("Hello!", item )
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // coming form localStorage String turn it a live object
    const parsedToDos= JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}