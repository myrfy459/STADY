// Import Firebase (gunakan ES module style)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Konfigurasi 
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



// Ambil form dan input
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Password tidak cocok");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Registrasi berhasil!");
        // Redirect ke halaman lain jika diperlukan
        window.location.href = "signin.html";
      })
      .catch((error) => {
        alert("Gagal registrasi: " + error.message);
      });
  });
});