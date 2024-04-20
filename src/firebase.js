// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAm_s76F-3tLm7JPttiOIbNkfTeNpsNNpI",
    authDomain: "clone-2429d.firebaseapp.com",
    projectId: "clone-2429d",
    storageBucket: "clone-2429d.appspot.com",
    messagingSenderId: "931377286705",
    appId: "1:931377286705:web:646daa357dff5b12234f10",
    measurementId: "G-EHEKNCJ3M4"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
export{db,auth}