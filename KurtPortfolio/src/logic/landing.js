import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5x4virBGBDXzSgukGtIcVN2FvlDquYWU",
  authDomain: "kurtportfolio-5aaa0.firebaseapp.com",
  databaseURL: "https://kurtportfolio-5aaa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kurtportfolio-5aaa0",
  storageBucket: "kurtportfolio-5aaa0.firebasestorage.app",
  messagingSenderId: "28924515985",
  appId: "1:28924515985:web:0c98b3e1467e90246d5130",
  measurementId: "G-X54WDJQQS1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "/index.html"
    }
    else{
        alert("Welcome user.")
    }
})

const button = document.getElementById("logoutbutton");

button.addEventListener("click", () => {
    signOut(auth)
    .then(() => {
        alert("You have now logged out successfuly.")
        window.location.href = "/index.html"
    })
    .catch((error) => {
        alert("An error has occured: " + error.message)
    })
})
