

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDk4JUB7df-ASjWcDaWEZzouPkDnnBTgs0",
    authDomain: "stady-8a218.firebaseapp.com",
    projectId: "stady-8a218",
    storageBucket: "stady-8a218.firebasestorage.app",
    messagingSenderId: "131913800734",
    appId: "1:131913800734:web:10af4c662f8e05a8be220f",
    measurementId: "G-GKECZ4M0JX"
  };
  

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleBtn = document.querySelector(".google-login");

googleBtn.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider); 
    const user = result.user;
    alert("Login berhasil: " + user.email);
    window.location.href = "choice.html";
  } catch (error) {
    alert("Login gagal: " + error.message);
  }
});

import { FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Facebook Login
const facebookBtn = document.querySelector(".facebook-login");

facebookBtn.addEventListener("click", async () => {
  const provider = new FacebookAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert("Login Facebook berhasil: " + user.email);
    window.location.href = "choice.html";
  } catch (error) {
    alert("Gagal login Facebook: " + error.message);
    console.error(error);
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
     
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("Login berhasil!");

      // Redirect ke halaman dashboard / menu
      window.location.href = "choice.html";
    } catch (error) {
      alert("Gagal login: " + error.message);
    }
  });
});
