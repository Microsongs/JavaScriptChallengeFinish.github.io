const workDiv = document.querySelector(".js-worklist"),
    workForm = workDiv.querySelector("form"),
    workInput = workForm.querySelector("input");
    ul = workDiv.querySelector("ul");

const WORK = "work";

let workToDos = [];

// 프로그램이 시작될 때 실행되는 함수
function init(){
    loadData();
    workForm.addEventListener("submit",(event)=>{
        // console.log(event.target.value);
        event.preventDefault();
        const currentValue = workInput.value;
        addToDo(currentValue);
        workInput.value = "";
    });
}

// 일을 추가하는 함수
function addToDo(text, id = "X"){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const changeBtn = document.createElement("button");
    const span = document.createElement("span");

    // id값이 없는 경우 -> id값 생성
    if(id === "X"){
        id = new Date().getTime();
    }

    // task를 삭제하는 버튼의 이벤트리스너
    delBtn.addEventListener("click",(event)=>{
        const btn = event.target;
        const li = btn.parentNode;
        ul.removeChild(li);
        
        const cleanToDos = workToDos.filter((work)=>{
            return parseInt(work.id) !== parseInt(li.id);
        });
        workToDos = cleanToDos;
        saveWork();
    });
    // task를 변경하는 버튼의 이벤트리스너
    changeBtn.addEventListener("click",(event)=>{
        const btn = event.target;
        const li = btn.parentNode;

        const work = prompt("Please enter the work you want to change.","What's your new work?");

        li.value = work;
        li.childNodes[0].innerText = work;
        workToDos.forEach((data)=>{
            if(parseInt(li.id) === parseInt(data.id)){
                data.text = work;
            }
        })
        saveWork();
    });
    span.innerText = text;
    changeBtn.innerText = "🔄"
    delBtn.innerText = "❌";
    changeBtn.classList.add("taskBtn");
    delBtn.classList.add("taskBtn");


    li.appendChild(span);
    li.appendChild(changeBtn);
    li.appendChild(delBtn);
    li.id = id;
    const Obj = {
        text:text,
        id:id
    };
    ul.appendChild(li);
    workToDos.push(Obj);
    saveWork();
}

function saveWork(){
    localStorage.setItem(WORK,JSON.stringify(workToDos));
}

// localStorage에서 데이터를 불러오는 함수
function loadData(){
    const loadWork = localStorage.getItem(WORK);
    if(loadWork !== null){
        const parsedWork = JSON.parse(loadWork);
        parsedWork.forEach((work)=>{
            addToDo(work.text, work.id);
        });
    }
}

init();