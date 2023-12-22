export default class LoginView {
  constructor() {
    this.emailInput = document.querySelector('#email');
    this.passwordInput = document.querySelector('#password');
    this.submitButton = document.querySelector('input[type="submit"]');
    this.eyes = document.querySelectorAll('.eye-button');
    this.signForm = document.querySelector('#sign_form');
  }

  showErrorMessage(tag, errorMessage) {
    const target = tag.parentElement.querySelector('.error_msg');
    const inputBorder = target.parentElement.querySelector('input');

    inputBorder.classList.add('input-error');
    target.innerHTML = errorMessage;

    return false;
  }

  clearErrorMessage(tag) {
    const target = tag.parentElement.querySelector('.error_msg');
    const inputBorder = target.parentElement.querySelector('input');

    inputBorder.classList.remove('input-error');
    target.innerHTML = '';

    return true;
  }

  eyeToggle(e) {
    const eyeButton = e.target;
    const input = eyeButton.parentElement.querySelector('input');

    input.type = input.type === 'password' ? 'text' : 'password';

    eyeButton.classList.toggle('eye-on');
    eyeButton.classList.toggle('eye-off');
  }
}
