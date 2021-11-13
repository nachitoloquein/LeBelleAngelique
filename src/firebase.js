import { firebase } from 'firebase';
import { ref, onUnmounted } from 'vue';

const config = {
    apiKey: "AIzaSyDHpDUxcTxqVtpZMV84WOZG-P3RobJFKTg",
    authDomain: "lebelleangelique-68abb.firebaseapp.com",
    projectId: "lebelleangelique-68abb",
    storageBucket: "lebelleangelique-68abb.appspot.com",
    messagingSenderId: "190012135164",
    appId: "1:190012135164:web:81914c728dba17970d2979",
    measurementId: "G-ZTKHS9C9JG"
};

const firebaseApp = firebase.initializeApp(config)