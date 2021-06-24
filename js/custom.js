
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2,
        }
    }
})

$('.b-f-b ').hover(
    function(){ $('.banner-section').addClass('ccolor') },
    function(){ $('.banner-section').removeClass('ccolor') }
)
$('.b-l-b').hover(
    function(){ $('.banner-section').addClass('beut') },
    function(){ $('.banner-section').removeClass('beut')}
)

// Header sec js start
var scroll_pos = 0;
$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 900) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
// Header sec js end




