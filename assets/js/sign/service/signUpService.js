export default class SignUpService {
  constructor(signUpView, user) {
    this.view = signUpView;
    this.user = user;
  }

  async validateSignUpEmail(emailTag) {
    const emailValidResult = this.user.validateEmail(emailTag);

    if (!emailValidResult.valid) {
      return this.toggleErrorMessage(emailValidResult);
    }

    const duplicatedEmail = await this.user.duplicatedEmail(emailTag);
    return this.toggleErrorMessage(duplicatedEmail);
  }

  validatePassword(passwordTag) {
    const passwordValidResult = this.user.validatePassword(passwordTag);
    return this.toggleErrorMessage(passwordValidResult);
  }

  validatePasswordCheck(passwordTag, reEnteredPasswordTag) {
    const passwordCheckResult = this.user.validatePasswordCheck(passwordTag, reEnteredPasswordTag);
    return this.toggleErrorMessage(passwordCheckResult);
  }

  async signUpUser(e, emailTag, passwordTag) {
    e.preventDefault();

    const emailValidResult = this.user.validateEmail(emailTag);
    const passwordValidResult = this.user.validatePassword(passwordTag);

    if (!(emailValidResult.valid && passwordValidResult.valid)) {
      return;
    }

    const signUpResult = await this.user.signUpUser(emailTag, passwordTag);
    this.toggleErrorMessage(signUpResult);

    if (signUpResult.valid) {
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
