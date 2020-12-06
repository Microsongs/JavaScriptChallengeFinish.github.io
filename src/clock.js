
const div = document.querySelector(".js-clock"),
    clock = div.querySelector("h2");

// 프로그램이 시작되면 실행되는 함수
function init(){
    setClock();
    setInterval(setClock,1000);
}

// click의 시간을 설정하는 함수
function setClock(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

init();