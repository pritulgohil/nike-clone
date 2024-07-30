let hamBurgerMenu = document.getElementById("hamburger-menu");
let hamBurgerDiv = document.getElementById("hamburger-div");
let closeButton = document.getElementById("close-button");
let mainBody = document.getElementById("main-navbar");

hamBurgerMenu.addEventListener("click", toggleHamBurgerMenu);
closeButton.addEventListener("click", closeHamburger);

function toggleHamBurgerMenu() {
  hamBurgerDiv.classList.add("open");
  mainBody.style.opacity = "0.5";
  hamBurgerDiv.style.opacity = "1";
}

function closeHamburger() {
  hamBurgerDiv.classList.remove("open");
  mainBody.style.opacity = "1";
  hamBurgerDiv.style.opacity = "1";
}

function handleResize() {
  if (window.matchMedia("(min-width: 960px)").matches) {
    hamBurgerDiv.style.display = "none";
  } else {
    hamBurgerDiv.style.display = "block";
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
