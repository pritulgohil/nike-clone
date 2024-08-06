let hamBurgerMenu = document.getElementById("hamburger-menu");
let hamBurgerDiv = document.getElementById("hamburger-div");
let closeButton = document.getElementById("close-button");
let mainBody = document.getElementById("main-navbar");
let mainDiv = document.getElementById("main-div-section");
let leftNavigation = document.getElementById("left-navigate");
let rightNavigation = document.getElementById("right-navigate");
let latestGreatestContainer = document.getElementById(
  "latest-greatest-card-container"
);

hamBurgerMenu.addEventListener("click", toggleHamBurgerMenu);
closeButton.addEventListener("click", closeHamburger);

function toggleHamBurgerMenu() {
  hamBurgerDiv.classList.add("open");

  console.log(mainDiv);
  hamBurgerDiv.style.opacity = "1";
  mainBody.style.opacity = "0.5";
}

function closeHamburger() {
  hamBurgerDiv.classList.remove("open");
  mainBody.style.opacity = "1";
  hamBurgerDiv.style.opacity = "1";
}

function handleResize() {
  if (window.matchMedia("(min-width: 960px)").matches) {
    hamBurgerDiv.style.display = "none";
    mainBody.style.opacity = "1";
  } else {
    hamBurgerDiv.style.display = "block";
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

function rightScrollLatestSection() {
  latestGreatestContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function leftScrollLatestSection() {
  latestGreatestContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

rightNavigation.addEventListener("click", rightScrollLatestSection);
leftNavigation.addEventListener("click", leftScrollLatestSection);
