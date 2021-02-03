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

    $(".head").click(function(){
        var display = $(this).siblings(".body").css("display");
        $(".body").hide();
        $(".fa-minus").removeClass('fa-minus').addClass('fa-plus');
        if(display == 'none'){
            $(this).siblings(".body").slideDown(500);
            $(".fa-plus", this).removeClass("fa-plus").addClass('fa-minus');
        }
    });

    $('.tab-content').hide();
    var activeTab = $(".tabs").find('a.active').data('trigger');
    $('#' + activeTab).show();

    $('.tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.tab-content:not(#' + tabId + ')').hide();
        $(this).addClass('active');
        $('.owl-item>a').removeClass('active');
    });

    $('.list').hide();
    var activeTab = $(".filter-tabs").find('a.filter-acrive').data('trigger');
    $('#' + activeTab).show();

    $('.filter-tabs>a').on('click', function () {
        var tabId = $(this).data('trigger');
        $('#' + tabId).show();
        $('.list:not(#' + tabId + ')').hide();
        $(this).addClass('filter-acrive');
        $(this).siblings('a').removeClass('filter-acrive');
    });

    var $service = $("#service");
    var $hamkar = $("#hamkar");
    var $article = $("#article");
    var $masir = $("#masir");
    var $camp = $("#camp");
    var $school = $("#schl");

    
    /// school ///
    $school.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $school.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },            
            600:{
                items:2
            },
            900:{
                items:3
            },
            1500:{
                items:4
            },
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $school.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    
    /// school ///
    $school.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    $camp.owlCarousel({
        rtl:true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            1100:{
                items:2
            },
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        var $speed = 300;  // in ms
        $camp.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });


    
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
                items: 1
            },
            500:{
                items:2
            },
            800:{
                items:3
            },
            1200: {
                items: 4
            },
            1500: {
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