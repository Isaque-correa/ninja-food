console.log("ola mundo");

function menuShow() {
  let menuMobile = document.querySelector(".menu-mob");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
  } else {
    menuMobile.classList.add("open");
  }
  let menuActive = document.querySelector(".icon-bar");
  if (menuActive.classList.contains("active")) {
    menuActive.classList.remove("active");
  } else {
    menuActive.classList.add("active");
  }
}
