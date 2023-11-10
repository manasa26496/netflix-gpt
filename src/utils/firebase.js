// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvWjBCXzoN-KKWrWMxDWqiUJjGc-aoEsw",
  authDomain: "flix-withgpt.firebaseapp.com",
  projectId: "flix-withgpt",
  storageBucket: "flix-withgpt.appspot.com",
  messagingSenderId: "1000895764767",
  appId: "1:1000895764767:web:0c5e8948c3f3beece6f82a",
  measurementId: "G-FNMBLSWLFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();