// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4zeSDm7l2s4hkPi-L4Li1tSfYroPimgc",
  authDomain: "doctors-home.firebaseapp.com",
  projectId: "doctors-home",
  storageBucket: "doctors-home.appspot.com",
  messagingSenderId: "138519885351",
  appId: "1:138519885351:web:e0744de9bf0d732d0d0002",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.EACT_APP_API_KEY,
//   authDomain: process.env.EACT_APP_AUTH_DOMAIN,
//   projectId: process.env.EACT_APP_PROJECT_ID,
//   storageBucket: process.env.EACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.EACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.EACT_APP_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
