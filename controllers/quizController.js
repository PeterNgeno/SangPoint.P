const firebase = require('firebase-admin');
const db = firebase.firestore();

const getQuestions = async (req, res) => {
  try {
    const questionsSnapshot = await db.collection('quiz').get();
    let questions = [];
    questionsSnapshot.forEach(doc => {
      questions.push(doc.data());
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

module.exports = { getQuestions };
