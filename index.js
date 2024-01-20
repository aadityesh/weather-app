const apiKey = "cac68a4af298417d943e8f23087031e5"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// console.log(typeof searchBox);

async function checkWeather(cityName) {

    const response = await fetch(apiURL + `&q=${cityName}` + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    } else {

        var data = await response.json()

        console.log(cityName)
        console.log(data)

        document.querySelector(".city").innerHTML = data.name

        document.querySelector(".city-weather").innerHTML = data.weather[0].main

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C'

        document.querySelector(".humidity").innerHTML = data.main.humidity + '%'

        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

        let cityWeather = data.weather[0].main
        cityWeather = cityWeather.toLowerCase()
        let weathericon = document.querySelector(".weather-icon")
        weathericon.src = "./images/" + cityWeather + ".png"

        document.querySelector(".weather").style.display = "block"

    }




}

searchBtn.addEventListener("click", () => {


    checkWeather(searchBox.value)


})

