// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_kDV-Atu1fL5iFa7F3u3psE9lqDSMOpk",
  authDomain: "doctors-portal-5332b.firebaseapp.com",
  projectId: "doctors-portal-5332b",
  storageBucket: "doctors-portal-5332b.appspot.com",
  messagingSenderId: "60047024855",
  appId: "1:60047024855:web:c6700b6e0683e0cd158692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;