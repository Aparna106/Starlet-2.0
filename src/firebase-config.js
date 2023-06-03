import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaP5tYoHDBdUmAunykqRhYnS0xhZZFoCM",
    authDomain: "shesafe-feec7.firebaseapp.com",
    projectId: "shesafe-feec7",
    storageBucket: "shesafe-feec7.appspot.com",
    messagingSenderId: "861550832985",
    appId: "1:861550832985:web:dfe488038c8fbfd599f048",
    measurementId: "G-SPYTNE96D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
