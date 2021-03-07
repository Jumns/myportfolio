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

  let isOpen = false;
  const options = { bubbles: true };
  let navBarClose = new CustomEvent("navBar-close", options);

  menuBtn.addEventListener("click", () => {
    if (!isOpen) {
      menuBtn.dispatchEvent(new CustomEvent("navBar-open", options));
    } else {
      menuBtn.dispatchEvent(navBarClose);
    }
    isOpen = !isOpen;
  });

  const miniLaptop = 992;
  navBar.addEventListener("click", () => {
    if (window.innerWidth >= miniLaptop) {
      return;
    }
    navBar.dispatchEvent(navBarClose);
  });

  document.addEventListener("navBar-open", () => {
    navBar.style.visibility = "visible";
    document.body.classList.add("overlay");
    iconImg.src = "images/icon-close.svg";
    navBar.classList.add("open");
  });

  document.addEventListener("navBar-close", () => {
    navBar.style.visibility = "hidden";
    document.body.classList.remove("overlay");
    iconImg.src = "images/icon-hamburger.svg";
    navBar.classList.remove("open");
  });
});

window.addEventListener("scroll", function () {
  // scroll_top.classList.add("visibility", window.scrollY > 150);
  const showScrollTop = window.scrollY > 100;
  const nav = document.querySelector("#nav");
  const scroll_top = document.querySelector("div .scroll_top");
  const navItems = document.querySelectorAll("ul .nav-item a");
  const logo = document.querySelector("nav a .logo"); //img.logo
  const hpHireBtn = document.querySelector(".hp-hire");
  const hpMenuIcon = document.querySelector(".hp-menu img");

  if (showScrollTop) {
    scroll_top.classList.add("visibility");
    nav.classList.add("bg-white");
    hpMenuIcon.classList.add("hp-menu");
    hpHireBtn.classList.add("color-dark");
    // logos
    logo.classList.add("img-white");
    // nav items
    navItems.forEach((navItem) => {
      navItem.classList.add("color-dark");
    });
  } else {
    scroll_top.classList.remove("visibility");
    nav.classList.remove("bg-white");
    hpMenuIcon.classList.remove("hp-menu");
    hpHireBtn.classList.remove("color-dark");
    // logos
    logo.classList.remove("img-white");
    // nav items
    navItems.forEach((navItem) => {
      navItem.classList.remove("color-dark");
    });
  }
});

// window.addEventListener("scroll", function () {
//   const nav = document.querySelector("nav");
//   nav.classList.toggle("nav_bg", window.scrollY > 150);
// });
