"use strict";
window.addEventListener("DOMContentLoaded", function () {
  // All animations will take twice the time to accomplish
  document.documentElement.style.setProperty("--animate-duration", "1s");

  $(function () {
    AOS.init({
      duration: 1200,
      animatedClassName: "aos-animate",
      once: true,
      initClassName: "aos-init",
      easing: " linear",
    });
  });

  // navigation bar

  const menuBtn = document.getElementById("menu_btn");
  const iconImg = menuBtn.querySelector("img");
  const navBar = document.getElementById("navbar-list");

  console.log(iconImg.src);
  let openMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!openMenu) {
      navBar.style.visibility = "visible";
      document.body.classList.add("overlay");
      iconImg.src = "images/icon-close.svg";
      navBar.classList.add("animate__animated", "animate__fadeInLeft");

      openMenu = true;
    } else {
      navBar.style.visibility = "hidden";
      document.body.classList.remove("overlay");
      iconImg.src = "images/icon-hamburger.svg";
      navBar.classList.remove("animate__animate", "animate__fadeInLeft");

      openMenu = false;
    }
  });
});
