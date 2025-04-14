

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDk4JUB7df-ASjWcDaWEZzouPkDnnBTgs0",
    authDomain: "stady-login.firebaseapp.com",
    projectId: "stady-login",
    storageBucket: "stady-login.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123456def7890"
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
    alert("Login Google berhasil!");
    window.location.href = "choice.html";
  } catch (error) {
    alert("Gagal login Google: " + error.message);
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
