/* Date format: Wed, 20 May 2020 */

let currentDate = new Date();

let year = currentDate.getFullYear();
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August', 
    'September',
    'October',
    'November',
    'December'
]
let daysofweek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let dayofweek = currentDate.getDay()
let numberday = currentDate.getDate()

let fullDate = daysofweek[dayofweek];
fullDate += ", " + numberday + " " + months[currentDate.getMonth()] + " " + year;
console.log(document.querySelector('#current-date'))
document.querySelector('#current-date').textContent = fullDate;

//hiding menu

function hidemenu() {

    document.querySelectorAll('.hidemenu')
    .forEach(element => {
        console.log(element.style.display)
        if    (element.style.display !== 'inline-block')
        element.style.display = 'inline-block';

        else
        (element.style.display = 'none');
    })

}

//pancake
const aside = document.querySelector('aside');

if(currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
else {
    aside.style.display = 'none';
}

//calculate windchill

// let f, t, s;
// t = 50;
// s = 10;

// if (t <= 50 && s >= 3) {

// f = 35.74 + 0.6215 * t - 25.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

// }
//  else {
// f = t;
//  }

// document.querySelector('#currenttemp').innerHTML = t + '&deg';
// document.querySelector('#windspeed').innerHTML = s + 'MPH';
// document.querySelector('#windchill').innerHTML = f.toFixed(0) + '&deg';

//fonts 

WebFont.load({
    google: {
      families: [
         'Playfair Display', 
         'Bad Script'
      ]
    }
  });

  //rating

  function adjustRating(rating) {
    document.querySelector('#rating').textContent = rating;
  }
