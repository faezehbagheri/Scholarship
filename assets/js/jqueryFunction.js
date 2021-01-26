$(document).ready(function () {  

    $(".open").click(function(){
        var display = $(this).parent().siblings(".collapse-tab__content").css("display");
        $(".collapse-tab__content").hide();
        $(".fa-minus").removeClass('fa-minus').addClass('fa-plus');
        if(display == 'none'){
            $(this).parent().siblings(".collapse-tab__content").slideDown(500);
            $(".fa-plus", this).removeClass("fa-plus").addClass('fa-minus');
        }
    });

    var $service = $("#service");
    var $hamkar = $("#hamkar");
    var $article = $("#article");
    var $masir = $("#masir");

    
    /// masir ///
    $masir.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $masir.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            },
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $masir.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    
    /// article ///
    $article.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $article.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1300: {
                items: 4
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $article.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    /// hamkar ///
    $hamkar.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $hamkar.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            600:{
                items:2
            },
            900:{
                items:4
            },
            1300: {
                items: 5
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $hamkar.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    
    /// service ///
    $service.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $service.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1300: {
                items: 4
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $service.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

});