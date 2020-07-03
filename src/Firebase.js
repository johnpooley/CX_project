import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBAgQxQsh48C9TjwqDJ1xEpmwnPw0VS2Uo',
  authDomain: 'strength-and-balance-app.firebaseapp.com',
  databaseURL: 'https://strength-and-balance-app.firebaseio.com',
  projectId: 'strength-and-balance-app',
  storageBucket: 'strength-and-balance-app.appspot.com',
  messagingSenderId: '597316400414',
  appId: '1:597316400414:web:d6c6d28a36dabd6347c50f',
  measurementId: 'G-8DEJ2Z2FJJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
