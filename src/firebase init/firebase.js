// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rmRihAolxgXW6R6AWkwS_pMJusy-bEU",
  authDomain: "simple-email-and-password.firebaseapp.com",
  projectId: "simple-email-and-password",
  storageBucket: "simple-email-and-password.firebasestorage.app",
  messagingSenderId: "454987141153",
  appId: "1:454987141153:web:51807fb9f1ed0b06a2d360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth