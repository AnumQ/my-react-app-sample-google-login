import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXPMdHF4GnC24GxeVYDa5-W1uqE-Fs0Pw",
  authDomain: "signin-f492c.firebaseapp.com",
  projectId: "signin-f492c",
  storageBucket: "signin-f492c.appspot.com",
  messagingSenderId: "103968433370",
  appId: "1:103968433370:web:b1e5139e94229b93d031e3",
  measurementId: "G-4S4WJKKVH0",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
