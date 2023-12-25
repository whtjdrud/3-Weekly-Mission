export default class LoginService {
  constructor(loginView, user) {
    this.view = loginView;
    this.user = user;
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
