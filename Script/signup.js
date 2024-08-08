// import {
//   initializeApp,
//   getAuth,
//   createUserWithEmailAndPassword,
//   getDatabase,
//   ref,
//   set,
// } from "./firebase.js";

// const auth = getAuth();
// let emailInput = document.getElementById("user-email");
// let passwordInput = document.getElementById("user-password");
// let signupButton = document.getElementById("create-account");
// let emailError = document.getElementById("email-error");
// let passwordError = document.getElementById("password-error");
// let firstNameError = document.getElementById("firstname-error");
// let lastNameError = document.getElementById("lastname-error");
// let firstNameInput = document.getElementById("firstname-input");
// let lastNameInput = document.getElementById("lastname-input");
// let policyCheckbox = document.getElementById("policy-checkbox");
// let policyText = document.getElementById("nike-policy");
// let buttonContainer = document.getElementById("button-container");
// let spinnerContainer = document.getElementById("spinner-container");
// let shoppingPreference = document.getElementById("shopping-preference");
// let firstPasswordValidation = document.getElementById(
//   "first-password-validation"
// );
// let secondPasswordValidation = document.getElementById(
//   "second-password-validation"
// );

// let userShoppingPreference;
// let user;

// function validateFields() {
//   let isValid = true;

//   if (emailInput.value === "") {
//     emailInput.style.borderColor = "red";
//     emailInput.style.borderWidth = "2px";
//     emailError.style.display = "block";
//     isValid = false;
//   }

//   if (passwordInput.value === "") {
//     passwordInput.style.borderColor = "red";
//     passwordInput.style.borderWidth = "2px";
//     passwordError.style.display = "block";
//     isValid = false;
//   }

//   if (firstNameInput.value === "") {
//     firstNameInput.style.borderColor = "red";
//     firstNameInput.style.borderWidth = "2px";
//     firstNameError.style.display = "block";
//     isValid = false;
//   }

//   if (lastNameInput.value === "") {
//     lastNameInput.style.borderColor = "red";
//     lastNameInput.style.borderWidth = "2px";
//     lastNameError.style.display = "block";
//     isValid = false;
//   }

//   if (!policyCheckbox.checked) {
//     policyText.style.color = "red";
//     isValid = false;
//   }

//   return isValid;
// }

// function testingValidationRealtime() {
//   emailInput.addEventListener("input", function () {
//     if (emailInput.value !== "") {
//       emailInput.style.border = "1px solid gray";
//       emailError.style.display = "none";
//     } else {
//       emailInput.style.border = "2px solid red";
//       emailError.style.display = "block";
//     }
//   });
//   passwordInput.addEventListener("input", function () {
//     if (passwordInput.value !== "") {
//       passwordInput.style.border = "1px solid gray";
//       passwordError.style.display = "none";
//     } else {
//       passwordInput.style.border = "2px solid red";
//       passwordError.style.display = "block";
//     }
//   });
//   firstNameInput.addEventListener("input", function () {
//     if (firstNameInput.value !== "") {
//       firstNameInput.style.border = "1px solid gray";
//       firstNameError.style.display = "none";
//     } else {
//       firstNameInput.style.border = "2px solid red";
//       firstNameError.style.display = "block";
//     }
//   });
//   lastNameInput.addEventListener("input", function () {
//     if (lastNameInput.value !== "") {
//       lastNameInput.style.border = "1px solid gray";
//       lastNameError.style.display = "none";
//     } else {
//       lastNameInput.style.border = "2px solid red";
//       lastNameError.style.display = "block";
//     }
//   });
//   policyCheckbox.addEventListener("change", function () {
//     if (this.checked) {
//       policyText.style.color = "black";
//     } else {
//       policyText.style.color = "red";
//     }
//   });
// }

// testingValidationRealtime();

// function userSignup() {
//   createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
//     .then((userCredential) => {
//       user = userCredential.user;
//       writeUserDataOnSignup();
//       emailError.textContent = "Required";
//       emailInput.style.border = "1px solid grey";
//       emailError.style.display = "none";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       emailError.textContent = "Enter a Valid Email";
//       emailInput.style.border = "2px solid red";
//       emailError.style.display = "block";
//     });
// }

// function shoppingPreferenceChecker() {
//   shoppingPreference.addEventListener("change", function () {
//     userShoppingPreference = shoppingPreference.value;
//   });
// }

// shoppingPreferenceChecker();

