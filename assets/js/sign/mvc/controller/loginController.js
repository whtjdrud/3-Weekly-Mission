import { emailRegex, passwordRegex } from '../../../regex.js';
import LoginView from '../view/loginView.js';
import handleError from '../../errorMessage.js';

export default class LoginController {
  constructor() {
    this.view = new LoginView();
    this.#initEventListener();
  }

  #initEventListener() {
    this.view.emailInput.addEventListener('focusout', event => this.validateEmail(event));
    this.view.passwordInput.addEventListener('focusout', event => this.validatePassword(event));
    this.view.signForm.addEventListener('submit', event =>
      this.LoginUser(event, this.view.emailInput.value, this.view.passwordInput.value),
    );
    this.view.eyes.forEach(button => {
      button.addEventListener('click', event => this.view.eyeToggle(event));
    });
  }

  validateEmail() {
    const email = this.view.emailInput;
    const emailValue = email.value;

    if (emailValue.length === 0) {
      return this.view.showErrorMessage(email, handleError('EMPTY_EMAIL_FIELD'));
    }

    if (!emailRegex.test(emailValue)) {
      return this.view.showErrorMessage(email, handleError('INVALID_EMAIL'));
    }

    return this.view.clearErrorMessage(email);
  }

  validatePassword() {
    const password = this.view.passwordInput;
    const passwordValue = password.value;

    if (passwordValue.length === 0) {
      return this.view.showErrorMessage(password, handleError('EMPTY_PASSWORD_FIELD'));
    }
    if (!passwordRegex.test(passwordValue)) {
      return this.view.showErrorMessage(password, handleError('PASSWORD_TOO_SHORT'));
    }
    return this.view.clearErrorMessage(password);
  }

  async LoginUser(e, username, password) {
    e.preventDefault();

    const email = this.view.emailInput;
    const emailValid = this.validateEmail();
    const passwordValid = this.validatePassword();

    if (emailValid && passwordValid) return;

    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    if (!response.ok) {
      this.view.showErrorMessage(email, handleError('INVALID_LOGIN_CREDENTIALS'));
    }
    if (response.ok) {
      const data = await response.json();
      //여기에는 나중에 accessToken을 로컬 스토리지에 저장하는 것을 추가할 예정이다.

      window.location.href = '/folder.html';
    }
  }
}
