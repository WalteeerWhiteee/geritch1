$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

    });
});







$('.mobile-btn').on('click',function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header_menu').toggleClass('show-menu');
    $('.header-a').toggleClass('show-header-a')
});
$('.header_menu nav a').on('click',function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header_menu').removeClass('show-menu');
    $('.header-a').removeClass('show-header-a')
});