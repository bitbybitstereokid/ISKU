function initProductSlider(sectionID) {
  const productSlider = new Swiper(`.product-slider--${sectionID}`, {
    slidesPerView: 'auto',
    spaceBetween: 15,
    grabCursor: true,
    enabled: true,
  
    navigation: {
      nextEl: `.product-slider__button-next--${sectionID}`,
      prevEl: `.product-slider__button-prev--${sectionID}`,
    },

    breakpoints: {
      769: {
        spaceBetween: 20
      }
    }
  });

  return productSlider;
}