import { showErrorMessage, clearErrorMessage } from './ui.js';
import { emailRegex, passwordRegex } from '../regex.js';
import handleError from './errorMessage.js';
import { USER_EMAIL, USER_PASSWORD } from '../../../config.js';

export function validateEmail() {
  const email = document.querySelector('#email');
  const emailValue = email.value;

  if (emailValue.length === 0) {
    return showErrorMessage(email, handleError('EMPTY_EMAIL_FIELD'));
  }

  if (!emailRegex.test(emailValue)) {
    return showErrorMessage(email, handleError('INVALID_EMAIL'));
  }

  return clearErrorMessage(email);
}

export function checkEmailRegistered(e) {
  const email = document.querySelector('#email');
  const emailValue = email.value;

  if (emailValue === USER_EMAIL) {
    return showErrorMessage(email, handleError('EMAIL_REGISTERED'));
  }
}

export function validatePassword() {
  const password = document.querySelector('#password');
  const passwordValue = password.value;

  if (passwordValue.length === 0) {
    return showErrorMessage(password, handleError('EMPTY_PASSWORD_FIELD'));
  }
  if (!passwordRegex.test(passwordValue)) {
    return showErrorMessage(password, handleError('PASSWORD_TOO_SHORT'));
  }
  return clearErrorMessage(password);
}

export function validatePasswordCheck() {
  const reEnteredPassword = document.querySelector('#password_chk');
  const reEnteredPasswordValue = reEnteredPassword.value;
  const password = document.querySelector('#password');
  const passwordValue = password.value;

  if (reEnteredPasswordValue.length === 0) {
    return showErrorMessage(reEnteredPassword, handleError('EMPTY_PASSWORD_FIELD'));
  }
  if (!passwordRegex.test(reEnteredPasswordValue)) {
    return showErrorMessage(reEnteredPassword, handleError('PASSWORD_TOO_SHORT'));
  }
  if (reEnteredPasswordValue !== passwordValue) {
    return showErrorMessage(reEnteredPassword, handleError('PASSWORD_NOT_MATCH'));
  }
  return clearErrorMessage(reEnteredPassword);
}

export function verifyUserLogin() {
  const email = document.querySelector('#email');
  const emailValue = email.value;
  const password = document.querySelector('#password');
  const passwordValue = password.value;

  if (emailValue !== USER_EMAIL) {
    return showErrorMessage(email, handleError('EMAIL_NOT_FOUND'));
  }

  if (passwordValue !== USER_PASSWORD) {
    return showErrorMessage(password, handleError('PASSWORD_NOT_MATCH'));
  }
  return true;
}
