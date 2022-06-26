console.log("Работает только на индексеі");

//swiper on travel blocks

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
    speed: 1000,
  },
});

const swiper2 = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    450: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1202: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper3 = new Swiper(".swiper-3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 28,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
    },

    626: {
      slidesPerView: 1.5,
      spaceBetween: 35,
    },

    1056: {
      slidesPerView: 1.5,
      spaceBetween: 35,
    },
    // when window width is >= 480px
    1649: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
