// burger_menu_js===================================//
$(".burger_menu").click(function () {
  $(".nav_links").toggleClass("main");
  $(".sub-menu").toggleClass("main1");
});

$(".nav_img_btn").click(function () {
  $(".nav_links").toggleClass("main");
});

$(".icon button").click(function () {
  $(".dropdown").toggleClass("main");
});



// burger_menu_js===================================//
// logo slider=========================================================

var swiper = new Swiper(".mySwiper_add",{
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,


    },
    768: {
      slidesPerView: 3,
      spaceBetween: 22
    },
  },
});

var swiper = new Swiper(".base_slide", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  },
});

// logo slider=========================================================

// hero section slider=====================================
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
  loop: true,
});
// hero section slider=====================================
// testimonial slider===================================================
var swiper = new Swiper(".mySwiper_slide", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});

// testimonial slider===================================================

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero_section");
  hero.style.backgroundImage = "url('../images/banner3.webp')";
});
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero_section");
  hero.style.backgroundImage = "url('../images/banner4.webp')";
});

document.addEventListener("DOMContentLoaded", function () {
  const progressiveDiv = document.getElementById("background_overlay");
  const highResImage = new Image();
  highResImage.src = "high-resolution-image.webp";

  highResImage.onload = () => {
    progressiveDiv.style.backgroundImage = `url(${highResImage.src})`;
  };
});







