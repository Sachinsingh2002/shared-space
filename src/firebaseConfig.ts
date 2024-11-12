// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdhQW5qltfID_aUww7xsWUJo1TcIHMI5k",
  authDomain: "shared-space-7c4ed.firebaseapp.com",
  projectId: "shared-space-7c4ed",
  storageBucket: "shared-space-7c4ed.appspot.com",
  messagingSenderId: "651841552015",
  appId: "1:651841552015:web:e05d3c7f00d2f48202bafa",
  measurementId: "G-KCNS3NNY53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth };
