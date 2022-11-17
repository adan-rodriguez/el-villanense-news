// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCykhT4GBL5DUSBNppvlN7Py4vBngWBZnU",
  authDomain: "el-villanense-4efa5.firebaseapp.com",
  projectId: "el-villanense-4efa5",
  storageBucket: "el-villanense-4efa5.appspot.com",
  messagingSenderId: "703366970993",
  appId: "1:703366970993:web:bb2eb3bcb3cbbf95d1a5d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
