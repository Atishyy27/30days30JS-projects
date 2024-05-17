let [sec, min, hour] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);

}

function watchStop() {
    clearInterval(timer);
} function watchReset() {
    clearInterval(timer);
    [sec, min, hour] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}