import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGgQhtqussZBMjZ5ak13CtVX_vQ7Lq4sc",
  authDomain: "react-fire-c6c33.firebaseapp.com",
  projectId: "react-fire-c6c33",
  storageBucket: "react-fire-c6c33.appspot.com",
  messagingSenderId: "1004904262532",
  appId: "1:1004904262532:web:85eb87e093faee67ed0bd1",
  measurementId: "G-K0DJJXTZDD",
};
firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();
