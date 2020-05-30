console.log("time to start the timer!");


const currentTime = document.querySelector('p');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
let minutes = 0;
let seconds = 0;


if (seconds < 10) {
    currentTime.innerHTML = `${minutes}:0${seconds}`;
} else {
    currentTime.innerHTML = `${minutes}:${seconds}`;
};

function updateTime() {
    if (seconds < 59) {
        seconds += 1;
    } else {
        minutes += 1;
        seconds = 0;
    }
    if (seconds < 10) {
        currentTime.innerHTML = `${minutes}:0${seconds}`;
    } else {
        currentTime.innerHTML = `${minutes}:${seconds}`;
    };
};

startBtn.addEventListener('click', function() {
    return timerInterval = setInterval(updateTime, 1000);
});

stopBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    return currentTime.innerHTML = `${minutes}:0${seconds}`;
});


