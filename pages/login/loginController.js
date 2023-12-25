import { on } from '../common/config/helper.js';
import { emailRegex, passwordRegex } from '../common/config/regex.js';

export default class LoginController {
  constructor(loginView, user) {
    this.view = loginView;
    this.emailInput = this.view.emailInput;
    this.passwordInput = this.view.passwordInput;
    this.user = user;
    this.#initEventListener();
  }

  #initEventListener() {
    on(this.emailInput, 'focusout', () => this.validateEmail(this.emailInput));
    on(this.passwordInput, 'focusout', () => this.validatePassword(this.passwordInput));
    on(this.view.signForm, 'submit', event => this.loginUser(event, this.view.emailInput, this.passwordInput));

    this.view.eyes.forEach(button => {
      on(button, 'click', event => this.view.eyeToggle(event));
    });
  }

  validateEmail(emailTag) {
    const username = emailTag.value;

    if (username.length === 0) {
      return this.toggleErrorMessage(false, emailTag, 'EMPTY_EMAIL_FIELD');
    }
    if (!emailRegex.test(username)) {
      return this.toggleErrorMessage(false, emailTag, 'INVALID_EMAIL');
    }
    return this.toggleErrorMessage(true, emailTag);
  }

  validatePassword(passwordTag) {
    const passwordValue = passwordTag.value;

    if (passwordValue.length === 0) {
      return this.toggleErrorMessage(false, passwordTag, 'EMPTY_PASSWORD_FIELD');
    }
    if (!passwordRegex.test(passwordValue)) {
      return this.toggleErrorMessage(false, passwordTag, 'PASSWORD_TOO_SHORT');
    }
    return this.toggleErrorMessage(true, passwordTag);
  }

  async loginUser(e, emailTag, passwordTag) {
    e.preventDefault();
    const emailValid = this.validateEmail(emailTag);
    const passwordValid = this.validatePassword(passwordTag);

    if (!(emailValid && passwordValid)) {
      return;
    }

    try {
      const loginResult = await this.user.loginUser(emailTag, passwordTag);
      if (loginResult === true) {
        this.toggleErrorMessage(true, emailTag);
        window.location.href = '/folder.html';
        return;
      }

      this.toggleErrorMessage(false, emailTag, loginResult);
    } catch (error) {
      this.toggleErrorMessage(false, emailTag, 'INVALID_LOGIN_CREDENTIALS');
    }
  }

  toggleErrorMessage(returnValue, tag, message) {
    if (returnValue === false) {
      return this.view.showErrorMessage(tag, message);
    }
    return this.view.clearErrorMessage(tag);
  }
}
