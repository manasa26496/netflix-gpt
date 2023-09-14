// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDORtp-MaPL61IaMrQlrnWSxm3akJsWJgk",
  authDomain: "netflix-gpt-f8ea9.firebaseapp.com",
  projectId: "netflix-gpt-f8ea9",
  storageBucket: "netflix-gpt-f8ea9.appspot.com",
  messagingSenderId: "157782136268",
  appId: "1:157782136268:web:b85490433d8d29a7387969",
  measurementId: "G-6F2G4RP9QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();