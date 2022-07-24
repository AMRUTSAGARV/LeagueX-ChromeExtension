// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7lckmmKGQVVQDGa1joVyaM2YGmy1a_FA",
  authDomain: "shop-app-64145.firebaseapp.com",
  projectId: "shop-app-64145",
  storageBucket: "shop-app-64145.appspot.com",
  messagingSenderId: "300264906598",
  appId: "1:300264906598:web:6c023f6002d1c368f872a7",
  measurementId: "G-B1HXB75MEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
