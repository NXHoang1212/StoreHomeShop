// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, FacebookAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0CeM6p_ZwAWaGY_JwXb1VlcjswAMbAxw",
    authDomain: "sha1-354100.firebaseapp.com",
    projectId: "sha1-354100",
    storageBucket: "sha1-354100.appspot.com",
    messagingSenderId: "1013175089849",
    appId: "1:1013175089849:web:fe2d460949784efa987968",
    measurementId: "G-B75YQTXN8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export default { auth, provider };