
$(document).ready(function () {
    $(".card1__header > h1").on('click', function(){
        $(".active-card").removeClass("active-card"); 
        $(this).parent().toggleClass('active-card');
    });
});