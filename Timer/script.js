const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const button = document.getElementById('button');

let totalSeconds = 0;
let interval = null;

function update() {
    totalSeconds++;

    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

    hoursDisplay.textContent = String(hour).padStart(2, "0");
    minutesDisplay.textContent = String(minute).padStart(2, "0");
    secondsDisplay.textContent = String(second).padStart(2, "0");
}

button.addEventListener("click", () => {
    if (interval === null) {
        interval = setInterval(update, 1000);
        button.textContent = "STOP TIMER";
        button.style.backgroundColor = darkred;
        button.style.color = "white";
    } 
    
    else {

        clearInterval(interval);
        interval = null;
        button.textContent = "START TIMER";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
});