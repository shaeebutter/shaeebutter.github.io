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



