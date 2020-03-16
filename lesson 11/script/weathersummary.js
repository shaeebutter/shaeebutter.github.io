const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3bc8d0eed950aefc26f97b8d2a9e475e&units=imperial'

fetch(apiURL)
    .then(
        response => (
            response.json()
        )
        .then(
            jsObject => {
                let t = document.getElementById('current-temp').textContent = jsObject.main.temp;
                let s = document.getElementById('speed').textContent = jsObject.wind.speed;
                let f = 0
                let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
                document.querySelector('#weather-icon').setAttribute('src', imageURL);

                if (t <= 50 && s >= 3) {

                    f = 35.74 + 0.6215 * t - 25.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

                } else {
                    f = t;
                }

                document.querySelector('#current-temp').innerHTML = t + '&deg';
                document.querySelector('#speed').innerHTML = s + ' MPH';
                document.querySelector('#windchill').innerHTML = f.toFixed(0) + '&deg';
                document.querySelector('#humidity').textContent = jsObject.main.humidity + '%';
                

                document.getElementById('weatherDescription').textContent = jsObject.weather[0].main;

            }));
//five day forcast

const numbertoday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const apiForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3bc8d0eed950aefc26f97b8d2a9e475e&units=imperial'


fetch(apiForecast)
    .then(
        response => (
            response.json()
        )
    )
    .then(
        jsObject => {
            let counter = 1;
            jsObject.list.forEach(
                forecast => {
                    if (forecast.dt_txt.includes('18:00')) {
                        let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                        let dayofweek = numbertoday[forecastDate.getDay()];


                        document.getElementById(`day${counter}`).textContent = dayofweek
                        console.log(forecast.main.temp)
                        document.getElementById(`temp${counter}`).innerHTML = forecast.main.temp
                        counter += 1
                        console.log(dayofweek)
                    }
                }
            )
        }
    );