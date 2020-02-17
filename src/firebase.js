import firebase from 'firebase/app';
//import * as firebase from "firebase";
//import 'firebase/firestore';
import '@firebase/database';

const config = {
  apiKey: "AIzaSyBzbpaY992WAite5cSgK4AuKu3K48-Tpd4",
  authDomain: "vue-firebase-tutorial-5c478.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-5c478.firebaseio.com",
  projectId: "vue-firebase-tutorial-5c478",
  storageBucket: "vue-firebase-tutorial-5c478.appspot.com",
  messagingSenderId: "836418149293",
  appId: "1:836418149293:web:b9554af817dfed7cd81f24"
};

const firebaseApp = firebase.initializeApp(config,"Secondary");

//export default firebaseApp.firestore()
export default firebaseApp.database()