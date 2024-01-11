// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_JvQDqUXVKPdJVZ7CnL5lB4sdC40E2U",
  authDomain: "bazarapp-d30b9.firebaseapp.com",
  projectId: "bazarapp-d30b9",
  storageBucket: "bazarapp-d30b9.appspot.com",
  messagingSenderId: "1070032659638",
  appId: "1:1070032659638:web:cdc1aaf1c6b2db42bd7217",
  measurementId: "G-M1L4HWX6TZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
