export default class LoginService {
  constructor(loginView, user) {
    this.view = loginView;
    this.user = user;
  }

  validateEmail(emailTag) {
    const emailValid = this.user.validateEmail(emailTag);

    if (!emailValid.valid) {
      return this.view.showErrorMessage(emailTag, emailValid.error);
    }

    return this.view.clearErrorMessage(emailTag);
  }

  validatePassword(passwordTag) {
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!passwordValid.valid) {
      return this.view.showErrorMessage(passwordValid.tag, passwordValid.error);
    }
    return this.view.clearErrorMessage(passwordValid.tag);
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

    this.view.clearErrorMessage(loginResult.tag);

    window.location.href = '/folder.html';
  }
}
