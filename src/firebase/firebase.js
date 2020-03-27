import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtvXpp7AUHOQL4Y-nqt_nnQK5kCFhbHCU",
  authDomain: "kostendeler-a4ae5.firebaseapp.com",
  databaseURL: "https://kostendeler-a4ae5.firebaseio.com",
  projectId: "kostendeler-a4ae5",
  storageBucket: "kostendeler-a4ae5.appspot.com",
  messagingSenderId: "233600764711",
  appId: "1:233600764711:web:4c92bcc56aeeadba533702"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
