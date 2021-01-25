
$(document).ready(function () { 
    $(".cards__header > h1").on('click', function(){
        $(this).parent().toggleClass('active-card');
    });
});