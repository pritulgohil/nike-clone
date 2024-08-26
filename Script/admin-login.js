import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let buttonContainer = document.getElementById("button-container");
let spinnerContainer = document.getElementById("spinner-container");
let signInButton = document.getElementById("sign-in");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let isEmailValid;
let ispasswordValid;

function signIn() {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed with ID:", user.uid);
      buttonContainer.style.display = "none";
      spinnerContainer.style.display = "flex";
      setTimeout(function () {
        window.location = "admin-dashboard.html";
      }, 3000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

emailInput.addEventListener("input", function () {
  if (emailInput.value === "") {
    emailError.textContent = "Required";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
    isEmailValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.style.borderColor = "gray";
    emailInput.style.borderWidth = "1px";
    isEmailValid = false;
  }

  if (emailInput.value === "pritulgohil519@gmail.com") {
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

signInButton.addEventListener("click", function () {
  if (isEmailValid && ispasswordValid) {
    signIn();
  } else if (emailInput.value === "") {
    emailError.textContent = "Required";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
  }
  if (passwordInput.value === "") {
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
    passwordInput.style.borderWidth = "2px";
  }

  if (
    emailInput.value !== "pritulgohil519@gmail.com" &&
    emailInput.value !== ""
  ) {
    emailError.textContent = "Invalid Email";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
  }
});
