const apiKey = "7c0cb99f1c3ce7f249440c1f6ea9b47d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "images/rainr.png"
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "snow") {
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";

    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);

});

checkweather();