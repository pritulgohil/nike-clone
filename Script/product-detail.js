import {
  getDatabase,
  getAuth,
  onAuthStateChanged,
  dbRef,
  get,
  child,
  signOut,
  onValue,
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
let imageGallery = document.getElementById("image-gallery");
let imageDisplay = document.getElementById("image-display");
let productTitle = document.getElementById("product-title");
let imageDisplayContainer = document.getElementById("image-display-container");
let productGenderCategory = document.getElementById("product-gender-category");
let productPrice = document.getElementById("product-price");
let productSizesContainer = document.getElementById("product-sizes");
let suggestedProductsContainer = document.getElementById(
  "suggested-products-container"
);
let sizeAndFitContainer = document.getElementById("size-and-fit-container");
let sizeAndFitShow = document.getElementById("size-and-fit-show");
let sizeAndFitIcon = document.getElementById("size-and-fit-icon");

let freeDeliveryAndReturnsContainer = document.getElementById(
  "free-delivery-and-returns-container"
);
let freeDeliveryShow = document.getElementById("free-delivery-show");
let freeDeliveryIcon = document.getElementById("free-delivery-icon");

let reviewsContainer = document.getElementById("reviews-container");
let reviewsIcon = document.getElementById("reviews-icon");
let reviewsShow = document.getElementById("review-show");
let productDetailsContainer = document.getElementById(
  "product-details-container"
);
let viewProductDetailsButton = document.getElementById(
  "view-product-details-button"
);
let productDetailsCard = document.getElementById("product-details-card");

hamBurgerMenu.addEventListener("click", toggleHamBurgerMenu);
closeButton.addEventListener("click", closeHamburger);

// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get individual parameters
let parameter1 = urlParams.get("parameter1");
let parameter2 = urlParams.get("parameter2");
let parameter3 = urlParams.get("parameter3");

// Log the parameters to the console to verify
console.log("Parameter 1:", parameter1);
console.log("Parameter 2:", parameter2);
console.log("Parameter 3:", parameter3);

// You can now use these parameters in your code as needed

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
    // mainBody.style.opacity = "1";
    // airMaxMobile.src = "Assets/air-max.jpg";
    // airForceMobile.src = "Assets/air-force.jpg";
    // dunkMobile.src = "Assets/dunk.jpg";
    // y2kMobile.src = "Assets/y2k.jpg";
    // airJordan.src = "Assets/air-jordan.jpg";
    // pegasus.src = "Assets/pegasus.jpg";
    // metcon.src = "Assets/metcon.jpg";
    // mercurial.src = "Assets/mercurial.jpg";
    // runningSport.src = "Assets/running.jpg";
    // footballSport.src = "Assets/football.jpg";
    // basketballSport.src = "Assets/basketball.jpg";
    // trainingAndGym.src = "Assets/training-and-gym.jpg";
    // tennisMobile.src = "Assets/tennis.jpg";
    // yogaMobile.src = "Assets/yoga.jpg";
    // skateboardingMobile.src = "Assets/skateboarding.jpg";
    // danceMobile.src = "Assets/dance.jpg";
  } else {
    hamBurgerDiv.style.display = "block";
    // airMaxMobile.src = "Assets/air-max-mobile.jpg";
    // airForceMobile.src = "Assets/air-force-mobile.jpg";
    // dunkMobile.src = "Assets/dunk-mobile.jpg";
    // y2kMobile.src = "Assets/y2k-mobile.jpg";
    // airJordan.src = "Assets/air-jordan-mobile.jpg";
    // pegasus.src = "Assets/pegasus-mobile.png";
    // metcon.src = "Assets/metcon-mobile.jpg";
    // mercurial.src = "Assets/mercurial-mobile.jpg";
    // runningSport.src = "Assets/running-mobile.jpg";
    // footballSport.src = "Assets/football-mobile.jpg";
    // basketballSport.src = "Assets/basketball-mobile.jpg";
    // trainingAndGym.src = "Assets/training-and-gym-mobile.jpg";
    // tennisMobile.src = "Assets/tennis-mobile.jpg";
    // yogaMobile.src = "Assets/yoga-mobile.jpg";
    // skateboardingMobile.src = "Assets/skateboarding-mobile.jpg";
    // danceMobile.src = "Assets/dance-mobile.jpg";
  }
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

