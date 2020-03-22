function hidemenu() {

    document.querySelectorAll('.hidemenu')
        .forEach(element => {
            if (element.style.display !== 'inline-block')
                element.style.display = 'inline-block';

            else
                (element.style.display = 'none');
        })

}

function showmenu() {
    document.querySelectorAll('.subnav')
        .forEach(element => {
            if (element.style.display === 'none')
                element.style.display = 'inline-block';

        })}