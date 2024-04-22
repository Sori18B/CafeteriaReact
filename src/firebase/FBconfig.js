// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx0r1NXj2N4rJqsLGayCkBNhYdXHI1g70",
  authDomain: "dbreact-4f8e9.firebaseapp.com",
  projectId: "dbreact-4f8e9",
  storageBucket: "dbreact-4f8e9.appspot.com",
  messagingSenderId: "893143669988",
  appId: "1:893143669988:web:4b55c0e09b4ad0a4f960f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export default db;