// function rightScrollLatestSection() {
//   latestGreatestContainer.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// }

// function leftScrollLatestSection() {
//   latestGreatestContainer.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// }

// rightNavigation.addEventListener("click", rightScrollLatestSection);
// leftNavigation.addEventListener("click", leftScrollLatestSection);

// function rightScrollShopIcons() {
//   shopOurIconsContainer.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// }

// function leftScrollShopIcons() {
//   shopOurIconsContainer.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// }

// function rightSportNavigatorAction() {
//   shopBySportNavigator.scrollBy({
//     left: 300,
//     behavior: "smooth",
//   });
// }

// function leftSportNavigatorAction() {
//   shopBySportNavigator.scrollBy({
//     left: -300,
//     behavior: "smooth",
//   });
// }

// leftSportNavigator.addEventListener("click", leftSportNavigatorAction);
// rightSportNavigator.addEventListener("click", rightSportNavigatorAction);

// rightNavigateIcon.addEventListener("click", rightScrollShopIcons);
// leftNavigateIcon.addEventListener("click", leftScrollShopIcons);

function footerResourceTogglerAction() {
  footerResourceList.classList.toggle("show");
  footerResourceToggler.classList.toggle("rotate");
  console.log("Hello");
}

// footerResourceToggler.addEventListener("click", footerResourceTogglerAction);

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
      console.log("Yes");

      const uid = user.uid;
      console.log(uid);
      updateNavUser(uid);
    } else {
      mobileUser.style.display = "none";
      joinNavbar.style.display = "block";
      dividerNavbar.style.display = "block";
      signinNavbar.style.display = "block";
    }
  });
}

