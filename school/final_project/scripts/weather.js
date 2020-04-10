function currentWeather(id) {
    console.log('start load')

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=3bc8d0eed950aefc26f97b8d2a9e475e&units=imperial`;

    fetch(apiURL)
        .then(response => response.json())
        .then(jsObject => {
            let t = jsObject.main.temp;
            let s = jsObject.wind.speed;
            let f = 0
            let imageURL = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
            console.log(document.querySelector(`#weather-icon-${id}`))
            document.querySelector(`#weather-icon-${id}`).setAttribute('src', imageURL);

            if (t <= 50 && s >= 3) {

                f = 35.74 + 0.6215 * t - 25.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

            } else {
                f = t;
            }
            
                document.querySelector(`#current-temp-${id}`).innerHTML = t + '&deg';
                document.querySelector(`#speed-${id}`).innerHTML = s + ' MPH';
                document.querySelector(`#windchill-${id}`).innerHTML = f.toFixed(0) + '&deg';
                document.querySelector(`#humidity-${id}`).textContent = jsObject.main.humidity + '%';


                document.querySelector(`#weatherDescription-${id}`).textContent = jsObject.weather[0].main;

            });

}

function loadWeatherData(){
    currentWeather('5378538') //oakland//
    currentWeather('5389489') //sacramento//
    currentWeather('5605242') //rexburg//
    currentWeather('5781770') //jordan river//
}


