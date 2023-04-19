const anounsmentSwiper = new Swiper('.announcment-bar__slider', {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000,
    },

    spaceBetween: 0,
    enable: true,
    breakpoints: {
        750: {
          slidesPerView: 3,
          enable: false,
        }
    }
});