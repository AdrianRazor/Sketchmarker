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

  // Tabs
  const tabProductInfo = document.querySelector(".tab--info");
  const tabProductReviews = document.querySelector(".tab--review");

  tabProductInfo ? handleTab(tabProductInfo) : -1;
  tabProductReviews ? handleTab(tabProductReviews) : -1;

  function handleTab(id) {
    let tabHead = id.querySelectorAll(".tab__item");
    let tabBody = id.querySelectorAll(".tab__body");

    tabHead.forEach((item, i) => {
      item.addEventListener("click", function () {
        tabHead.forEach((el) => el.classList.remove("active"));
        tabBody.forEach((el) => el.classList.remove("active"));

        item.classList.add("active");
        tabBody[i].classList.add("active");
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});
