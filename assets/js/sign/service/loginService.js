export default class LoginService {
  constructor(loginView, user) {
    this.view = loginView;
    this.user = user;
  }

  validateEmail(emailTag) {
    const emailValid = this.user.validateEmail(emailTag);
    return this.handlerViewErrorMessage(emailValid);
  }

  validatePassword(passwordTag) {
    const passwordValid = this.user.validatePassword(passwordTag);
    return this.handlerViewErrorMessage(passwordValid);
  }

  async LoginUser(e, emailTag, passwordTag) {
    e.preventDefault();
    const emailValid = this.user.validateEmail(emailTag);
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!(emailValid.valid && passwordValid.valid)) return;

    const loginResult = await this.user.LoginUser(emailTag, passwordTag);
    this.handlerViewErrorMessage(loginResult);

    if (loginResult.valid) window.location.href = '/folder.html';
  }

  handlerViewErrorMessage(resultValidated) {
    if (!resultValidated.valid) {
      return this.view.showErrorMessage(resultValidated.tag, resultValidated.error);
    }
    return this.view.clearErrorMessage(resultValidated.tag);
  }
}
