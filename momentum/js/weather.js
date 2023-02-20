
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error')

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=cb4d85bbccdcad247c21b40534e25658&units=metric`
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();   

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Ветер ${data.wind.speed.toFixed(0)}м/с`
  humidity.textContent = `Влажность ${data.main.humidity}%`  
  weatherError.textContent = null

}else {
    weatherError.textContent = 'Город не существует'
    humidity.textContent = null
    wind.textContent = null
    temperature.textContent = null   
    weatherDescription.textContent = null
    weatherIcon.classList.add('weather-none')
}
}

function setLocalStorage() {
    localStorage.setItem('city', city.value)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city')
    }else {city.value = 'Minsk'}
    getWeather(city.value)
}
window.addEventListener('load', getLocalStorage)    

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('change', getWeather);
