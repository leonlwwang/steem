// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy-8_982uc8keGoC7cG4CpoTWxIrJ11BQ",
  authDomain: "steamclonestore.firebaseapp.com",
  projectId: "steamclonestore",
  storageBucket: "steamclonestore.appspot.com",
  messagingSenderId: "437785690482",
  appId: "1:437785690482:web:4bea1532e38f02dbaf5deb",
  measurementId: "G-JHN0EZ9LPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
