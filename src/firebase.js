// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAURdkTiVnnZbyYOEErL5JS4qAzkU4Y0cc",
  authDomain: "pcweb6-project.firebaseapp.com",
  projectId: "pcweb6-project",
  storageBucket: "pcweb6-project.appspot.com",
  messagingSenderId: "1054081062272",
  appId: "1:1054081062272:web:973c1f985d0dbc22999d65",
  measurementId: "G-JPVSWZXYYX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

