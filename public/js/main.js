"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".swiper")) {
    var swiperStart = new Swiper(".swiper", {
      loop: true,
      allowTouchMove: true,
      speed: 800,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: ".start__pagination",
        bulletClass: "start__bullet",
        bulletActiveClass: "start__bullet--active"
      },
      navigation: {
        nextEl: ".start__btn-next",
        prevEl: ".start__btn-prev"
      }
    });
  }

  console.log("DOM fully loaded and parsed");
});