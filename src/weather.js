const weather = document.querySelector("js-weather"),
    span = document.querySelector(".weather");

const API_KEY = "60f939f5dbbdbd1e7053da1c19fb3054";
const COORDS = 'coords';

// 프로그램 시작 시 처음으로 싫애되는 함수
function init(){
    loadCoords();
}

// url을 호출하여 weather 정보를 가져옴
function getWeather(latitude, longitude){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(response=>response.json()
    ).then(json=>{
        const temperature = json.main.temp;
        const place = json.name;
        span.innerText = `${temperature}℃ @ ${place}`
    });
}

// Coords를 저장함
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// longitude와 latitude를 가져와 localStorage에 저장하고 날씨정보를 가져옴
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

// 현재 위치를 가져오는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,()=>(console.log("Error")));
}

// Coords 정보를 불러오는 함수
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

init();