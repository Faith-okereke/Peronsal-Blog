// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa2A7-hQKuYVfusmmd-u8kS-5jUC7WUls",
  authDomain: "myblog-db34b.firebaseapp.com",
  projectId: "myblog-db34b",
  storageBucket: "myblog-db34b.firebasestorage.app",
  messagingSenderId: "994746793471",
  appId: "1:994746793471:web:583c36e7ae642e1842fbca",
  measurementId: "G-XBYYYTNCTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);