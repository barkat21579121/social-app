// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLuwUGwqR0va9bpuzn77ZrllR1Ax4mEE",
  authDomain: "social-app-e269a.firebaseapp.com",
  projectId: "social-app-e269a",
  storageBucket: "social-app-e269a.appspot.com",
  messagingSenderId: "818859317594",
  appId: "1:818859317594:web:f4a4abeab8170909a03b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
