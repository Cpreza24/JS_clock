let clock = document.querySelector('.clock');

//Variables to get the current hours minutes and seconds
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSeconds = date.getSeconds();


setInterval(() => {
    date = new Date();
    currentHour = date.getHours();
    currentMinute = date.getMinutes();
    currentSeconds = date.getSeconds();
    clock.innerHTML = currentHour + ':' + currentMinute + ':' + currentSeconds;
}, 1000);

