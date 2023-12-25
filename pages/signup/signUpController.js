import { on } from '../common/helper.js';

export default class SignUpController {
  constructor(signUpView, user, signUpService) {
    this.view = signUpView;
    this.user = user;
    this.service = signUpService;
    this.#initEventListener();
  }

  #initEventListener() {
    //email

    on(this.view.emailInput, 'focusout', () => this.service.validateSignUpEmail(this.view.emailInput));

    on(this.view.passwordInput, 'focusout', () => this.service.validatePassword(this.view.passwordInput));

    on(this.view.passwordCheckInput, 'focusout', () => this.service.validatePassword(this.view.passwordCheckInput));

    on(this.view.passwordCheckInput, 'focusout', () => this.service.validatePasswordCheck(this.view.passwordCheckInput));

    on(this.view.signForm, 'submit', event => this.service.signUpUser(event, this.view.emailInput, this.view.passwordInput));

    this.view.eyes.forEach(button => {
      on(button, 'click', event => this.view.eyeToggle(event));
    });
  }
}
