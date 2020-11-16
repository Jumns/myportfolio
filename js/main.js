// All animations will take twice the time to accomplish
document.documentElement.style.setProperty("--animate-duration", "2s");



$(function () {
  AOS.init({
    duration: 1200,
    animatedClassName: "aos-animate",
    once: true,
    initClassName: "aos-init",
    easing: " linear",
  });
});