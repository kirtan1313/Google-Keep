// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLTEyeBsPp6kBQKmVzPejs_bKeEq9V8Io",
  authDomain: "keep-c4452.firebaseapp.com",
  projectId: "keep-c4452",
  storageBucket: "keep-c4452.appspot.com",
  messagingSenderId: "696464274916",
  appId: "1:696464274916:web:58615708fbcb7ec8a283f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)