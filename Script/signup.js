import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
} from "./firebase.js";

const auth = getAuth();
let emailInput = document.getElementById("user-email");
let passwordInput = document.getElementById("user-password");
let signupButton = document.getElementById("create-account");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let firstNameError = document.getElementById("firstname-error");
let lastNameError = document.getElementById("lastname-error");
let firstNameInput = document.getElementById("firstname-input");
let lastNameInput = document.getElementById("lastname-input");
let policyCheckbox = document.getElementById("policy-checkbox");
let policyText = document.getElementById("nike-policy");

function validateFields() {
  let isValid = true;

  if (emailInput.value === "") {
    emailInput.style.borderColor = "red";
    emailInput.style.borderWidth = "2px";
    emailError.style.display = "block";
    isValid = false;
  }

  if (passwordInput.value === "") {
    passwordInput.style.borderColor = "red";
    passwordInput.style.borderWidth = "2px";
    passwordError.style.display = "block";
    isValid = false;
  }

  if (firstNameInput.value === "") {
    firstNameInput.style.borderColor = "red";
    firstNameInput.style.borderWidth = "2px";
    firstNameError.style.display = "block";
    isValid = false;
  }

  if (lastNameInput.value === "") {
    lastNameInput.style.borderColor = "red";
    lastNameInput.style.borderWidth = "2px";
    lastNameError.style.display = "block";
    isValid = false;
  }

  if (!policyCheckbox.checked) {
    policyText.style.color = "red";
    isValid = false;
  }

  return isValid;
}

function testingValidationRealtime() {
  emailInput.addEventListener("input", function () {
    if (emailInput.value !== "") {
      emailInput.style.border = "1px solid gray";
      emailError.style.display = "none";
    } else {
      emailInput.style.border = "2px solid red";
      emailError.style.display = "block";
    }
  });
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value !== "") {
      passwordInput.style.border = "1px solid gray";
      passwordError.style.display = "none";
    } else {
      passwordInput.style.border = "2px solid red";
      passwordError.style.display = "block";
    }
  });
  firstNameInput.addEventListener("input", function () {
    if (firstNameInput.value !== "") {
      firstNameInput.style.border = "1px solid gray";
      firstNameError.style.display = "none";
    } else {
      firstNameInput.style.border = "2px solid red";
      firstNameError.style.display = "block";
    }
  });
  lastNameInput.addEventListener("input", function () {
    if (lastNameInput.value !== "") {
      lastNameInput.style.border = "1px solid gray";
      lastNameError.style.display = "none";
    } else {
      lastNameInput.style.border = "2px solid red";
      lastNameError.style.display = "block";
    }
  });
  policyCheckbox.addEventListener("change", function () {
    if (this.checked) {
      policyText.style.color = "black";
    } else {
      policyText.style.color = "red";
    }
  });
}

testingValidationRealtime();

function userSignup() {
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then((userCredential) => {
      const user = userCredential.user;
      emailError.textContent = "Required";
      emailInput.style.border = "1px solid grey";
      emailError.style.display = "none";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      emailError.textContent = "Enter a Valid Email";
      emailInput.style.border = "2px solid red";
      emailError.style.display = "block";
    });
}

signupButton.addEventListener("click", function () {
  const allFieldsValid = validateFields();

  if (allFieldsValid) {
    userSignup();
    signupButton.textContent = "Creating Account...";
    signupButton.disabled = true;
    signupButton.style.backgroundColor = "grey";
  }
});
