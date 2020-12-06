const body = document.querySelector("body");

const IMG_NUMBER = 10;

// 배경을 채워주는 함수
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    console.log("1");
}

function init(){
    const rand = Math.ceil(Math.random() * IMG_NUMBER)
    paintImage(rand);
}

init();