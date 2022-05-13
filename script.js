const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transition: 500,
  interval: 3000,
});

const matbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(matbox, {});

const scrollspy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollspy, {});
