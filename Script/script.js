let hamBurgerMenu = document.getElementById("hamburger-menu");
let hamBurgerDiv = document.getElementById("hamburger-div");
let closeButton = document.getElementById("close-button");
let mainBody = document.getElementById("main-navbar");
let mainDiv = document.getElementById("main-div-section");
let leftNavigation = document.getElementById("left-navigate");
let rightNavigation = document.getElementById("right-navigate");
let rightNavigateIcon = document.getElementById("right-navigate-icon");
let leftNavigateIcon = document.getElementById("left-navigate-icon");

let htmlBody = document.getElementById("main-body");
let latestGreatestContainer = document.getElementById(
  "latest-greatest-card-container"
);
let shopOurIconsContainer = document.getElementById(
  "shop-our-icons-card-container"
);
let airMaxMobile = document.getElementById("air-max-mobile");
let airForceMobile = document.getElementById("air-force-mobile");
let dunkMobile = document.getElementById("dunk-mobile");
let y2kMobile = document.getElementById("y2k-mobile");
let airJordan = document.getElementById("air-jordan-mobile");
let pegasus = document.getElementById("pegasus-mobile");
let metcon = document.getElementById("metcon-mobile");
let mercurial = document.getElementById("mercurial-mobile");
let latestGreatestSection = document.getElementById("latest-greatest");
let latestHeaderContainer = document.getElementById("latest-header-container");

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
    airMaxMobile.src = "Assets/air-max.jpg";
    airForceMobile.src = "Assets/air-force.jpg";
    dunkMobile.src = "Assets/dunk.jpg";
    y2kMobile.src = "Assets/y2k.jpg";
    airJordan.src = "Assets/air-jordan.jpg";
    pegasus.src = "Assets/pegasus.jpg";
    metcon.src = "Assets/metcon.jpg";
    mercurial.src = "Assets/mercurial.jpg";
  } else {
    hamBurgerDiv.style.display = "block";
    airMaxMobile.src = "Assets/air-max-mobile.jpg";
    airForceMobile.src = "Assets/air-force-mobile.jpg";
    dunkMobile.src = "Assets/dunk-mobile.jpg";
    y2kMobile.src = "Assets/y2k-mobile.jpg";
    airJordan.src = "Assets/air-jordan-mobile.jpg";
    pegasus.src = "Assets/pegasus-mobile.png";
    metcon.src = "Assets/metcon-mobile.jpg";
    mercurial.src = "Assets/mercurial-mobile.jpg";
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

function rightScrollShopIcons() {
  shopOurIconsContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function leftScrollShopIcons() {
  shopOurIconsContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

rightNavigateIcon.addEventListener("click", rightScrollShopIcons);
leftNavigateIcon.addEventListener("click", leftScrollShopIcons);

let lastScrollLeft = 0;
let isScrolling;
const TOLERANCE = 2;

const container = document.getElementById("shopOurIconsContainer");

// shopOurIconsContainer.addEventListener("scroll", function () {
//   let currentScrollLeft = shopOurIconsContainer.scrollLeft;
//   if (currentScrollLeft > lastScrollLeft) {
//     console.log("right");
//     latestGreatestSection.style.padding = "0px 0px 0px 0px";
//   } else if (currentScrollLeft < lastScrollLeft) {
//     console.log("left");
//   }
//   lastScrollLeft = currentScrollLeft;
// });

// shopOurIconsContainer.addEventListener("scroll", function () {
//   let currentScrollLeft = shopOurIconsContainer.scrollLeft;

//   if (currentScrollLeft > lastScrollLeft) {
//     console.log("right");
//     latestGreatestSection.style.padding = "0px 0px 0px 0px";
//     latestHeaderContainer.style.padding = "0px 44px 0px 44px";
//   } else if (currentScrollLeft < lastScrollLeft) {
//     console.log("left");
//   }

//   if (currentScrollLeft === 0) {
//     console.log("Reached left end");
//     latestGreatestSection.style.padding = "0px 0px 0px 44px";
//     latestHeaderContainer.style.padding = "0px 44px 0px 0px";
//   }

//   lastScrollLeft = currentScrollLeft;
// });
