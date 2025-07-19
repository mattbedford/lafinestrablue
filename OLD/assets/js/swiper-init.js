<!-- Swiper Initialization -->
document.addEventListener("DOMContentLoaded", function () {
    const swipers = [
        {selector: "#swiper-stroke"},
        {selector: "#swiper-hug"},
        {selector: "#swiper-smile"},
        {selector: "#swiper-gallery"},
        {selector: "#swiper-stroke-thumbs"},
        {selector: "#swiper-hug-thumbs"},
        {selector: "#swiper-smile-thumbs"},
        {selector: "#swiper-gallery-thumbs"}
    ];

    swipers.forEach(({selector}) => {
        const swiperElement = document.querySelector(selector);
        if (swiperElement) {
            if (selector.includes('thumbs')) {
                new Swiper(swiperElement, {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesProgress: true,
                });
            } else {
                new Swiper(swiperElement, {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: `${selector} .swiper-button-next`,
                        prevEl: `${selector} .swiper-button-prev`
                    },
                    thumbs: {
                        swiper: `${selector}-thumbs`,
                    },
                });
            }
        }
    });
});
