// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0XeAvi0JqsCytYc5rpE9XYExT7UggEQ",
  authDomain: "dreamstone-3c8bc.firebaseapp.com",
  projectId: "dreamstone-3c8bc",
  storageBucket: "dreamstone-3c8bc.appspot.com",  // fix: should be .app**spot**.com
  messagingSenderId: "250194150587",
  appId: "1:250194150587:web:8725900d4c105fa07b159e",
  measurementId: "G-LNL0THHGMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Add event listener to the button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully!");
      window.location.href="main.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
