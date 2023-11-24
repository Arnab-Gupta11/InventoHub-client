import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaWQ-yfpK9WjeqhJyUKYD6nxgxfHiMAY",
  authDomain: "inventory-management-sys-67be7.firebaseapp.com",
  projectId: "inventory-management-sys-67be7",
  storageBucket: "inventory-management-sys-67be7.appspot.com",
  messagingSenderId: "622550915064",
  appId: "1:622550915064:web:0564bf2bf98daeede7a80d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
