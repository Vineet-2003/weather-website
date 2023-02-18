import React from "react";
import ReactDOM  from "react-dom";
import App from './App.jsx';
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));


// api works starts
const Temp =  document.getElementById('temp');
const city = document.getElementById('city-name');
const weatherDes = document.getElementById('main');
const currentTime = document.getElementById('current-time');
const time = new Date().toJSON().slice(0, 10);
const form =  document.querySelector('form');
const Cloudy =document.getElementById('cloudy');
const Humidity =document.getElementById('humidity');
const Wind =document.getElementById('wind');
const Pressure = document.getElementById('pressure');

currentTime.innerHTML = time ;

const apiKey = "f19eaeadd6206b6a012749d5dae4faa7";
async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const cityName = formData.get('city-name');
    form.reset();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const main = data.weather[0].main;
        const temp = data.main.temp;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const wind = (data.wind.speed)*5/18;
        const cloudy = data.clouds.all;

        // updating values in required places
        Temp.innerHTML = temp + "&#8451;";
        city.innerHTML = cityName;
        weatherDes.innerHTML = main;
        Wind.innerHTML = parseFloat(wind.toFixed(2)) + "km/h";
        Humidity.innerHTML = humidity + "%";
        Cloudy.innerHTML = cloudy + "%";
        Pressure.innerHTML = pressure + "mBar";
        

    });
}

form.addEventListener('submit', (e) => {
    handleSubmit(e);
});
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }
})