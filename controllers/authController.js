const firebase = require('firebase-admin');
const serviceAccount = require('../path/to/serviceAccountKey.json'); // Replace with your Firebase service account key path

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com"  // Replace with your Firebase DB URL
});

const auth = firebase.auth();

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await auth.createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User created successfully', user: userRecord });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await auth.getUserByEmail(email);
    // Authentication logic here (Firebase handles user verification internally)
    res.status(200).json({ message: 'User logged in successfully', user: userRecord });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signUp, login };
