let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let nameElement = document.querySelector("#myName");
let dayElement = document.querySelector(".day");
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let hour, minute, second, day, myName;
myName = window.prompt(" Adınız nedir? ");
nameElement.innerHTML = myName;

setInterval(function(){
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    second = new Date().getSeconds();
    day = new Date().getDay();

    hourElement.innerHTML = hour < 10 ? `0${hour}` : hour;
    minuteElement.innerHTML = minute < 10 ? `0${minute}` : minute;
    secondElement.innerHTML = second < 10 ? `0${second}` : second;
    dayElement.innerHTML = days[day];

},1000);