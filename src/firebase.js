// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwjH1zJ1GbIYRwcuuGN5Gtw8Vb_q3F2NQ",
    authDomain: "bcu-library.firebaseapp.com",
    projectId: "bcu-library",
    storageBucket: "bcu-library.appspot.com",
    messagingSenderId: "773492348238",
    appId: "1:773492348238:web:e874139858466bd774fa1f",
    measurementId: "G-N6LFH0B1VY",
};

// * Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStorage = getStorage(app);
// const analytics = getAnalytics(app);

// * Initialize services
const fireStore = getFirestore(app);

export { fireStore, fireStorage };
