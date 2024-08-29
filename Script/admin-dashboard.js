import {
  getAuth,
  signOut,
  getDatabase,
  dbRef, // Import the aliased dbRef
  storageRef, // Import the aliased storageRef
  child,
  get,
  getStorage,
  uploadBytes,
  getDownloadURL,
  set,
  push, // Don't forget to import push and set from Firebase Realtime Database
} from "./firebase.js";

// DOM element references
let overviewContainer = document.getElementById("overview-container");
let inventoryContainer = document.getElementById("inventory-container");
let ordersContainer = document.getElementById("orders-container");
let overviewButton = document.getElementById("overview-button");
let inventoryButton = document.getElementById("inventory-button");
let ordersButton = document.getElementById("orders-button");
let Tab1 = document.getElementById("tab1");
let Tab2 = document.getElementById("tab2");
let Tab3 = document.getElementById("tab3");
let logoutButton = document.getElementById("logout-button");
let shopOurIconContainer = document.getElementById("shop-our-icons-container");
let latestAndGreatestContainer = document.getElementById(
  "latest-and-greatest-container"
);
let showShopOurIcon = document.getElementById("show-shop-our-icon");
let showLatestAndGreatest = document.getElementById("show-latest-and-greatest");
let mainCategoryContainer = document.getElementById("main-category-container");
let shoeLaunchForm = document.getElementById("show-launch-form");
let shoeLaunchHeader = document.getElementById("shoe-launch-header");
// let uploadImagesButton = document.getElementById("upload-images-button");
let imageUploadContainer = document.getElementById("image-upload-container");
let imageStatus = document.getElementById("image-status");
let imageShowcase = document.getElementById("image-showcase");
inventoryButton.addEventListener("click", showInventorySection);
let publishProduct = document.getElementById("publish-product");
let publishButtonContainer = document.getElementById(
  "publish-button-container"
);

function showInventorySection() {
  overviewContainer.style.display = "none";
  inventoryContainer.style.display = "flex";
  ordersContainer.style.display = "none";
  Tab1.style.backgroundColor = "#e2c044";
  Tab1.style.color = "black";
  Tab2.style.backgroundColor = "#2E5266";
  Tab2.style.color = "white";
  Tab3.style.backgroundColor = "#e2c044";
  Tab3.style.color = "black";
}

overviewButton.addEventListener("click", showOverviewSection);

function showOverviewSection() {
  overviewContainer.style.display = "flex";
  inventoryContainer.style.display = "none";
  ordersContainer.style.display = "none";
  Tab1.style.backgroundColor = "#2E5266";
  Tab1.style.color = "white";
  Tab2.style.backgroundColor = "#e2c044";
  Tab2.style.color = "black";
  Tab3.style.backgroundColor = "#e2c044";
  Tab3.style.color = "black";
}

ordersButton.addEventListener("click", showOrderSection);

function showOrderSection() {
  ordersContainer.style.display = "flex";
  inventoryContainer.style.display = "none";
  overviewContainer.style.display = "none";
  Tab3.style.backgroundColor = "#2E5266";
  Tab3.style.color = "white";
  Tab1.style.backgroundColor = "#e2c044";
  Tab1.style.color = "black";
  Tab2.style.backgroundColor = "#e2c044";
  Tab2.style.color = "black";
}

logoutButton.addEventListener("click", signOutAdmin);

function signOutAdmin() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signout Successful");
      logoutButton.textContent = "Logging Out...";
      logoutButton.style.color = "gray";
      setTimeout(function () {
        window.location = "../admin-login.html";
      }, 3000);
    })
    .catch((error) => {
      console.log("Failure");
    });
}

