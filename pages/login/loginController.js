import { on } from '../common/helper.js';

export default class LoginController {
  constructor(loginView, user, loginService) {
    this.view = loginView;
    this.user = user;
    this.service = loginService;
    this.#initEventListener();
  }
  #initEventListener() {
    on(this.view.emailInput, 'focusout', () => this.service.validateEmail(this.view.emailInput));
    on(this.view.passwordInput, 'focusout', () => this.service.validatePassword(this.view.passwordInput));
    on(this.view.signForm, 'submit', event => this.service.loginUser(event, this.view.signForm));

    this.view.eyes.forEach(button => {
      on(button, 'click', event => this.view.eyeToggle(event));
    });
  }
}
