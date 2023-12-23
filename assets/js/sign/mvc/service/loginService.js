import LoginView from '../view/loginView.js';
import User from '../domain/user.js';

export default class LoginService {
  constructor() {
    this.view = new LoginView();
    this.user = new User();
  }

  validateEmailService(emailTag) {
    const emailValid = this.user.validateEmail(emailTag);

    if (!emailValid.valid) {
      return this.view.showErrorMessage(emailTag, emailValid.error);
    }

    return this.view.clearErrorMessage(emailTag);
  }

  validatePasswordService(passwordTag) {
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!passwordValid.valid) {
      return this.view.showErrorMessage(this.view.passwordInput, passwordValid.error);
    }
    return this.view.clearErrorMessage(this.view.passwordInput);
  }

  async LoginUser(e, emailTag, passwordTag) {
    e.preventDefault();
    const emailValid = this.user.validateEmail(emailTag);
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!(emailValid.valid && passwordValid.valid)) return;

    const loginResult = await this.user.LoginUser(emailTag, passwordTag);

    if (!loginResult.valid) {
      this.view.showErrorMessage(loginResult.tag, loginResult.error);
      return;
    }

    localStorage.setItem('accessToken', loginResult.data.accessToken);
    localStorage.setItem('refreshToken', loginResult.data.refreshToken);

    window.location.href = '/folder.html';
  }
}
