// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiu4KZwttNLkKOVL_mZpEjRhbO-cckMS0",
  authDomain: "send-otp-910a7.firebaseapp.com",
  projectId: "send-otp-910a7",
  storageBucket: "send-otp-910a7.appspot.com",
  messagingSenderId: "601223418427",
  appId: "1:601223418427:web:94b37168f171bc5c1b821e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
