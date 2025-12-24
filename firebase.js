// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGeDpvMq3l41NlGeQoXu8c4xrpit9rHsk",
  authDomain: "davetutors-626ad.firebaseapp.com",
  projectId: "davetutors-626ad",
  storageBucket: "davetutors-626ad.appspot.com",
  messagingSenderId: "606494183906",
  appId: "1:606494183906:web:052203d3e339830cc5e9bb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
