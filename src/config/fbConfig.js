import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCH5WgTKcEeNHk4lWWxFh1BN9WU9Vz6Jrk",
    authDomain: "mario-5a832.firebaseapp.com",
    projectId: "mario-5a832",
    storageBucket: "mario-5a832.appspot.com",
    messagingSenderId: "70572319640",
    appId: "1:70572319640:web:149d9e5b330a444a4f41ed",
    measurementId: "G-VQ64XRWRZD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })
export default firebase;