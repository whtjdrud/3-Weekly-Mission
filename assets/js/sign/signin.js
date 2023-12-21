import { validateEmail, validatePassword } from './validation.js';
import { eyeToggle } from './ui.js';
import { validateLogin } from './form.js';

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const signForm = document.querySelector('#sign_form');
const eyes = document.querySelectorAll('.eye-button');

inputEmail.addEventListener('focusout', event => validateEmail(event));
inputPassword.addEventListener('focusout', event => validatePassword(event));
signForm.addEventListener('submit', event => validateLogin(event));
eyes.forEach(button => {
  button.addEventListener('click', event => eyeToggle(event));
});
