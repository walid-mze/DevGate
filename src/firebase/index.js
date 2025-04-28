// src/firebase/index.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCyMmSpo9DU-VqAIN4qEb0lyUyY014QNp8",
  
    authDomain: "devgate-684bb.firebaseapp.com",
  
    projectId: "devgate-684bb",
  
    storageBucket: "devgate-684bb.firebasestorage.app",
  
    messagingSenderId: "939925579828",
  
    appId: "1:939925579828:web:347787dcf56cfebf2b8261"
  
  };
  
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export everything
export { app, auth, db, provider };
