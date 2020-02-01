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

function hidemenu() {

    document.querySelectorAll('.hidemenu')
    .forEach(element => {
        if (element.style.display !== 'none')
            element.style.display = 'none'
        else
            element.style.display = 'inline-block';
        // console.log(element.style.visibility);
    })

}



