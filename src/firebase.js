// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZJRMeMcJNHGKQiLRG5pb-Cs1WyRurnK8",
  authDomain: "react--clone-f8a63.firebaseapp.com",
  projectId: "react--clone-f8a63",
  storageBucket: "react--clone-f8a63.appspot.com",
  messagingSenderId: "668527816366",
  appId: "1:668527816366:web:d4e2dea061e4202bac073f",
  measurementId: "G-EMKDBNN6WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);