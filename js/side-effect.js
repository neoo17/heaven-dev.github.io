

$('.select-item').click(function () {
    $('.select-item').removeClass('active').addClass('not-active');
    $(this).addClass('active').removeClass('not-active');
    if($('.drop-arrow').hasClass('open')){
        $('.select-item.not-active').slideUp(400);
        $('.select-item.active').slideDown(400);
        $('.drop-arrow').addClass('closed').removeClass('open')
    }
});
$('.drop-arrow').click(function () {

    if($(this).hasClass('open')){
        $('.select-item.not-active').slideUp(400);
        $('.select-item.active').slideDown(400);
        $(this).addClass('closed').removeClass('open')
    } else if ($(this).hasClass('closed')){
        $('.select-item.not-active').slideDown(400);
        $(this).addClass('open').removeClass('closed')
    }
});
