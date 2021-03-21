// event pada saat di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var href = $(this).attr('href');


    // tangkap elemen yang bersangkutan
    var elemenhref = $(href);

    // pindah scroll
    $('html,body').animate({
        scrollTop: elemenhref.offset().top - 50
    }, 1000, 'easeOutCirc');

    e.preventDefault();

});

// parallax
// about
$(window).scroll(function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 6 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('tiba');
            }, 200 * (i + 1));
        });
    }
});