import {
  getDatabase,
  getAuth,
  onAuthStateChanged,
  ref,
  get,
  child,
  signOut,
} from "./firebase.js";

// All the HomePage DOM Elements

// Navbar, Carousels, and Footer -- Start

let hamBurgerMenu = document.getElementById("hamburger-menu");
let hamBurgerDiv = document.getElementById("hamburger-div");
let closeButton = document.getElementById("close-button");
let mainBody = document.getElementById("main-navbar");
let mainDiv = document.getElementById("main-div-section");
let leftNavigation = document.getElementById("left-navigate");
let rightNavigation = document.getElementById("right-navigate");
let rightNavigateIcon = document.getElementById("right-navigate-icon");
let leftNavigateIcon = document.getElementById("left-navigate-icon");
let leftSportNavigator = document.getElementById("left-navigate-sport");
let rightSportNavigator = document.getElementById("right-navigate-sport");
let shopBySportNavigator = document.getElementById(
  "shop-by-sport-card-container"
);

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
let footerResourceToggler = document.getElementById("footer-toogle-resource");
let footerResourceList = document.getElementById("footer-resource");
let footerHelpList = document.getElementById("footer-toogle-help");
let runningSport = document.getElementById("running-sport-mobile");
let footballSport = document.getElementById("football-sport-mobile");
let basketballSport = document.getElementById("basketball-mobile");
let trainingAndGym = document.getElementById("training-and-gym-mobile");
let tennisMobile = document.getElementById("tennis-mobile");
let yogaMobile = document.getElementById("yoga-mobile");
let skateboardingMobile = document.getElementById("skateboarding-mobile");
let danceMobile = document.getElementById("dance-mobile");
let mobileUser = document.getElementById("mobile-user");

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
    runningSport.src = "Assets/running.jpg";
    footballSport.src = "Assets/football.jpg";
    basketballSport.src = "Assets/basketball.jpg";
    trainingAndGym.src = "Assets/training-and-gym.jpg";
    tennisMobile.src = "Assets/tennis.jpg";
    yogaMobile.src = "Assets/yoga.jpg";
    skateboardingMobile.src = "Assets/skateboarding.jpg";
    danceMobile.src = "Assets/dance.jpg";
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
    runningSport.src = "Assets/running-mobile.jpg";
    footballSport.src = "Assets/football-mobile.jpg";
    basketballSport.src = "Assets/basketball-mobile.jpg";
    trainingAndGym.src = "Assets/training-and-gym-mobile.jpg";
    tennisMobile.src = "Assets/tennis-mobile.jpg";
    yogaMobile.src = "Assets/yoga-mobile.jpg";
    skateboardingMobile.src = "Assets/skateboarding-mobile.jpg";
    danceMobile.src = "Assets/dance-mobile.jpg";
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

function rightSportNavigatorAction() {
  shopBySportNavigator.scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function leftSportNavigatorAction() {
  shopBySportNavigator.scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

leftSportNavigator.addEventListener("click", leftSportNavigatorAction);
rightSportNavigator.addEventListener("click", rightSportNavigatorAction);

rightNavigateIcon.addEventListener("click", rightScrollShopIcons);
leftNavigateIcon.addEventListener("click", leftScrollShopIcons);

function footerResourceTogglerAction() {
  footerResourceList.classList.toggle("show");
  footerResourceToggler.classList.toggle("rotate");
  console.log("Hello");
}

footerResourceToggler.addEventListener("click", footerResourceTogglerAction);

//Firebase -- Start

let currentUserDisplay = document.getElementById("current-user");
let joinNavbar = document.getElementById("join-navbar");
let dividerNavbar = document.getElementById("divider-navbar");
let signinNavbar = document.getElementById("signin-navbar");
let userHoverState = document.getElementById("user-hover-state");
let logoutButton = document.getElementById("logout-button");
let signInStateDiv = document.getElementById("sign-in-state");
let mobileSignupSection = document.getElementById("mobile-signup-section");
let mobileUserDisplay = document.getElementById("mobile-user-display");

let firebaseUserFirstName;

const database = getDatabase();

export function checkCurrentUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      joinNavbar.style.display = "none";
      dividerNavbar.style.display = "none";
      signinNavbar.style.display = "none";
      signInStateDiv.style.display = "flex";
      mobileSignupSection.style.display = "none";
      mobileUser.style.display = "flex";

      const uid = user.uid;
      updateNavUser(uid);
    } else {
      mobileUser.style.display = "none";
    }
  });
}

export function updateNavUser(uid) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        firebaseUserFirstName = snapshot.val().firstName;
        currentUserDisplay.innerHTML = `Hi, ${firebaseUserFirstName}`;
        mobileUserDisplay.innerHTML = `Hi, ${firebaseUserFirstName}`;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

checkCurrentUser();
//Firebase -- End

currentUserDisplay.addEventListener("mouseenter", function () {
  userHoverState.classList.add("show-user-menu");
});

userHoverState.addEventListener("mouseleave", function () {
  userHoverState.classList.remove("show-user-menu");
});

function signOutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      signInStateDiv.style.display = "none";
      console.log("Signout Successful");
      location.reload();
    })
    .catch((error) => {
      // An error happened.
      console.log("Failure");
    });
}

let hamburgerDivContainer = document.getElementById("hamburger-div-container");
let userDivContainer = document.getElementById("user-div-container");
let backUserDiv = document.getElementById("back-user-div");
let mobileLogout = document.getElementById("mobile-logout");

mobileUser.addEventListener("click", function () {
  hamburgerDivContainer.classList.toggle("hide");
  userDivContainer.classList.toggle("show");
});

backUserDiv.addEventListener("click", function () {
  setTimeout(function () {
    hamburgerDivContainer.classList.toggle("hide");
  }, 150);
  userDivContainer.classList.toggle("show");
});

logoutButton.addEventListener("click", function () {
  logoutButton.textContent = "Logging Out...";
  this.disabled = true;
  setTimeout(signOutUser, 3000);
});

mobileLogout.addEventListener("click", function () {
  mobileLogout.textContent = "Logging Out";
  setTimeout(signOutUser, 3000);
});
