const inputId = document.querySelector("#loginForm input:first-child");
const inputBtn = document.querySelector("#loginForm input:nth-child(2)")
const inputh2 = document.querySelector("#loginForm h2")

const loginForm = document.querySelectorAll("#loginForm")
console.dirxml(loginForm);

let myLocalStorage=[]

function loginProcess(event){
    event.preventDefault();
    console.log("hi");
    const id = inputId.value;
    if(localStorage.getItem('user') === null){
        localStorage.setItem('user', id);  
    }
    paintLogin();
}

function paintLogin(){
    if(localStorage.getItem('user') !== null){
        console.log("remover~")
        inputh2.classList.remove("blank")
        inputh2.innerHTML=`hello ${localStorage.getItem('user')}`

        inputId.classList.add("blank");
        inputBtn.classList.add("blank");}
}

paintLogin();

inputBtn.addEventListener("click", loginProcess)