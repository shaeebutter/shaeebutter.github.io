function hidemenu() {

    document.querySelectorAll('.hidemenu')
        .forEach(element => {
            if (element.style.display !== 'inline-block')
                element.style.display = 'inline-block';

            else
                (element.style.display = 'none');
        })

}

$(document).ready(function(){

// show/hide sub menu if it exists
$('#nav > li > a').click(function () {
    var $ul = $(this).siblings('ul');
    if ($ul.length > 0) {
        $ul.toggle();
        return false;
    }
});
}) (jQuery);

