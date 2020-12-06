const nameDiv = document.querySelector(".js-name"),
    form = nameDiv.querySelector("form"),
    input = nameDiv.querySelector("input"),
    h2 = nameDiv.querySelector("h2");

const USER_LS = "user";

// 함수가 처음 시작될 때 실행되는 함수
function init(){
    getName();
}

// localStorage에서 이름을 가져오는 함수
function getName(){
    const myName = localStorage.getItem("user");
    // 이름이 있을 경우 h2의 이름을 설정
    if(myName){
        paintName(myName);
    }
    // 이름이 없을 경우 이름을 설정
    else{
        askForName();
    }
}

// 입력을 받았을 때 실행되는 event
function handleSubmit(event){
    console.log(form);
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

// 이름을 물어보는 함수
function askForName(){
    console.log(form);
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function paintName(name){
    form.classList.remove("showing");
    form.classList.add("noneShowing");
    h2.classList.add("showing");
    h2.innerText = `${name}`;
    // 이름 수정 btn
    const fixBtn = document.createElement("button");
    fixBtn.classList.add("nameBtn");
    fixBtn.innerText = "🔄";
    h2.appendChild(fixBtn);
    fixBtn.addEventListener("click", (event)=>{
        const name = prompt("Please enter the name you want to change.","What's your new name?");
        paintName(name);
        localStorage.setItem("user",name);
    })
}

// localStorage에 name을 저장하는 함수
function saveName(name){
    localStorage.setItem("user",name)
}

init();
