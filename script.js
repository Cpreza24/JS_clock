let clock = document.querySelector('.clock');
let toggleTimeButton = document.querySelector('.toggle');
let todaysDate = document.querySelector('.date');
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Variables to get the current hours minutes and seconds
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSeconds = date.getSeconds();
let currentDay = date.getDate();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let amPm;

toggleTimeButton.addEventListener('click', function(e) {
    if(toggleTimeButton.classList.contains('standard')) {
        toggleTimeButton.classList.remove('standard');
        toggleTimeButton.classList.add('military');
    } else {
        toggleTimeButton.classList.remove('military');
        toggleTimeButton.classList.add('standard');
    }
})

function getTime() {
    date = new Date();
    currentHour = date.getHours();
    currentMinute = date.getMinutes();
    currentSeconds = date.getSeconds();

    if(currentSeconds < 10) {
        currentSeconds = '0' + currentSeconds;
    } else {
        currentSeconds
    }

    if(currentMinute < 10) {
        currentMinute = '0' + currentMinute;
    } else {
        currentMinute;
    }

    if(currentHour >= 12) {
        currentHour = currentHour - 12;
        amPm = 'PM'
    }  else {
        amPm = 'AM'
    }

    if(toggleTimeButton.classList.contains('standard')) {
        clock.innerHTML = currentHour + ':' + currentMinute + ':' + currentSeconds + ' ' + amPm;
    } else if(toggleTimeButton.classList.contains('military')) {
        currentHour = currentHour + 12;
        clock.innerHTML = currentHour + ':' + currentMinute + ':' + currentSeconds
    }
}

function showDate() {
    todaysDate.innerHTML = month[currentMonth] + ' ' + currentDay + ', ' + currentYear;
};





onload = getTime();
showDate()
setInterval(() => {
    getTime();

}, 100);