"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  if (document.querySelector(".swiper")) {
    var swiperStart = new Swiper(".swiperStart", {
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
    var swiperBottom = new Swiper(".swiperBottom", {
      loop: true,
      slidesPerView: 5,
      allowTouchMove: true,
      navigation: {
        nextEl: ".about__btn-next",
        prevEl: ".about__btn-prev"
      }
    });
    var swiperTop = new Swiper(".swiperTop", {
      loop: true,
      spaceBetween: 10,
      allowTouchMove: true,
      thumbs: {
        swiper: swiperBottom
      }
    });
  } // Tabs


  var tabProductInfo = document.querySelector(".tab--info");
  var tabProductReviews = document.querySelector(".tab--review");
  tabProductInfo ? handleTab(tabProductInfo) : -1;
  tabProductReviews ? handleTab(tabProductReviews) : -1;

  function handleTab(id) {
    var tabHead = id.querySelectorAll(".tab__item");
    var tabBody = id.querySelectorAll(".tab__body");
    tabHead.forEach(function (item, i) {
      item.addEventListener("click", function () {
        tabHead.forEach(function (el) {
          return el.classList.remove("active");
        });
        tabBody.forEach(function (el) {
          return el.classList.remove("active");
        });
        item.classList.add("active");
        tabBody[i].classList.add("active");
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});