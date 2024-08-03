// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1-535b9.firebaseapp.com",
  projectId: "mern-estate-1-535b9",
  storageBucket: "mern-estate-1-535b9.appspot.com",
  messagingSenderId: "184370911728",
  appId: "1:184370911728:web:277b45407d61577dd9e535"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
