const body = document.querySelector("body");

const IMG_NUMBER = 10;

let rand = 0;

// 배경을 채워주는 함수
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function paintMobileImage(imgNumber){
    const image = new Image();
    smallImg = parseInt(imgNumber) + 10;
    image.src = `images/${smallImg}.jpg`;
    //image.src = "images/11.jpg";
    console.log("dd");
    image.classList.add("bgImage");
    body.appendChild(image);
}

function checkWindow(){
    if(window.innerWidth <= 700){
        window.resizeTo(600,350);
        paintMobileImage(rand);
    }
    else{
        paintImage(rand);
    }
}

window.onload = ()=>{
    window.addEventListener('resize',()=>{
        checkWindow();    
    })
}

function init(){
    rand = Math.ceil(Math.random() * IMG_NUMBER)
    checkWindow();
}

init();