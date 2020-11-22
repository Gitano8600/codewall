import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import 'firebase/analytics';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyASly6LVpFCQLwCcQuRJ2SDQSi4c-w04RI",
    authDomain: "codewall-676ac.firebaseapp.com",
    databaseURL: "https://codewall-676ac.firebaseio.com",
    projectId: "codewall-676ac",
    storageBucket: "codewall-676ac.appspot.com",
    messagingSenderId: "893008627325",
    appId: "1:893008627325:web:61a94d10caadec57045314",
    measurementId: "G-MQMXQ00E0B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore();

  export default firebase;