import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAMdOW2CFDiD-DVZRFhBOgDJVM0O--hhGw",
    authDomain: "react-a86ca.firebaseapp.com",
    projectId: "react-a86ca",
    storageBucket: "react-a86ca.appspot.com",
    messagingSenderId: "526994841544",
    appId: "1:526994841544:web:11ae8e76c7db7a1e6f2afd",
    measurementId: "G-TX3HPM6DPJ"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
