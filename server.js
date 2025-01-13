const express = require('express');
const app = express();
const firebase = require('firebase-admin');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

// Firebase initialization
const serviceAccount = require('./path/to/serviceAccountKey.json');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com"
});

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/notifications', notificationRoutes);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
