import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBzbpaY992WAite5cSgK4AuKu3K48-Tpd4",
  authDomain: "vue-firebase-tutorial-5c478.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-5c478.firebaseio.com",
  projectId: "vue-firebase-tutorial-5c478",
  storageBucket: "vue-firebase-tutorial-5c478.appspot.com",
  messagingSenderId: "836418149293",
  appId: "1:836418149293:web:b9554af817dfed7cd81f24"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()