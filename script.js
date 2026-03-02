let countdown;
let timeLeft = 0;
let running = false;

function initializeTimer(duration) {
    clearInterval(countdown);
    running = false;
    timeLeft = duration;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

function startTimer() {
    if (!running && timeLeft > 0) {
        running = true;
        countdown = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(countdown);
                running = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function snoozeTimer() {
    if (timeLeft > 0) {
        timeLeft += 30;
        updateDisplay();
    }
}

function stopTimer() {
    clearInterval(countdown);
    running = false;
    timeLeft = 0;
    updateDisplay();
}

function backToMenu() {
    if (running) {
        clearInterval(countdown);
    }

    window.location.replace("choose.html");
}
