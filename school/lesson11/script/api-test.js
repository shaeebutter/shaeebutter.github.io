
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3bc8d0eed950aefc26f97b8d2a9e475e&units=imperial'

fetch(apiURL) 
    .then(
        response => (
            response.json()
            )
    .then (
        jsObject =>{
            document.getElementById('current-temp').textContent = jsObject.main.temp;
            let image = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
            document.getElementById('weather-icon').setAttribute('src', image);
        
            let alt= jsObject.weather[0].description;
            document.getElementById('weather-icon').setAttribute('alt', alt);

        }
    ));
