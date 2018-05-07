import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDuZM3EIgMXzG7gOcKNnfpnljjR18cv8T4",
    authDomain: "quiz-161ae.firebaseapp.com",
    databaseURL: "https://quiz-161ae.firebaseio.com",
    projectId: "quiz-161ae",
    storageBucket: "quiz-161ae.appspot.com",
    messagingSenderId: "250058654140"
  };
  var fire = firebase.initializeApp(config);


export default fire;