import { on } from '../common/config/helper.js';
import { emailRegex, passwordRegex } from '../common/config/regex.js';

export default class SignUpController {
  constructor(signUpView, user) {
    this.view = signUpView;
    this.user = user;
    this.emailInput = this.view.emailInput;
    this.passwordInput = this.view.passwordInput;
    this.passwordCheckInput = this.view.passwordCheckInput;

    this.#initEventListener();
  }

  #initEventListener() {
    on(this.view.emailInput, 'focusout', () => this.validateSignUpEmail(this.emailInput));
    on(this.view.passwordInput, 'focusout', () => this.validatePassword(this.passwordInput));
    on(this.view.passwordCheckInput, 'focusout', () => this.validatePassword(this.passwordCheckInput));
    on(this.view.passwordCheckInput, 'focusout', () => this.validatePasswordCheck(this.passwordInput, this.passwordCheckInput));
    on(this.view.signForm, 'submit', event => this.signUpUser(event, this.emailInput, this.passwordInput));

    this.view.eyes.forEach(button => {
      on(button, 'click', event => this.view.eyeToggle(event));
    });
  }

  async validateSignUpEmail(emailTag) {
    if (this.validateEmail(emailTag) === false) {
      return;
    }
    const response = await this.user.duplicatedEmail(emailTag);
    if (response === true) {
      return this.toggleErrorMessage(response, emailTag);
    }
    return this.toggleErrorMessage(false, emailTag, response);
  }

  validateEmail(emailTag) {
    if (emailTag.value.length === 0) {
      return this.toggleErrorMessage(false, emailTag, 'EMPTY_EMAIL_FIELD');
    }
    if (!emailRegex.test(emailTag.value)) {
      return this.toggleErrorMessage(false, emailTag, 'INVALID_EMAIL');
    }
    return this.toggleErrorMessage(true, emailTag);
  }

  validatePassword(passwordTag) {
    if (passwordTag.value.length === 0) {
      return this.toggleErrorMessage(false, passwordTag, 'EMPTY_PASSWORD_FIELD');
    }
    if (!passwordRegex.test(passwordTag.value)) {
      return this.toggleErrorMessage(false, passwordTag, 'PASSWORD_TOO_SHORT');
    }
    return this.toggleErrorMessage(true, passwordTag);
  }

  validatePasswordCheck(passwordTag, reEnteredPasswordTag) {
    if (passwordTag.value === reEnteredPasswordTag.value) {
      return this.toggleErrorMessage(true, reEnteredPasswordTag);
    }
    return this.toggleErrorMessage(false, reEnteredPasswordTag, 'PASSWORD_NOT_MATCH');
  }

  async signUpUser(e, emailTag, passwordTag) {
    e.preventDefault();

    const emailValidResult = this.user.validateEmail(emailTag);
    const passwordValidResult = this.user.validatePassword(passwordTag);

    if (!(emailValidResult.valid && passwordValidResult.valid)) {
      return;
    }

    const response = await this.user.signUpUser(emailTag, passwordTag);

    if (response === true) {
      window.location.href = '/folder.html';
      return;
    }
    return this.toggleErrorMessage(false, emailTag, response);
  }

  toggleErrorMessage(returnValue, tag, message) {
    if (returnValue === false) {
      return this.view.showErrorMessage(tag, message);
    }
    return this.view.clearErrorMessage(tag);
  }
}
