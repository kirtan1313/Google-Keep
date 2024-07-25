import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3j1arPlWvCyHwbwZYMc3RE48Fcqr-R_E",
  authDomain: "login-crud-fb.firebaseapp.com",
  projectId: "login-crud-fb",
  storageBucket: "login-crud-fb.appspot.com",
  messagingSenderId: "551642290846",
  appId: "1:551642290846:web:f41c48480dac6a887cf98f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 