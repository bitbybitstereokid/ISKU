document.addEventListener('DOMContentLoaded', function () {
    let galleryImageItem = document.querySelectorAll(".galleryImage_item");
    let galleryImagePopUp = document.querySelector(".galleryImage_pop-up");
    let allElemSlider = galleryImagePopUp.querySelectorAll("div");
    let html = document.querySelector("html");

    allElemSlider.forEach(element => {
        element.addEventListener("click", function (event) {
            event.stopPropagation();
        })
    })
    galleryImageItem.forEach((el, index) => {
        el.addEventListener("click", function () {
            let currentPosition = index + 1;
            gallery.slideTo(currentPosition, 0)
            html.classList.add("_show");
        })
    })

    galleryImagePopUp.addEventListener("click", function (event) {
        html.classList.remove("_show");
    })

    const gallery = new Swiper('.galleryImage_swiper', {
        centeredSlides: true,
        spaceBetween: 50,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.galleryImage_button-next',
            prevEl: '.galleryImage_button-prev',
        },
        pagination: {
            el: '.galleryImage_pagination',
            type: "fraction",
            clickable: true
        },
    });
})