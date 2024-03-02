// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-91f3f.firebaseapp.com",
  projectId: "mern-blog-91f3f",
  storageBucket: "mern-blog-91f3f.appspot.com",
  messagingSenderId: "654382321029",
  appId: "1:654382321029:web:6db7eeb5365b23be99c8ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