// function signInRedirection() {
//   window.location.href = "./signin.html";
// }

// signupButton.addEventListener("click", function () {
//   const allFieldsValid = validateFields();

//   if (allFieldsValid) {
//     buttonContainer.style.display = "none";
//     spinnerContainer.style.display = "flex";
//     userSignup();
//     setTimeout(signInRedirection, 3000);
//   }
// });

// function writeUserDataOnSignup() {
//   const db = getDatabase();
//   set(ref(db, "users/" + user.uid), {
//     email: emailInput.value,
//     firstName: firstNameInput.value,
//     lastName: lastNameInput.value,
//     shoppingPreference: userShoppingPreference,
//   });
// }

// import {
//   initializeApp,
//   getAuth,
//   createUserWithEmailAndPassword,
//   getDatabase,
//   ref,
//   set,
// } from "./firebase.js";

// const auth = getAuth();
// let emailInput = document.getElementById("user-email");
// let passwordInput = document.getElementById("user-password");
// let signupButton = document.getElementById("create-account");
// let emailError = document.getElementById("email-error");
// let passwordError = document.getElementById("password-error");
// let firstNameError = document.getElementById("firstname-error");
// let lastNameError = document.getElementById("lastname-error");
// let firstNameInput = document.getElementById("firstname-input");
// let lastNameInput = document.getElementById("lastname-input");
// let policyCheckbox = document.getElementById("policy-checkbox");
// let policyText = document.getElementById("nike-policy");
// let buttonContainer = document.getElementById("button-container");
// let spinnerContainer = document.getElementById("spinner-container");
// let shoppingPreference = document.getElementById("shopping-preference");
// let firstPasswordValidation = document.getElementById(
//   "first-password-validation"
// );
// let secondPasswordValidation = document.getElementById(
//   "second-password-validation"
// );

// let userShoppingPreference;
// let user;

// function validateFields() {
//   let isValid = true;

//   if (emailInput.value === "") {
//     emailInput.style.borderColor = "red";
//     emailInput.style.borderWidth = "2px";
//     emailError.style.display = "block";
//     isValid = false;
//   }

//   if (!validatePassword(passwordInput.value)) {
//     passwordInput.style.borderColor = "red";
//     passwordInput.style.borderWidth = "2px";
//     passwordError.style.display = "block";
//     isValid = false;
//   }

//   if (firstNameInput.value === "") {
//     firstNameInput.style.borderColor = "red";
//     firstNameInput.style.borderWidth = "2px";
//     firstNameError.style.display = "block";
//     isValid = false;
//   }

//   if (lastNameInput.value === "") {
//     lastNameInput.style.borderColor = "red";
//     lastNameInput.style.borderWidth = "2px";
//     lastNameError.style.display = "block";
//     isValid = false;
//   }

//   if (!policyCheckbox.checked) {
//     policyText.style.color = "red";
//     isValid = false;
//   }

//   return isValid;
// }

// function validatePassword(password) {
//   const minLength = password.length >= 8;
//   const hasUppercase = /[A-Z]/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);

//   if (!minLength) {
//     firstPasswordValidation.style.display = "block";
//   } else {
//     firstPasswordValidation.style.display = "none";
//   }

//   if (!hasUppercase || !hasLowercase || !hasNumber) {
//     secondPasswordValidation.style.display = "block";
//   } else {
//     secondPasswordValidation.style.display = "none";
//   }

//   return minLength && hasUppercase && hasLowercase && hasNumber;
// }

// function testingValidationRealtime() {
//   emailInput.addEventListener("input", function () {
//     if (emailInput.value !== "") {
//       emailInput.style.border = "1px solid gray";
//       emailError.style.display = "none";
//     } else {
//       emailInput.style.border = "2px solid red";
//       emailError.style.display = "block";
//     }
//   });
//   passwordInput.addEventListener("input", function () {
//     if (validatePassword(passwordInput.value)) {
//       passwordInput.style.border = "1px solid gray";
//       passwordError.style.display = "none";
//     } else {
//       passwordInput.style.border = "2px solid red";
//       passwordError.style.display = "block";
//     }
//   });
//   firstNameInput.addEventListener("input", function () {
//     if (firstNameInput.value !== "") {
//       firstNameInput.style.border = "1px solid gray";
//       firstNameError.style.display = "none";
//     } else {
//       firstNameInput.style.border = "2px solid red";
//       firstNameError.style.display = "block";
//     }
//   });
//   lastNameInput.addEventListener("input", function () {
//     if (lastNameInput.value !== "") {
//       lastNameInput.style.border = "1px solid gray";
//       lastNameError.style.display = "none";
//     } else {
//       lastNameInput.style.border = "2px solid red";
//       lastNameError.style.display = "block";
//     }
//   });
//   policyCheckbox.addEventListener("change", function () {
//     if (this.checked) {
//       policyText.style.color = "black";
//     } else {
//       policyText.style.color = "red";
//     }
//   });
// }

