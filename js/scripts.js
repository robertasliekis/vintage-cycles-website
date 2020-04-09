//When page loaded scroll position = 0
$(document).ready(function () {
  setTimeout(function () {
    $(this).scrollTop(0);
  }, 50);
});

//Sticky nav bar start
var navBar = document.getElementById("navbar");
$(window).scroll(function () {
  if (!navBar.classList.contains("background-transparent")) {
    if ($(window).scrollTop() > 1) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  }
});
//Sticky nav bar end

//Burger menu control start
const burger = document.querySelector(".burger-menu");
var timesClicked = 0;

$(".burger-menu").click(function () {
  if (timesClicked % 2 != 0) {
    burger.classList.toggle("burger-menu-animation");
    burger.classList.toggle("burger-active");
    $(".menu-item").addClass("animation-reverse");
    $(".overlay-menu").addClass("overlay-menu-invisible");
    $(".overlay-menu").removeClass("overlay-menu-visible");
    $(".overlay-menu-footer").removeClass("visible");
    setTimeout(function () {
      if ($(window).scrollTop() < 1) {
        $(".navbar").removeClass("navbar-scrolled");
      }
      $(".navbar").removeClass("background-transparent");
    }, 1000);
  } else {
    $(".overlay-menu").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward");
    $(".menu-item").removeClass("animation-reverse");
    $(".overlay-menu").removeClass("keyframes-reverse");
    burger.classList.toggle("burger-active");
    burger.classList.toggle("burger-menu-animation");
    $(".menu-item").addClass("menu-item-display");
    $(".overlay-menu").addClass("overlay-menu-visible");
    $(".navbar").addClass("navbar-scrolled");
    $(".navbar").addClass("background-transparent");
    $(".overlay-menu-footer").addClass("visible");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});
//Burger menu control end

//Background section carousel start
$(".dot").click(function () {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (i = 0; i <= 3; i++) {
    if (number != i) {
      $(".dot" + i).removeClass("dot-active");
      $(".background-image" + i).removeClass("visible");
      $(".background-text" + i).removeClass("text-visible");
      $(".background-text" + i).removeClass("text-move");
      $(".button").removeClass("visible");
      if (i <= 1) {
        $(".dot").removeClass("dot-border-black");
        $(".dot-inside").removeClass("dot-black");
        $(".dot-active").removeClass("dot-black");
      }
    } else {
      $(".dot" + number).addClass("dot-active");
      $(".background-image" + number).addClass("visible");
      $(".background-text" + number).addClass("text-visible");
      $(".background-text" + number).addClass("text-move");
      if (number == 2) {
        $(".dot").addClass("dot-border-black");
        $(".dot" + number).addClass("dot-black");
        $(".dot-inside").addClass("dot-black");
        $(".background-text" + number).addClass("text-black");
      }
      if (number == 3) {
        $(".button").addClass("visible");
      }
    }
  }
});
//Background section carousel end
