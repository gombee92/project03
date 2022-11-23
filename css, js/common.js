var swiper1 = new Swiper(".slide_1", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});

var swiper2 = new Swiper(".slide_2", {
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

var swiper3 = new Swiper(".slide_3", {
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
  slidesPerView: 4,
  spaceBetween: 40,
});
