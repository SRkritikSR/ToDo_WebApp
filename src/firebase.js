
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { applyActionCode, getAuth } from "firebase/auth";
import firebaseConfig from "./config/FirebaseConfig";



const firebaseapp=initializeApp(firebaseConfig);
export const auth= getAuth(firebaseapp);
export default firebaseapp;
// const analytics=getAnalytics(firebaseapp);