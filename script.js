let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsContainer = document.getElementById('laps');

function updateDisplay() {
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    lapsContainer.innerHTML = '';
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function addLap() {
    const lapTime = ${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent};
    const lapElement = document.createElement('div');
    lapElement.className = 'lap';
    lapElement.textContent = Lap: ${lapTime};
    lapsContainer.appendChild(lapElement);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', addLap);

updateDisplay();