// testingValidationRealtime();

// function userSignup() {
//   createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
//     .then((userCredential) => {
//       user = userCredential.user;
//       writeUserDataOnSignup();
//       emailError.textContent = "Required";
//       emailInput.style.border = "1px solid grey";
//       emailError.style.display = "none";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       emailError.textContent = "Enter a Valid Email";
//       emailInput.style.border = "2px solid red";
//       emailError.style.display = "block";
//     });
// }

// function shoppingPreferenceChecker() {
//   shoppingPreference.addEventListener("change", function () {
//     userShoppingPreference = shoppingPreference.value;
//   });
// }

// shoppingPreferenceChecker();

// function signInRedirection() {
//   window.location.href = "./signin.html";
// }

// signupButton.addEventListener("click", function () {
//   const allFieldsValid = validateFields();

//   if (allFieldsValid) {
//     buttonContainer.style.display = "none";
//     spinnerContainer.style.display = "flex";
//     userSignup();
//     setTimeout(signInRedirection, 3000);
//   }
// });

// function writeUserDataOnSignup() {
//   const db = getDatabase();
//   set(ref(db, "users/" + user.uid), {
//     email: emailInput.value,
//     firstName: firstNameInput.value,
//     lastName: lastNameInput.value,
//     shoppingPreference: userShoppingPreference,
//   });
// }

import {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  getDatabase,
  ref,
  set,
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
let buttonContainer = document.getElementById("button-container");
let spinnerContainer = document.getElementById("spinner-container");
let shoppingPreference = document.getElementById("shopping-preference");
let firstPasswordValidation = document.getElementById(
  "first-password-validation"
);
let secondPasswordValidation = document.getElementById(
  "second-password-validation"
);
let firstCross = document.getElementById("cross-1");
let secondCross = document.getElementById("cross-2");

let userShoppingPreference;
console.log(shoppingPreference.value);
let user;

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
  } else if (!validatePassword(passwordInput.value)) {
    passwordInput.style.borderColor = "red";
    passwordInput.style.borderWidth = "2px";
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

function validatePassword(password) {
  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!minLength) {
    firstCross.textContent = "✘";
    firstCross.classList.remove("cross-check-pass");
    console.log("Error Found");
  } else {
    firstCross.textContent = "✔";
    firstCross.classList.add("cross-check-pass");
  }

  if (!hasUppercase || !hasLowercase || !hasNumber) {
    secondCross.textContent = "✘";
    secondCross.classList.remove("cross-check-pass");
  } else {
    secondCross.textContent = "✔";
    secondCross.classList.add("cross-check-pass");
  }

  return minLength && hasUppercase && hasLowercase && hasNumber;
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
    if (passwordInput.value === "") {
      passwordInput.style.border = "2px solid red";
      passwordError.style.display = "block";
      firstCross.textContent = "✘";
      secondCross.textContent = "✘";
      firstCross.classList.remove("cross-check-pass");
      secondCross.classList.remove("cross-check-pass");
    } else {
      passwordInput.style.border = "1px solid gray";
      passwordError.style.display = "none";
      validatePassword(passwordInput.value);
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
      user = userCredential.user;
      writeUserDataOnSignup();
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

function shoppingPreferenceChecker() {
  shoppingPreference.addEventListener("change", function () {
    userShoppingPreference = shoppingPreference.value;
  });
}

shoppingPreferenceChecker();

function signInRedirection() {
  window.location.href = "./signin.html";
}

signupButton.addEventListener("click", function () {
  const allFieldsValid = validateFields();

  if (allFieldsValid) {
    buttonContainer.style.display = "none";
    spinnerContainer.style.display = "flex";
    userSignup();
    setTimeout(signInRedirection, 3000);
  }
});

function writeUserDataOnSignup() {
  const db = getDatabase();
  set(ref(db, "users/" + user.uid), {
    email: emailInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    shoppingPreference: userShoppingPreference,
  });
}
