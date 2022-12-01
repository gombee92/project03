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
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

$(function () {
  $(".tab_hd  button").click(function () {
    $(".tab_hd  button , .tab_menu > li").removeClass("on");
    let num = $(this).index();
    $(".tab_hd  button").eq(num).addClass("on");
    $(".tab_menu > li").eq(num).addClass("on");
  });
});
