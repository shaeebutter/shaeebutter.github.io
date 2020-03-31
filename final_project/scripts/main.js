function hidemenu() {

    document.querySelectorAll('.hidemenu')
        .forEach(element => {
            if (element.style.display !== 'inline-block')
                element.style.display = 'inline-block';

            else
                (element.style.display = 'none');
        })

};

//homepage button to reservations 


// document.getElementById('button').onclick = function () {
//     location = 'final_project/reservations.html';
// };

// json temples connection

fetch('./json/temples.json')
    .then(response => response.json())
    .then(response => {
            response.forEach((temple) => {
                    document.querySelector(`#address-${temple.TempleName}`).innerHTML =
                        `${temple.StreetAddress}<br/>${temple.City}, ${temple.State}`;
                    document.querySelector(`#phone-${temple.TempleName}`).textContent = temple.PhoneNumber;

                    temple.History.forEach(
                        history => {
                            document.querySelector(`#history-${temple.TempleName}`).innerHTML += `<li>${history.Milestone} - ${history.Date}</li>`
                        }
                    )
                    temple.TempleClosures.forEach(
                        closures => {
                            document.querySelector(`#closures-${temple.TempleName}`).innerHTML += `<li>${closures}</li>`
                        }
                    )
                    // temple.OrdinanceSchedule.forEach(
                    //     OrdinanceSchedule => {
                    document.querySelector(`#ordinances-${temple.TempleName}`).innerHTML += `<li>Endowment: ${temple.OrdinanceSchedule.Endowment}</li>
                    <br/> <li>Initiatory: ${temple.OrdinanceSchedule.Initiatory}</li> <br/> <li>Baptims: ${temple.OrdinanceSchedule.Baptisms}</li> <br/> <li>Sealings: ${temple.OrdinanceSchedule.Sealings}</li>`
                    // }) 
                temple.Services.forEach(
                    service => {
                        document.querySelector(`#services-${temple.TempleName}`).innerHTML +=
                            `<li>${service}</li>`;
                    })
            })
    }

)
//current weather on temples