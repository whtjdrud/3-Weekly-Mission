export default class SignUpController {
  constructor(signUpView, user, signUpService) {
    this.view = signUpView;
    this.user = user;
    this.service = signUpService;
    this.#initEventListener();
  }

  #initEventListener() {
    //email
    this.view.emailInput.addEventListener('focusout', () => this.service.validateSignUpEmail(this.view.emailInput));
    //reEntered password
    this.view.passwordCheckInput.addEventListener('focusout', () => this.service.validatePassword(this.view.passwordInput));
    this.view.passwordCheckInput.addEventListener('focusout', () =>
      this.service.validatePasswordCheck(this.view.passwordInput, this.view.passwordCheckInput),
    );

    //form submit
    this.view.signForm.addEventListener('submit', event => this.service.signUpUser(event, this.view.emailInput, this.view.passwordInput));

    //eyeToggle
    this.view.eyes.forEach(button => {
      button.addEventListener('click', event => this.view.eyeToggle(event));
    });
  }
}
