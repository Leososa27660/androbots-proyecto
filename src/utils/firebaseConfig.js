// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8hoNZEHHfDrvcSgT0SEjdAR4WojIDVMc",
    authDomain: "androbots-react.firebaseapp.com",
    projectId: "androbots-react",
    storageBucket: "androbots-react.appspot.com",
    messagingSenderId: "556610175503",
    appId: "1:556610175503:web:95da55c8f9d4a66785197a"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);