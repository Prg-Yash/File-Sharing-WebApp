import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYGWa2IUwxZDWSowERldz9vN08WNBHOa8",

  authDomain: "share-dom.firebaseapp.com",

  projectId: "share-dom",

  storageBucket: "share-dom.appspot.com",

  messagingSenderId: "712985248638",

  appId: "1:712985248638:web:de35f6ea50e88b20f9692f",

  measurementId: "G-S3RNW4745N",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // For server side rending
const db = getFirestore(app);

export { app, db };
