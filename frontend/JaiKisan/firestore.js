// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const configuration = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(configuration)

const db = firebase.firestore();

export default db;
