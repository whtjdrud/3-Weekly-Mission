import { on } from '../common/helper.js';

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
    const emailValid = this.user.validateEmail(emailTag);
    return this.toggleErrorMessage(emailValid);
  }

  validatePassword(passwordTag) {
    const passwordValid = this.user.validatePassword(passwordTag);
    return this.toggleErrorMessage(passwordValid);
  }

  async loginUser(e, emailTag, passwordTag) {
    e.preventDefault();
    const emailValid = this.user.validateEmail(emailTag);
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!(emailValid.valid && passwordValid.valid)) {
      return;
    }

    const loginResult = await this.user.loginUser(emailTag, passwordTag);
    this.toggleErrorMessage(loginResult);

    if (loginResult.valid) {
      window.location.href = '/folder.html';
    }
  }

  toggleErrorMessage(resultValidated) {
    if (!resultValidated.valid) {
      return this.view.showErrorMessage(resultValidated.tag, resultValidated.error);
    }
    return this.view.clearErrorMessage(resultValidated.tag);
  }
}
