//swiper on tickets block

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 28,
  autoplay: {
    delay: 3000,
    speed: 1000,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 35,
    },

    750: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    // when window width is >= 480px
    1202: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
