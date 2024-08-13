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
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let isEmailValid;
let ispasswordValid;

emailInput.addEventListener("input", function () {
  if (emailInput.value === "") {
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
    isEmailValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.style.borderColor = "gray";
    emailInput.style.borderWidth = "1px";
    isEmailValid = true;
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.value === "") {
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
    passwordInput.style.borderWidth = "2px";
    ispasswordValid = false;
  } else {
    passwordError.style.display = "none";
    passwordInput.style.borderColor = "gray";
    passwordInput.style.borderWidth = "1px";
    ispasswordValid = true;
  }
});

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

signInButton.addEventListener("click", function () {
  if (isEmailValid && ispasswordValid) {
    signIn();
  }
});
