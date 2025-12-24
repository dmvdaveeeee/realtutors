// firebase.js (WORKING VERSION FOR DAVETUTORS)

// Import Firebase SDKs (WEB SAFE)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config (YOUR REAL PROJECT)
const firebaseConfig = {
  apiKey: "AIzaSyAGeDpvMq3l41NlGeQoXu8c4xrpit9rHsk",
  authDomain: "davetutors-626ad.firebaseapp.com",
  projectId: "davetutors-626ad",
  storageBucket: "davetutors-626ad.firebasestorage.app",
  messagingSenderId: "606494183906",
  appId: "1:606494183906:web:052203d3e339830cc5e9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORT THESE (VERY IMPORTANT)
export const auth = getAuth(app);
export const db = getFirestore(app);
