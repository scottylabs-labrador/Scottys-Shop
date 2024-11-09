// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDLXvRZn_q-EEatsZGZ1A2IrnnHBdClVI",
  authDomain: "scotty-s-shop.firebaseapp.com",
  projectId: "scotty-s-shop",
  storageBucket: "scotty-s-shop.firebasestorage.app",
  messagingSenderId: "536820215098",
  appId: "1:536820215098:web:6dba6a3285b991cda5b403",
  measurementId: "G-L89K2DWYRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const usersRef = collection(db, "Users");
export const photosRef = collection(db, "Photos");
export const storageRef = getStorage(app);