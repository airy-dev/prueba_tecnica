import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'
import firebase from 'firebase'
import 'firebase/firestore';
import App from './App.vue'
import router from './router'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

let app = ''

firebase.initializeApp ({
  apiKey: "AIzaSyBzbpaY992WAite5cSgK4AuKu3K48-Tpd4",
  authDomain: "vue-firebase-tutorial-5c478.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-5c478.firebaseio.com",
  projectId: "vue-firebase-tutorial-5c478",
  storageBucket: "vue-firebase-tutorial-5c478.appspot.com",
  messagingSenderId: "836418149293",
  appId: "1:836418149293:web:b9554af817dfed7cd81f24"
});

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			render: h => h(App)
		}).$mount('#app')
	}
});

//var database = firebase.firestore();

/*database.collection("answers").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().answer}`);
  })
})*/