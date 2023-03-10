// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1mpG4N6BGmovTCf92m862DL8sVAzj3QM",
  authDomain: "react-socialmedia-6a023.firebaseapp.com",
  projectId: "react-socialmedia-6a023",
  storageBucket: "react-socialmedia-6a023.appspot.com",
  messagingSenderId: "376663352585",
  appId: "1:376663352585:web:75fcb5bd2cf9b67eef9fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)