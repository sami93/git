import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwEnnKG-SJBXHXCfrkxA1q-p0hhgq5YNk",
  authDomain: "testproject-16d7d.firebaseapp.com",
  databaseURL: "https://testproject-16d7d.firebaseio.com",
  projectId: "testproject-16d7d",
  storageBucket: "testproject-16d7d.appspot.com",
  messagingSenderId: "250701819223"
};
firebase.initializeApp(config);

export default firebase;