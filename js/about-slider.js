const swiper = new Swiper(".about.swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1.6,
      spaceBetween: 15,
    },
  },
  slideActiveClass: "about-active-slide",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on("slideChange", function () {
  console.log("HEHHEHEHH");
  swiper.update();
});

window.addEventListener("load", () => {
  if (window.innerWidth < 500) {
    document
      .querySelector(".hero-part-after")
      .appendChild(document.querySelector(".moveOn500"));
  }
});
