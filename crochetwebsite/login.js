// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy0XeAvi0JqsCytYc5rpE9XYExT7UggEQ",
    authDomain: "dreamstone-3c8bc.firebaseapp.com",
    projectId: "dreamstone-3c8bc",
    storageBucket: "dreamstone-3c8bc.appspot.com",
    messagingSenderId: "250194150587",
    appId: "1:250194150587:web:8725900d4c105fa07b159e",
    measurementId: "G-LNL0THHGMX"
};

const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("bxs-show");
    togglePassword.classList.toggle("bxs-hide");
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Add event listener to the login button
const submit = document.querySelector('.btn');
submit.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in
            const user = userCredential.user;
            alert("Logged in successfully!");
            window.location.href = "titlepage.html"; // Redirect on success
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});
