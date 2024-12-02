// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMLtjQ44O7lpFbwSLRFvqNLL2mZ6LMmsM",
    authDomain: "ecommerce-app-3ac4f.firebaseapp.com",
    projectId: "ecommerce-app-3ac4f",
    storageBucket: "ecommerce-app-3ac4f.firebasestorage.app",
    messagingSenderId: "974974322547",
    appId: "1:974974322547:web:b3d2ce076372cb64c6a706",
    measurementId: "G-YEGZ173Y86"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