export function updateNavUser(uid) {
  const databaseRef = dbRef(getDatabase());
  get(child(databaseRef, `users/${uid}`))
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

// Script --- Start

// function generateImageGallery() {
//   const databaseRef = dbRef(getDatabase());
//   const inventoryRef = child(
//     databaseRef,
//     `Inventory/Categories/Shop-Our-Icons/Air-Force-1/Nike Air Force 1`
//   );

//   // Set up a real-time listener
//   onValue(
//     inventoryRef,
//     (snapshot) => {
//       if (snapshot.exists()) {
//         snapshot.forEach((childSnapshot) => {
//           const childData = childSnapshot.val().images;
//           if (typeof childData === "object" && childData !== null) {
//             Object.keys(childData).forEach((key) => {
//               const imageNode = childData[key];
//               if (imageNode && imageNode.url) {
//                 imageGallery.innerHTML += `<img src = "${imageNode.url}">`;
//               }
//             });
//           } else {
//             console.log("No image nodes found or childData is not an object.");
//           }
//         });
//       } else {
//         console.log("No data available");
//       }
//     },
//     (error) => {
//       console.error("Error fetching data:", error);
//     }
//   );
// }
// function generateImageGallery() {
//   const databaseRef = dbRef(getDatabase());
//   const inventoryRef = child(
//     databaseRef,
//     `Inventory/Categories/${parameter1}/${parameter2}/${parameter3}`
//   );

//   // Set up a real-time listener
//   onValue(
//     inventoryRef,
//     (snapshot) => {
//       if (snapshot.exists()) {
//         snapshot.forEach((childSnapshot) => {
//           const childData = childSnapshot.val().images;
//           if (typeof childData === "object" && childData !== null) {
//             Object.keys(childData).forEach((key) => {
//               const imageNode = childData[key];
//               if (imageNode && imageNode.url) {
//                 // Create an img element
//                 const imgElement = document.createElement("img");
//                 imgElement.src = imageNode.url;

//                 // Add mouseover event listener to log the image URL
//                 imgElement.addEventListener("mouseover", () => {
//                   console.log(`Image URL: ${imgElement.src}`);
//                   imageDisplay.src = imgElement.src;
//                 });

//                 // Append the img element to the gallery
//                 imageGallery.appendChild(imgElement);
//               }
//             });
//           } else {
//             console.log("No image nodes found or childData is not an object.");
//           }
//         });
//       } else {
//         console.log("No data available");
//       }
//     },
//     (error) => {
//       console.error("Error fetching data:", error);
//     }
//   );
// }

function generateImageGallery() {
  const databaseRef = dbRef(getDatabase());
  const inventoryRef = child(
    databaseRef,
    `Inventory/Categories/${parameter1}/${parameter2}/${parameter3}`
  );

  // Set up a real-time listener
  onValue(
    inventoryRef,
    (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val().images;
          if (typeof childData === "object" && childData !== null) {
            Object.keys(childData).forEach((key) => {
              const mediaNode = childData[key];
              if (mediaNode && mediaNode.url && mediaNode.name) {
                // Determine the type of media by checking the name property
                const fileName = mediaNode.name.toLowerCase();
                const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
                const videoExtensions = ["mp4", "webm", "ogg", "mov"];

                // Extract the file extension from the name
                const fileExtension = fileName.split(".").pop();

                if (imageExtensions.includes(fileExtension)) {
                  // Create an img element for images
                  const imgElement = document.createElement("img");
                  imgElement.src = mediaNode.url;

                  // Add mouseover event listener to log the image URL
                  imgElement.addEventListener("mouseover", () => {
                    console.log(`Image URL: ${imgElement.src}`);
                    imageDisplayContainer.innerHTML = `<img src="${imgElement.src}">`;
                    // imageDisplay.src = imgElement.src;
                  });

                  // Append the img element to the gallery
                  imageGallery.appendChild(imgElement);
                } else if (videoExtensions.includes(fileExtension)) {
                  // Create a video element for videos
                  const videoElement = document.createElement("video");
                  videoElement.src = mediaNode.url;
                  videoElement.controls = false; // Add controls to video

                  // Add mouseover event listener to log the video URL
                  videoElement.addEventListener("mouseover", () => {
                    console.log(`Video URL: ${videoElement.src}`);
                    imageDisplay.src = videoElement.src;
                    imageDisplayContainer.innerHTML = `<video autoplay loop>
        <source src="${mediaNode.url}" type="video/mp4">
        <!-- Fallback content if the video cannot be played -->
        Your browser does not support the video tag.
    </video>`;
                  });

                  // Append the video element to the gallery
                  imageGallery.appendChild(videoElement);
                }
              }
            });
          } else {
            console.log("No image nodes found or childData is not an object.");
          }
        });
      } else {
        console.log("No data available");
      }
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}

generateImageGallery();

// function displayProductDetails() {
//   const databaseRef = dbRef(getDatabase());
//   const inventoryRef = child(
//     databaseRef,
//     `Inventory/Categories/${parameter1}/${parameter2}/${parameter3}`
//   );

//   // Set up a real-time listener
//   onValue(
//     inventoryRef,
//     (snapshot) => {
//       if (snapshot.exists()) {
//         snapshot.forEach((childSnapshot) => {
//           const childData = childSnapshot.val().images.image1.url;
//           imageDisplay.src = childData;

//           const productHeader = childSnapshot.val().productName;
//           productTitle.textContent = productHeader;

//           const productGenderData = childSnapshot.val().productGender;
//           if (productGenderData === "Male") {
//             productGenderCategory.textContent = "Men";
//           }

//           const productPriceData = childSnapshot.val().productPrice;
//           productPrice.textContent = `$${productPriceData}`;
//           console.log(childSnapshot.val().productSizes);
//         });
//       } else {
//         console.log("No data available");
//       }
//     },
//     (error) => {
//       console.error("Error fetching data:", error);
//     }
//   );
// }

