export default class SignUpService {
  constructor(signUpView, user) {
    this.view = signUpView;
    this.user = user;
  }

  async validateSignUpEmail(emailTag) {
    const emailValid = this.user.validateEmail(emailTag);

    if (!emailValid.valid) {
      return this.view.showErrorMessage(emailTag, emailValid.error);
    }
    const duplicatedEmail = await this.user.duplicatedEmail(emailTag);

    if (!duplicatedEmail.valid) {
      return this.view.showErrorMessage(emailTag, duplicatedEmail.error);
    }

    return this.view.clearErrorMessage(emailTag);
  }

  validatePassword(passwordTag) {
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!passwordValid.valid) {
      return this.view.showErrorMessage(this.view.passwordInput, passwordValid.error);
    }
    return this.view.clearErrorMessage(this.view.passwordInput);
  }

  validatePasswordCheck(passwordTag, reEnteredPasswordTag) {
    const passwordCheck = this.user.validatePasswordCheck(passwordTag, reEnteredPasswordTag);

    if (!passwordCheck.valid) return this.view.showErrorMessage(passwordCheck.tag, passwordCheck.error);

    return this.view.clearErrorMessage(passwordCheck.tag);
  }

  async signUpUser(e, emailTag, passwordTag) {
    e.preventDefault();
    const emailValid = this.user.validateEmail(emailTag);
    const passwordValid = this.user.validatePassword(passwordTag);

    if (!(emailValid.valid && passwordValid.valid)) return;

    const signUpResult = await this.user.signUpUser(emailTag, passwordTag);

    if (!signUpResult.valid) return this.view.showErrorMessage(signUpResult.tag, signUpResult.error);

    this.view.clearErrorMessage(signUpResult.tag);

    window.location.href = '/folder.html';
  }
}
