import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2uO-eM8HAREGtjIP0VjWwctOI3GqNN54",
  authDomain: "book-delivery-app-e6907.firebaseapp.com",
  projectId: "book-delivery-app-e6907",
  storageBucket: "book-delivery-app-e6907.firebasestorage.app",
  messagingSenderId: "151669048921",
  appId: "1:151669048921:web:52730a39015304a39e1348",
  measurementId: "G-09RPJG7QSC"
};

const app = initializeApp(firebaseConfig);

// Make sure these are properly exported
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;