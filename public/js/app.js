// Frontend JavaScript code to handle Firebase authentication and quiz interaction

const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Firebase authentication logic
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User signed up:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error signing up:', error.message);
    });
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User logged in:', userCredential.user);
      // Redirect to quiz page
      window.location.href = '/quiz';
    })
    .catch((error) => {
      console.error('Error logging in:', error.message);
    });
});
