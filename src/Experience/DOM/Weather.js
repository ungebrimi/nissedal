import Experience from '../Experience.js'

const weatherDescription = document.querySelector(".weather__description")
const weatherIcon = document.querySelector(".weather__icon")
const wind = document.querySelector(".weather__wind")
const temperature = document.querySelector(".weather__temperature")

export default class Weather
{
    constructor()
    {
        this.experience = new Experience()
        this.fetchWeather()
    }
    
    fetchWeather()
    {
       const APIkey = '76aeffd51c52e2a8916aa011fde997e5'
            fetch (
                "https://api.openweathermap.org/data/2.5/weather?q="
                + 'fjone'
                + '&units=metric'
                + "&lang=no"
                + "&appid="
                + APIkey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    }

    displayWeather(data)
    {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp } = data.main
        const { speed } = data.wind
        // diplay weather in the DOM
        weatherDescription.textContent = description;
        weatherIcon.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        temperature.textContent = temp + "℃";
        wind.textContent = "Vind: " + speed + "ms";
    }
}