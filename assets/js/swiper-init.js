<!-- Swiper Initialization -->
document.addEventListener("DOMContentLoaded", function () {
    const swipers = [
        {selector: "#swiper-rose"},
        {selector: "#swiper-lavender"},
        {selector: "#swiper-sunlight"},
        {selector: "#swiper-gallery"}
    ];

    swipers.forEach(({selector}) => {
        const swiperElement = document.querySelector(selector);
        if (swiperElement) {
            new Swiper(swiperElement, {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    nextEl: `${selector} .swiper-button-next`,
                    prevEl: `${selector} .swiper-button-prev`
                },
                pagination: {
                    el: `${selector} .swiper-pagination`,
                    clickable: true
                }
            });
        }
    });
});
