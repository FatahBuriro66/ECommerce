import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCHxiqio94he7QuMchkcQbdRj3WA6f_RKE",
    authDomain: "react-ecommerce-projec.firebaseapp.com",
    databaseURL: "https://react-ecommerce-projec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-ecommerce-projec",
    storageBucket: "react-ecommerce-projec.appspot.com",
    messagingSenderId: "961581921269",
    appId: "1:961581921269:web:41dab36442d3e4bfcc26bc",
    measurementId: "G-C7E61DKT87"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
