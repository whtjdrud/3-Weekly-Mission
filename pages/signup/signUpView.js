import getErrorMessage from '../common/config/errorMessage.js';
import { qs, qsAll } from '../common/config/helper.js';

export default class SignUpView {
  constructor() {
    this.emailInput = qs('#email');
    this.passwordInput = qs('#password');
    this.passwordCheckInput = qs('#password_chk');
    this.submitButton = qs('input[type="submit"]');
    this.eyes = qsAll('.eye-button');
    this.signForm = qs('#sign_form');
  }

  showErrorMessage(tag, error) {
    const target = qs('.error_msg', tag.parentElement);
    const inputBorder = qs('input', tag.parentElement);

    inputBorder.classList.add('input-error');
    target.innerHTML = getErrorMessage(error);

    return false;
  }

  clearErrorMessage(tag) {
    const target = qs('.error_msg', tag.parentElement);
    const inputBorder = qs('input', tag.parentElement);

    inputBorder.classList.remove('input-error');
    target.innerHTML = '';

    return true;
  }

  eyeToggle(e) {
    const eyeButton = e.target;
    const input = qs('input', eyeButton.parentElement);

    input.type = input.type === 'password' ? 'text' : 'password';

    eyeButton.classList.toggle('eye-on');
    eyeButton.classList.toggle('eye-off');
  }
}
