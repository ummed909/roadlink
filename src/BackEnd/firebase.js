// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfUUQV6u7pHD8ylYlYovc4I9Eqk5ftlU",
  authDomain: "transportaionproject.firebaseapp.com",
  projectId: "transportaionproject",
  storageBucket: "transportaionproject.appspot.com",
  messagingSenderId: "268137714543",
  appId: "1:268137714543:web:17b631686f5972fb4b0e9a",
  measurementId: "G-MJNJEPPQP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);