let main = document.getElementById("startStop");
let reset = document.getElementById("reset");
let mainFlag = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
function displayTime() {
    document.getElementById("hours-digit").innerText =String(hours).padStart(2, "0");
    document.getElementById("minutes-digit").innerText =String(minutes).padStart(2, "0");
    document.getElementById("seconds-digit").innerText =String(seconds).padStart(2, "0");
}
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    displayTime();
}
main.addEventListener("click", () => {
    if (!mainFlag) {
        main.innerText = "Stop";
        timer = setInterval(updateTime, 1000);
        mainFlag = true;
    } else {
        main.innerText = "Start";
        clearInterval(timer);
        mainFlag = false;
    }
});
reset.addEventListener("click", () => {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    main.innerText = "Start";
    mainFlag = false;
    displayTime();
});
displayTime();