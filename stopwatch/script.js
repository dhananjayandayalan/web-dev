// Assigning the Values to variable - Step 1 
var startBtn = document.querySelector('.start');
var stopBtn = document.querySelector('.stop');
var resetBtn = document.querySelector('.reset');
var timerEl = document.querySelector('p.showTime');


// Checking....
// console.log(startBtn);
// console.log(stopBtn);
// console.log(resetBtn);
// console.log(timer.innerHTML);

var secondCount = 0;
function showTime() {
    var time = "";
    var hour = Math.floor(secondCount / 3600);
    var minute = Math.floor((secondCount % 3600) / 60);
    var second = Math.floor(secondCount % 60);

    //Hours
    if(hour <= 9) {
        time += "0" + hour + " : ";
    } else {
        time += hour + " : ";
    }

    // Minutes
    if(minute <= 9) {
        time += "0" + minute + " : ";
    } else {
        time += minute + " : ";
    }

    // Seconds
    if(second <= 9) {
        time += "0" + second;
    } else {
        time += second;
    }

    timerEl.innerHTML = time;
    secondCount++;
}

//Stop Watch Actions
startBtn.addEventListener('click', startfn);
stopBtn.addEventListener('click', stopfn);
resetBtn.addEventListener('click', resetfn);

//Functions for the stop watch
var timer;
function startfn() {
    timer = setInterval(showTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopfn() {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetfn() {
    clearInterval(timer);
    secondCount = 0;
    showTime();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

