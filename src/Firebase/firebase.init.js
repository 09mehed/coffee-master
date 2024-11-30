// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcgnejJNmiZ8dYXvg--cQHqcf4-BoqAzc",
  authDomain: "coffee-store-e09cb.firebaseapp.com",
  projectId: "coffee-store-e09cb",
  storageBucket: "coffee-store-e09cb.firebasestorage.app",
  messagingSenderId: "795587157210",
  appId: "1:795587157210:web:ce805bef548cf2116e19e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
