// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-U_Lvg73yIyztKCoCaeNUIYI4YdAAeFM",
  authDomain: "learning-project-851bc.firebaseapp.com",
  projectId: "learning-project-851bc",
  storageBucket: "learning-project-851bc.appspot.com",
  messagingSenderId: "678776698605",
  appId: "1:678776698605:web:c85a29529df9d658fa7ee4",
  measurementId: "G-Y21263JLD7",
  databaseURL: "https://learning-project-851bc-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
