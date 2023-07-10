import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS2XLF9Ojh9aPmoffSNCXrdHjlGwej0hU",
  authDomain: "react-portfolio-sushant.firebaseapp.com",
  projectId: "react-portfolio-sushant",
  storageBucket: "react-portfolio-sushant.appspot.com",
  messagingSenderId: "773442890700",
  appId: "1:773442890700:web:dcf1ff73c0cf3320914b69",
  measurementId: "G-6PVG26JY3V"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore();