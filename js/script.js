const swiper = new Swiper(".cart-slider", {
  slidesPerView: 3,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 180,
    },
  },
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