function displayProductDetails() {
  const databaseRef = dbRef(getDatabase());
  const inventoryRef = child(
    databaseRef,
    `Inventory/Categories/${parameter1}/${parameter2}/${parameter3}`
  );

  // Set up a real-time listener
  onValue(
    inventoryRef,
    (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val().images.image1.url;
          imageDisplay.src = childData;

          const productHeader = childSnapshot.val().productName;
          productTitle.textContent = productHeader;
          document.title = productHeader;
          const productGenderData = childSnapshot.val().productGender;
          if (productGenderData === "Male") {
            productGenderCategory.textContent = "Men";
          }

          const productPriceData = childSnapshot.val().productPrice;
          productPrice.textContent = `$${productPriceData}`;

          const productSizes = childSnapshot.val().productSizes;

          // Iterate through all children of productSizes
          for (const sizeKey in productSizes) {
            if (productSizes.hasOwnProperty(sizeKey)) {
              const sizeData = productSizes[sizeKey];
              console.log(sizeData);
              productSizesContainer.innerHTML += `<div class = "${sizeData} product-sizes-label"><p>${sizeData}</p></div>`;
              // You can add more logic here to display or use size data
            }
          }
        });
      } else {
        console.log("No data available");
      }
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}

displayProductDetails();

function displaySimilarItems() {
  const databaseRef = dbRef(getDatabase());
  const inventoryRef = child(
    databaseRef,
    `Inventory/Categories/${parameter1}/${parameter2}/`
  );

  // Set up a real-time listener
  onValue(
    inventoryRef,
    (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const productData = childSnapshot.val().productDetails;

          // Create the product container
          const productContainer = document.createElement("div");
          productContainer.className = "products-container";
          productContainer.innerHTML = `
            <div class="suggested-product-image">
              <img
                src="${productData.images.image1.url}"
                alt="${productData.productName}"
              />
            </div>
            <div class="suggested-product-header">
              <p>${productData.productName}</p>
            </div>
            <div class="suggested-product-gender-category">
              <p>${productData.productGender === "Female" ? "Women" : "Men"}</p>
            </div>
            <div class="suggested-product-price">
              <p>$${productData.productPrice}</p>
            </div>
          `;

          // Add click event listener to the product container
          productContainer.addEventListener("click", () => {
            console.log("Product clicked:", productData.productName);
            parameter3 = productData.productName;
            console.log(parameter3);
            const url = `product-detail.html?parameter1=${encodeURIComponent(
              parameter1
            )}&parameter2=${encodeURIComponent(
              parameter2
            )}&parameter3=${encodeURIComponent(parameter3)}`;
            // Additional logic for when a product is clicked
            window.location.href = url;
          });

          // Append the product container to the suggested products container
          suggestedProductsContainer.appendChild(productContainer);
        });
      } else {
        console.log("No data available");
      }
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}

displaySimilarItems();

sizeAndFitContainer.addEventListener("click", function () {
  sizeAndFitShow.classList.toggle("show-toggler");
  sizeAndFitShow.className === "";
  sizeAndFitIcon.style.transition = "transform 0.3s ease";
  if (sizeAndFitIcon.style.transform === "rotate(-180deg)") {
    sizeAndFitIcon.style.transform = "rotate(0deg)";
  } else {
    sizeAndFitIcon.style.transform = "rotate(-180deg)";
  }
});

freeDeliveryAndReturnsContainer.addEventListener("click", function () {
  freeDeliveryShow.classList.toggle("show-toggler");
  freeDeliveryShow.className === "";
  freeDeliveryIcon.style.transition = "transform 0.3s ease";
  if (freeDeliveryIcon.style.transform === "rotate(-180deg)") {
    freeDeliveryIcon.style.transform = "rotate(0deg)";
  } else {
    freeDeliveryIcon.style.transform = "rotate(-180deg)";
  }
});

reviewsContainer.addEventListener("click", function () {
  reviewsShow.classList.toggle("show-toggler");
  reviewsShow.className === "";
  reviewsIcon.style.transition = "transform 0.5s ease";
  if (reviewsIcon.style.transform === "rotate(-180deg)") {
    reviewsIcon.style.transform = "rotate(0deg)";
  } else {
    reviewsIcon.style.transform = "rotate(-180deg)";
  }
});

viewProductDetailsButton.addEventListener("click", function () {
  productDetailsContainer.style.display = "flex";
  document.body.style.overflow = "hidden";
  productDetailsCard.style.overflow = "auto";
});

// Script --- End
