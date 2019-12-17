
$( document ).ready(function() {
    $('.header__burger').click(function() {
        $('.header__nav').addClass('opened')
    });
    $('.close-nav').click(function() {
        $('.header__nav').removeClass('opened')
    });


    if ( $(window).width() < 768 ) {

        $("#menu, .bottom-nav").on("click","a", function (event) {
            $('.header__nav').removeClass('opened');
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 0;
            $('body,html').animate({scrollTop: top}, 500);
        });

    }

    $('.center').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


});

