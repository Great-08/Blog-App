import {getAuth, GoogleAuthProvider} from 'firebase/auth' 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9CUp9QUGb_hK5rYuhryIwl-gpqtXbJm0",
  authDomain: "blog-app-e093e.firebaseapp.com",
  projectId: "blog-app-e093e",
  storageBucket: "blog-app-e093e.firebasestorage.app",
  messagingSenderId: "610787515749",
  appId: "1:610787515749:web:f8e2b7c6944dbda3ba958c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();