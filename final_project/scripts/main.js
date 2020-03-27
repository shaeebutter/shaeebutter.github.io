function hidemenu() {

    document.querySelectorAll('.hidemenu')
        .forEach(element => {
            if (element.style.display !== 'inline-block')
                element.style.display = 'inline-block';

            else
                (element.style.display = 'none');
        })

}

//homepage button to reservations 


    document.getElementById('button').onclick = function () {
        location = 'final_project/reservations.html';
    };

// json temples connection

fetch (json/temples.json)
    .then (response => response.json())
    .then ( response => {
        document.querySelector('#temple1-name').textContent = response[0].TempleName;

        response[0].Services.forEach (
            service => {
                document.querySelector('#services1').innerHTML +=
                `<li>${ service}</li>`;
            }
        )

        document.querySelector('#image1').setAttribute('src', response[0].Image);
    }

    )



