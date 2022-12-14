const swiper = new Swiper(".mainPage.swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  lazy: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },
  // autoplay: {
  //   delay: 2000,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
