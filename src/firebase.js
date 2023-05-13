// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhBVYxAxuAbUXvzBiFW4kGtkg0lJtmmZI",
  authDomain: "react-shop-app-9586d.firebaseapp.com",
  databaseURL:
    "https://react-shop-app-9586d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-shop-app-9586d",
  storageBucket: "react-shop-app-9586d.appspot.com",
  messagingSenderId: "372272705605",
  appId: "1:372272705605:web:2f6b8715719bc9ff58f32c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;
export const auth = getAuth(app);
