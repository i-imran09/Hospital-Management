// firebaseConfig.js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzMhxEVHylb62tn6Zs1bQVIbza0eQxKLo",
    authDomain: "hospital-mangament-21c6c.firebaseapp.com",
    projectId: "hospital-mangament-21c6c",
    storageBucket: "hospital-mangament-21c6c.firebasestorage.app",
    messagingSenderId: "562925970059",
    appId: "1:562925970059:web:439582c3cc99de23b12a8e",
    measurementId: "G-R808ZV13EC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.auth(); // initialize auth
  
  // Initialize EmailJS with your public key
  emailjs.init("p9iSjxJ4jmKFXzWe1");
  