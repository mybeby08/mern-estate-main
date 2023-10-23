// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sfwest-33c25.firebaseapp.com",
  projectId: "sfwest-33c25",
  storageBucket: "sfwest-33c25.appspot.com",
  messagingSenderId: "919141931764",
  appId: "1:919141931764:web:30e9aca53817f0ce9f9ca1",
  measurementId: "G-V7C2J6420Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
