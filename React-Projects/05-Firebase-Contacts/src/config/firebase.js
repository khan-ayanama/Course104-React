import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAixv5g6wQzLzG1aMHHnZsWWucNCR-IGw",
  authDomain: "vite-contacts-370da.firebaseapp.com",
  projectId: "vite-contacts-370da",
  storageBucket: "vite-contacts-370da.appspot.com",
  messagingSenderId: "345922044818",
  appId: "1:345922044818:web:a24e89c0aaa665b392774b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
