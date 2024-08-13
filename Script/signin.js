import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "./firebase.js";

let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let signInButton = document.getElementById("sign-in");
let buttonContainer = document.getElementById("button-container");
let spinnerContainer = document.getElementById("spinner-container");

function signIn() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed with ID:", user.uid);
      buttonContainer.style.display = "none";
      spinnerContainer.style.display = "flex";
      setTimeout(function () {
        window.location = "index.html";
      }, 3000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

signInButton.addEventListener("click", signIn);
