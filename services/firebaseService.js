// Firebase service to handle authentication and Firestore operations
const firebase = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json');  // Replace with actual path

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com"
});

const db = firebase.firestore();
const auth = firebase.auth();

module.exports = { db, auth };
