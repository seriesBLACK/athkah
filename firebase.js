// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "athkah-45124.firebaseapp.com",
  projectId: "athkah-45124",
  storageBucket: "athkah-45124.appspot.com",
  messagingSenderId: "51588683158",
  appId: "1:51588683158:web:c245f2193465571d5ab9b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);