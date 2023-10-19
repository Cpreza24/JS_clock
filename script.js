let clock = document.querySelector('.clock');

//Variables to get the current hours minutes and seconds
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSeconds = date.getSeconds();

console.log(currentHour + ' ' + currentMinute + ' ' + currentSeconds);

//adding the current time to the clock element
clock.innerHTML = currentHour + ':' + currentMinute + ':' +currentSeconds;


// function refreshSeconds() {
//     setInterval(console.log('The second is ' + currentSeconds))
//     ,1000
//     };

let count = 0;

setInterval(() => {
    console.log(currentSeconds++)
}, 1000);

