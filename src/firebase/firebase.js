// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAlWOaZ-iDNFWU5e5X8C4_Bq4PRnlJ9Ulw",

  authDomain: "authentication-medium.firebaseapp.com",

  projectId: "authentication-medium",

  storageBucket: "authentication-medium.appspot.com",

  messagingSenderId: "619941293673",

  appId: "1:619941293673:web:9b4b9fc6d7ed6197ac7cf8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
