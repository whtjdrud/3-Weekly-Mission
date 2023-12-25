export default class LoginController {
  constructor(loginView, user, loginService) {
    this.view = loginView;
    this.user = user;
    this.service = loginService;
    this.#initEventListener();
  }

  #initEventListener() {
    this.view.emailInput.addEventListener('focusout', () => this.service.validateEmail(this.view.emailInput));

    this.view.passwordInput.addEventListener('focusout', () => this.service.validatePassword(this.view.passwordInput));
    this.view.signForm.addEventListener('submit', event => this.service.loginUser(event, this.view.emailInput, this.view.passwordInput));
    this.view.eyes.forEach(button => {
      button.addEventListener('click', event => this.view.eyeToggle(event));
    });
  }
}
