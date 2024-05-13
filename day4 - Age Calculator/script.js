let userIp = document.getElementById("date");

userIp.max = new Date().toISOString().split("T")[0];

function calcAge() {
    let bDay = new Date(userIp.value);

    let d1 = bDay.getDate();
    let m1 = bDay.getMonth() + 1;
    let y1 = bDay.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    if (y2 >= y1) {
        y3 = y2 - y1;
        if (m2 >= m1) {
            m3 = m2 - m1;
            if (d2 >= d1) {
                d3 = d2 - d1;
            } else {
                m3--;
                d3 = getLastDayOfMonth(y1, m1) - d1 + d2;
            }
        } else {
            y3--;
            m3 = 12 - m1 + m2 - 1;
            if (d2 >= d1) {
                d3 = d2 - d1;
            } else {
                m3--;
                d3 = getLastDayOfMonth(y1, m1) - d1 + d2;
            }
        }
    } else {
        // Birthdate is after the current date
        alert("Please enter a valid birthdate.");
        return;
    }

    let res = document.getElementById("res");
    res.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old!`;
}

function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
