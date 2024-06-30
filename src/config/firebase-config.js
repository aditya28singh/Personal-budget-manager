// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfT0UGNQrmK8p3oXjD-WIzsVa7WUC7XJ0",
  authDomain: "expense-tracker-3209f.firebaseapp.com",
  projectId: "expense-tracker-3209f",
  storageBucket: "expense-tracker-3209f.appspot.com",
  messagingSenderId: "558234342157",
  appId: "1:558234342157:web:42865a37bb2449c872d644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);