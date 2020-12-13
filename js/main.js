"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // All animations will take twice the time to accomplish
  document.documentElement.style.setProperty("--animate-duration", "1s");

  $(function () {
    AOS.init({
      duration: 900,
      animatedClassName: "aos-animate",
      once: true,
      initClassName: "aos-init",
      easing: " ease-in-out",
    });
  });

  // navigation bar

  const menuBtn = document.getElementById("menu_btn");
  const iconImg = menuBtn.querySelector("img");
  const navBar = document.getElementById("navbar-list");

  let openMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!openMenu) {
      navBar.style.visibility = "visible";
      document.body.classList.add("overlay");
      iconImg.src = "images/icon-close.svg";
      navBar.classList.add("open");

      openMenu = true;
    } else {
      navBar.style.visibility = "hidden";
      document.body.classList.remove("overlay");
      iconImg.src = "images/icon-hamburger.svg";
      navBar.classList.remove("open");

      openMenu = false;
    }
  });
});

// const navList = document.getElementById("navbar-list");
// const hideNav = navList.querySelector("li a");
// let hideMe = false;

// hideNav.addEventListener("click", function () {
//   if (!hideMe) {
//     navList.style.backgroundColor = "green";
//     hideMe = true;
//   } else {
//     navList.classList.remove("visibility");

//     hideMe = false;
//   }
// });

// window.addEventListener("scroll", function () {
//   const nav = document.querySelector("nav");
//   nav.classList.toggle("nav_bg", window.scrollY > 150);
// });
