apos.on('ready', function () {
    new Swiper('#bannerRotator', {
        speed: 500,
        slidesPerView: 1,
        watchOverflow: true,
        autoplay: {
            delay: 5000
        },
        pagination: {
            el: ( '.swiper-pagination' ),
            clickable: true
        }
    });
});