var countdownDate = new Date("Aug 27, 2024 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Days").querySelector("p").innerHTML = days;
    document.getElementById("Hours").querySelector("p").innerHTML = hours;
    document.getElementById("Minutes").querySelector("p").innerHTML = minutes;
    document.getElementById("Seconds").querySelector("p").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Days").querySelector("p").innerHTML = "00";
        document.getElementById("Hours").querySelector("p").innerHTML = "00";
        document.getElementById("Minutes").querySelector("p").innerHTML = "00";
        document.getElementById("Seconds").querySelector("p").innerHTML = "00";
    }
}, 1000);
