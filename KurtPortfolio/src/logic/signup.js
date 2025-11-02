import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

const button = document.getElementById("signupbutton");

button.addEventListener ("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        alert("Worked");
    })
    .catch((error)=> {
        alert("Didn't work > " + error.message)
    })
})