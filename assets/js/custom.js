//menu
$(document).ready(function() {
    $("#respMenu").aceResponsiveMenu({
        resizeWidth: '992', // Set the same in Media query       
        animationSpeed: 'fast', //slow, medium, fast
        accoridonExpAll: false //Expands all the accordion menu on click
    });
});

//panel
$(document).ready(function() {

    $(".btn-slide").click(function() {
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });

});

// Initialize Owl Carousel Plugin
$(document).ready(function() {
    var heroSlider = $('.owl-carousel');
    heroSlider.owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeOut: 5000, //5sec
        navText: ['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'],
    });

    heroSlider.on("changed.owl.carousel", function(event) {
        // selecting the current active item
        var item = event.item.index - 2;
        // first removing animation for all captions
        $('.caption-title').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.caption-title').addClass('animated fadeInUp');
        $('button').removeClass('btn-one animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('button').addClass('btn-one animated fadeInUp');
    });
});

$('#products').owlCarousel({
    loop: true,
    margin: 40,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#clientele').owlCarousel({
    loop: true,
    margin: 40,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left fa-fw" aria-hidden="true"></i>', '<i class="fa fa-angle-right fa-fw" aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

//preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#loader').fadeOut(); // will first fade out the loading animation 
    $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('#loader-wrapper').delay(9000).css({ 'overflow': 'hidden' });
})