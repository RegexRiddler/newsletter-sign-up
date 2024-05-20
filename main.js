const submitButton = document.getElementById('submit');
const dismissButton = document.getElementById('dismiss');
const emailConfirmation = document.getElementById('email-confirmation');
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');
const card = document.getElementsByClassName('card');
const success = document.getElementsByClassName('success');

function validate(e) {
  e.preventDefault();
  emailInput.classList.toggle('error');
  errorMessage.classList.toggle('hidden');

  console.log('Form NOT validated!');
}

function toggleState(e) {
  e.preventDefault();
  card[0].classList.toggle('hidden');
  success[0].classList.toggle('visible');
}

// formButton.addEventListener('click', validate);
submitButton.addEventListener('click', toggleState);
dismissButton.addEventListener('click', toggleState);
dismissButton.addEventListener('click', validate);