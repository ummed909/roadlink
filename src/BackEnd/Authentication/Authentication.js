import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
