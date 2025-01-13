const firebase = require('firebase-admin');
const messaging = firebase.messaging();

const sendNotification = async (req, res) => {
  const { userId, title, body } = req.body;
  
  try {
    const userSnapshot = await db.collection('users').doc(userId).get();
    const userToken = userSnapshot.data().fcmToken;

    const message = {
      notification: {
        title,
        body,
      },
      token: userToken,
    };

    const response = await messaging.send(message);
    res.status(200).json({ message: 'Notification sent successfully', response });
  } catch (error) {
    res.status(500).json({ message: 'Error sending notification', error });
  }
};

module.exports = { sendNotification };