function readMainCategories() {
  const db = getDatabase();
  const dbReference = dbRef(db, "Inventory/Categories");

  get(dbReference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const idWithHyphens = childSnapshot.key.replace(/\s+/g, "-");
          const keyWithSpaces = childSnapshot.key.replace(/-/g, " ");

          mainCategoryContainer.innerHTML += `<div id="${idWithHyphens}" class="cards card-hover">
                <p>${keyWithSpaces}</p>
              </div>`;
        });
        let shopOurIcons = document.getElementById("Shop-Our-Icons");
        let latestAndGreatest = document.getElementById("Latest-And-Greatest");
        shopOurIcons.addEventListener("click", function () {
          console.log("Latest Clicked");
          showShopOurIcon.style.display = "flex";
          readShopOurIcon();
          document.body.style.height = "2000px";
          showShopOurIcon.scrollIntoView({
            behavior: "smooth",
          });
        });
        latestAndGreatest.addEventListener("click", function () {
          console.log("Latest and Greatest Clicked");
          showLatestAndGreatest.style.display = "flex";
          readLatestAndGreatest();
          document.body.style.height = "2000px";
          showLatestAndGreatest.scrollIntoView({
            behavior: "smooth",
          });
        });
      } else {
        console.log("No Data Available");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

readMainCategories();

let currentCategory;
let currentSubCategory;

function readShopOurIcon() {
  const db = getDatabase();
  const dbReference = dbRef(db, "Inventory/Categories/Shop-Our-Icons");

  get(dbReference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const idWithHyphensIcon = childSnapshot.key.replace(/\s+/g, "-");
          const keyWithSpaces = childSnapshot.key.replace(/-/g, " ");
          shopOurIconContainer.innerHTML += `<div id=${idWithHyphensIcon} class="shop-our-icons-cards card-hover">
                <p>${keyWithSpaces}</p>
              </div>`;
        });
        let airForce1Form = document.getElementById("Air-Force-1");
        airForce1Form.addEventListener("click", function () {
          console.log("Air Force 1 Clicked");
          shoeLaunchHeader.textContent = `Drop New ${airForce1Form.textContent} Kicks`;
          currentCategory = "Shop Our Icons";
          // currentSubCategory = airForce1Form.textContent.replace(/\s+/g, "-");
          currentSubCategory = "Air Force 1";
          shoeLaunchForm.style.display = "flex";
          document.body.style.height = "3000px";
          shoeLaunchForm.scrollIntoView({
            behavior: "smooth",
          });
        });
      } else {
        console.log("No Data Available");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function readLatestAndGreatest() {
  const db = getDatabase();
  const dbReference = dbRef(db, "Inventory/Categories/Latest-And-Greatest");

  get(dbReference)
    .then((snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          const idWithHyphensIcon = childSnapshot.key.replace(/\s+/g, "-");
          const keyWithSpaces = childSnapshot.key.replace(/-/g, " ");
          latestAndGreatestContainer.innerHTML += `<div id=${idWithHyphensIcon} class="shop-our-icons-cards card-hover">
                <p>${keyWithSpaces}</p>
              </div>`;
        });
        let getSetForSchool = document.getElementById("Get-Set-For-School");
        getSetForSchool.addEventListener("click", function () {
          console.log("Get Set For School Clicked");
          shoeLaunchHeader.textContent = `Drop New ${getSetForSchool.textContent} Products`;
          currentCategory = "Latest And Greatest";
          // currentSubCategory = airForce1Form.textContent.replace(/\s+/g, "-");
          currentSubCategory = "Get Set For School";
          shoeLaunchForm.style.display = "flex";
          document.body.style.height = "3000px";
          shoeLaunchForm.scrollIntoView({
            behavior: "smooth",
          });
        });
      } else {
        console.log("No Data Available");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

let productTitleInput = document.getElementById("product-title-input");
let productGenderCategory = document.getElementById("product-gender");
let saveProductButton = document.getElementById("save-product-button");
let productLabel = document.getElementById("product-label");
let bestSellerStatus = document.getElementById("best-seller");
let productPrice = document.getElementById("product-price");
let bestSellerValue;
let selectedProductGender = "";

productGenderCategory.addEventListener("change", function () {
  selectedProductGender = this.value;
});

bestSellerStatus.addEventListener("change", function () {
  bestSellerValue = this.value;
});

function getSelectedSizes() {
  let selectedSizes = [];
  let sizeCheckboxes = document.querySelectorAll(
    "input[name='shoeSize']:checked"
  );

  sizeCheckboxes.forEach(function (checkbox) {
    selectedSizes.push(checkbox.value);
  });

  return selectedSizes;
}

function fetchProductDetails() {
  let productDetails = {
    productName: productTitleInput.value,
    productGender: selectedProductGender,
    productLabel: productLabel.value,
    bestSellerStaus: bestSellerValue,
    productPrice: productPrice.value,
    productSizes: getSelectedSizes(),
  };
  console.log(productDetails);
  const db = getDatabase();

  if (
    currentCategory === "Shop Our Icons" &&
    currentSubCategory === "Air Force 1"
  ) {
    set(
      dbRef(
        db,
        `Inventory/Categories/Shop-Our-Icons/Air-Force-1/${productTitleInput.value}`
      ),
      {
        productDetails,
      }
    );
  } else if (
    currentCategory === "Latest And Greatest" &&
    currentSubCategory === "Get Set For School"
  ) {
    set(
      dbRef(
        db,
        `Inventory/Categories/Latest-And-Greatest/Get-Set-For-School/${productTitleInput.value}`
      ),
      {
        productDetails,
      }
    );
  }
}

saveProductButton.addEventListener("click", function () {
  saveProductButton.textContent = "Saving Product...";

  setTimeout(function () {
    fetchProductDetails();
    saveProductButton.textContent = "Product Saved";
    imageUploadContainer.style.display = "block";
    imageUploadContainer.scrollIntoView({
      behavior: "smooth",
    });
  }, 3000);
});

let fileInput = document.getElementById("fileInput");
let uploadImagesButton = document.getElementById("upload-images-button");

uploadImagesButton.addEventListener("click", function () {
  uploadImagesButton.textContent = "Uploading...";
  setTimeout(function () {
    uploadFiles();
    uploadImagesButton.textContent = "Uploaded";
    publishButtonContainer.style.display = "block";
  }, 3000);
});

// function uploadFiles() {
//   const files = fileInput.files; // Get the selected files
//   console.log(files);

//   if (!files.length) {
//     console.error("No files selected!");
//     return;
//   }

//   const storage = getStorage();
//   const db = getDatabase();

//   // Loop through each file and upload it
//   Array.from(files).forEach((file, index) => {
//     const fileStorageRef = storageRef(
//       storage,
//       `${productTitleInput.value}/${file.name}`
//     );

//     // Upload the file to Firebase Storage
//     uploadBytes(fileStorageRef, file)
//       .then(() => {
//         imageStatus.style.display = "block";
//         imageStatus.textContent = `Uploaded file ${index + 1} of ${
//           files.length
//         }: ${file.name}`;

//         console.log(
//           `Uploaded file ${index + 1} of ${files.length}: ${file.name}`
//         );

//         // Get the download URL of the uploaded file
//         return getDownloadURL(fileStorageRef);
//       })
//       .then((downloadURL) => {
//         console.log(`File ${index + 1} available at: ${downloadURL}`);
//         imageShowcase.innerHTML += `<img src="${downloadURL}">`;
//         // Now store this URL in Firebase Realtime Database

//         const imagesDatabaseRef = dbRef(
//           db,
//           `Inventory/Categories/Shop-Our-Icons/Air-Force-1/${
//             productTitleInput.value
//           }/productDetails/images/image${index + 1}`
//         );

//         const image = {
//           url: downloadURL,
//           name: file.name,
//           createdAt: Date.now(),
//         };

//         // Set data in the corresponding image node (image1, image2, etc.)
//         return set(imagesDatabaseRef, image);
//       })
//       .then(() => {
//         console.log(
//           `File ${index + 1} URL stored in Realtime Database successfully.`
//         );
//       })
//       .catch((error) => {
//         console.error(
//           `Error uploading file ${index + 1} or storing URL: `,
//           error
//         );
//       });
//   });
// }

function uploadFiles() {
  const files = fileInput.files; // Get the selected files
  console.log(files);

  if (!files.length) {
    console.error("No files selected!");
    return;
  }

  const storage = getStorage();
  const db = getDatabase();

  // Loop through each file and upload it
  Array.from(files).forEach((file, index) => {
    const fileStorageRef = storageRef(
      storage,
      `${productTitleInput.value}/${file.name}`
    );

    // Upload the file to Firebase Storage
    uploadBytes(fileStorageRef, file)
      .then(() => {
        imageStatus.style.display = "block";
        imageStatus.textContent = `Uploaded file ${index + 1} of ${
          files.length
        }: ${file.name}`;

        console.log(
          `Uploaded file ${index + 1} of ${files.length}: ${file.name}`
        );

        // Get the download URL of the uploaded file
        return getDownloadURL(fileStorageRef);
      })
      .then((downloadURL) => {
        console.log(`File ${index + 1} available at: ${downloadURL}`);
        imageShowcase.innerHTML += `<img src="${downloadURL}">`;

        // Determine the correct path based on the category and subcategory
        let imagesDatabaseRef;

        if (
          currentCategory === "Shop Our Icons" &&
          currentSubCategory === "Air Force 1"
        ) {
          imagesDatabaseRef = dbRef(
            db,
            `Inventory/Categories/Shop-Our-Icons/Air-Force-1/${
              productTitleInput.value
            }/productDetails/images/image${index + 1}`
          );
        } else if (
          currentCategory === "Latest And Greatest" &&
          currentSubCategory === "Get Set For School"
        ) {
          imagesDatabaseRef = dbRef(
            db,
            `Inventory/Categories/Latest-And-Greatest/Get-Set-For-School/${
              productTitleInput.value
            }/productDetails/images/image${index + 1}`
          );
        }

        // Prepare image data
        const image = {
          url: downloadURL,
          name: file.name,
          createdAt: Date.now(),
        };

        // Set data in the corresponding image node
        return set(imagesDatabaseRef, image);
      })
      .then(() => {
        console.log(
          `File ${index + 1} URL stored in Realtime Database successfully.`
        );
      })
      .catch((error) => {
        console.error(
          `Error uploading file ${index + 1} or storing URL: `,
          error
        );
      });
  });
}

publishProduct.addEventListener("click", function () {
  publishProduct.textContent = "Publishing Product...";
  setTimeout(function () {
    location.reload();
  }, 3000);
});

// function readProductDetails() {
//   const db = getDatabase();
//   const dbReference = dbRef(
//     db,
//     `Inventory/Categories/Shop-Our-Icons/Air-Force-1/Nike Air Force 1 '07 Next Nature`
//   );

//   get(dbReference)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         snapshot.forEach((childSnapshot) => {
//           const productDetails = childSnapshot.val();
//           console.log(`Product Key: ${childSnapshot.key}`);
//           console.log(childSnapshot.val().images.image1.url);
//         });
//       } else {
//         console.log("No Product Details Available");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching product details:", error);
//     });
// }

// readProductDetails();
