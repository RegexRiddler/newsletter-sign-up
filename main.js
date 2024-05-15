const formButton = document.getElementById('submit');
const dismissButton = document.getElementById('dismiss');
const card = document.getElementsByClassName('card');
const success = document.getElementsByClassName('success');

function validate(e) {
  e.preventDefault();
  console.log('Form NOT validated!');
}

function toggleState(e) {
  e.preventDefault();
  card[0].classList.toggle('hidden');
  success[0].classList.toggle('visible');
}

formButton.addEventListener('click', validate);
formButton.addEventListener('click', toggleState);
dismissButton.addEventListener('click', toggleState);