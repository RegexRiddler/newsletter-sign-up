const submitButton = document.getElementById('submit');
const dismissButton = document.getElementById('dismiss');
const emailConfirmation = document.getElementById('email-confirmation'); //Confirmation of typed email on success page
const errorMessage = document.getElementById('error-message'); //Error message above input field
const emailInput = document.getElementById('email');
const card = document.getElementsByClassName('card');
const success = document.getElementsByClassName('success');

let validationSuccess = false;

function validateEmail(e) {
  e.preventDefault();
  const regexp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g;
  
  if (regexp.test(emailInput.value)) {
    // Reset state so if user returns from success page it is not showing error state if user had errors before passing validation
    emailInput.classList.remove('error');
    errorMessage.classList.add('hidden');

    // Insert user input on success page to verify what email they typed
    emailConfirmation.innerHTML = emailInput.value;

    // Self explanatory toggle between form and success state
    toggleState();
  } else {
    // Show error message above input field and add applicable styling
    emailInput.classList.add('error');
    errorMessage.classList.remove('hidden');
  }
}

function toggleState() {
  card[0].classList.toggle('hidden');
  success[0].classList.toggle('visible');
}

submitButton.addEventListener('click', validateEmail);
dismissButton.addEventListener('click', toggleState);