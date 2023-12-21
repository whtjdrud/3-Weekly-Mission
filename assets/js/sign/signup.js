import { validateEmail, checkEmailRegistered, validatePassword, validatePasswordCheck } from './validation.js';
import { eyeToggle } from './ui.js';
import { validateJoin } from './form.js';

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputPasswordCheck = document.querySelector('#password_chk');
const signForm = document.querySelector('#sign_form');
const eyes = document.querySelectorAll('.eye-button');

inputEmail.addEventListener('focusout', event => validateEmail(event));
inputEmail.addEventListener('focusout', event => checkEmailRegistered(event));

inputPassword.addEventListener('focusout', event => validatePassword(event));
inputPasswordCheck.addEventListener('focusout', event => validatePasswordCheck(event));

signForm.addEventListener('submit', event => validateJoin(event));

eyes.forEach(button => {
  button.addEventListener('click', event => eyeToggle(event));
});
