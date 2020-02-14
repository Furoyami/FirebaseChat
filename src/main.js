import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

// Required for side-effects
require('firebase/firestore')
var firebaseConfig = {
  apiKey: 'AIzaSyB9rFomNWnS9TiGg-R_VemPcQGGpoWv5F8',
  authDomain: 'chatvuejstuto.firebaseapp.com',
  databaseURL: 'https://chatvuejstuto.firebaseio.com',
  projectId: 'chatvuejstuto',
  storageBucket: 'chatvuejstuto.appspot.com',
  messagingSenderId: '718386188458',
  appId: '1:718386188458:web:3fc5c835d852a99b7fc0d3'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

window.db = db

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
