// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Y5tnfbk_Xjxd2OxLRunkQhiz4MxuLqE",
  authDomain: "contact-page-d9894.firebaseapp.com",
  projectId: "contact-page-d9894",
  storageBucket: "contact-page-d9894.appspot.com",
  messagingSenderId: "262827718264",
  appId: "1:262827718264:web:897079ceafc92daf9edf8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)