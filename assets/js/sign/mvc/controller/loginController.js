import LoginView from '../view/loginView.js';
import LoginService from '../service/loginService.js';
import User from '../domain/user.js';

export default class LoginController {
  constructor() {
    this.view = new LoginView();
    this.user = new User();
    this.service = new LoginService();
    this.#initEventListener();
  }

  #initEventListener() {
    this.view.emailInput.addEventListener('focusout', () => this.service.validateEmailService(this.view.emailInput));

    this.view.passwordInput.addEventListener('focusout', () => this.service.validatePasswordService(this.view.passwordInput));
    this.view.signForm.addEventListener('submit', event => this.service.LoginUser(event, this.view.emailInput, this.view.passwordInput));
    this.view.eyes.forEach(button => {
      button.addEventListener('click', event => this.view.eyeToggle(event));
    });
  }
}
