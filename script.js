// Switch between login and signup forms
document.getElementById('show-signup').addEventListener('click', () => {
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.signup-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
  document.querySelector('.signup-container').style.display = 'none';
  document.querySelector('.login-container').style.display = 'block';
});

// Firebase Login
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login Successful!');
      console.log('User:', userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Firebase Sign-Up
document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Sign-Up Successful!');
      console.log('User:', userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
    });
});
