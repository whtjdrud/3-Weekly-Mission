import SignUpController from './controller/signUpController.js';
import SignUpView from './view/signUpView.js';
import SignUpService from './service/SignupService.js';
import User from './domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }

  const signUpView = new SignUpView();
  const user = new User();
  const signUpService = new SignUpService(signUpView, user);
  new SignUpController(signUpView, user, signUpService);
});
