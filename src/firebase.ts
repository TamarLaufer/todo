// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxtuc2Lb-9bpLAdVrnosJBiznNirt5cS8",
  authDomain: "todo-26496.firebaseapp.com",
  projectId: "todo-26496",
  storageBucket: "todo-26496.appspot.com",
  messagingSenderId: "307876444629",
  appId: "1:307876444629:web:9fce0bbc34d0724e4be55c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
