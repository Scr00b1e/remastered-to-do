// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAakBmCLXX0bp-6G2TO2HDun6BaHiVvNGk",
    authDomain: "to-do-e0467.firebaseapp.com",
    projectId: "to-do-e0467",
    storageBucket: "to-do-e0467.appspot.com",
    messagingSenderId: "33796773374",
    appId: "1:33796773374:web:ada91f118dbd81f8859caf"
};

export const auth = getAuth()
export const db = getFirestore()

// Initialize Firebase
const app = initializeApp(firebaseConfig);