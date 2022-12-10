// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const configuration = {
    apiKey: "AIzaSyDd3BycDKmN2O-JH0qzYX9uP649aKMVJyE",
    authDomain: "chhalaang-hack.firebaseapp.com",
    projectId: "chhalaang-hack",
    storageBucket: "chhalaang-hack.appspot.com",
    messagingSenderId: "1071717653133",
    appId: "1:1071717653133:web:bf2c157241b9f5a294a0c4"
}

firebase.initializeApp(configuration)

const db = firebase.firestore();

export default db;