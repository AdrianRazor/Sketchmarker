document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".swiper")) {
    const swiperStart = new Swiper(".swiperStart", {
      loop: true,
      allowTouchMove: true,
      speed: 800,
      autoplay: {
        delay: 5000,
      },

      pagination: {
        el: ".start__pagination",
        bulletClass: "start__bullet",
        bulletActiveClass: "start__bullet--active",
      },

      navigation: {
        nextEl: ".start__btn-next",
        prevEl: ".start__btn-prev",
      },
    });

    const swiperBottom = new Swiper(".swiperBottom", {
      loop: true,
      slidesPerView: 5,
      allowTouchMove: true,

      navigation: {
        nextEl: ".about__btn-next",
        prevEl: ".about__btn-prev",
      },
    });

    const swiperTop = new Swiper(".swiperTop", {
      loop: true,
      spaceBetween: 10,
      allowTouchMove: true,

      thumbs: {
        swiper: swiperBottom,
      },
    });
  }

  console.log("DOM fully loaded and parsed");
});
