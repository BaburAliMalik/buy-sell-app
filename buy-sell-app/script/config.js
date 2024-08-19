import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD00h13m7A4KeGajmi6bwwR8srkYWyaMlk",
  authDomain: "buy-and-sell-website-babar.firebaseapp.com",
  projectId: "buy-and-sell-website-babar",
  storageBucket: "buy-and-sell-website-babar.appspot.com",
  messagingSenderId: "1005720067862",
  appId: "1:1005720067862:web:ee7e4d9640d19ee8eeba37",
  measurementId: "G-K464HY2NJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);