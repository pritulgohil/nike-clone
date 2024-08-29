import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import {
  getDatabase,
  set,
  child,
  get,
  ref as dbRef, // Alias for database reference
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref as storageRef, // Alias for storage reference
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIZIQf24eqO3wrEjOoU5xC6Pw3sSNSfqQ",
  authDomain: "nike-4eac9.firebaseapp.com",
  databaseURL: "https://nike-4eac9-default-rtdb.firebaseio.com",
  projectId: "nike-4eac9",
  storageBucket: "nike-4eac9.appspot.com",
  messagingSenderId: "529245274724",
  appId: "1:529245274724:web:2f59d78d04c939d100d571",
};

let firebaseUserFirstName;

const app = initializeApp(firebaseConfig);

export {
  initializeApp,
  getAuth,
  createUserWithEmailAndPassword,
  getDatabase,
  set,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  firebaseUserFirstName,
  get,
  child,
  signOut,
  getStorage,
  uploadBytes,
  getDownloadURL,
  storageRef,
  dbRef,
  push,
  onValue,
};
