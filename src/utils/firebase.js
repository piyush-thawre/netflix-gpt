// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBar79koZ5s5NcFSlIrVIpWOnGInC41kdI",
  authDomain: "netflixgpt-3e649.firebaseapp.com",
  projectId: "netflixgpt-3e649",
  storageBucket: "netflixgpt-3e649.appspot.com",
  messagingSenderId: "264952010914",
  appId: "1:264952010914:web:1d1866fe94e4e4822ddffb",
  measurementId: "G-BCVKSJDXD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);