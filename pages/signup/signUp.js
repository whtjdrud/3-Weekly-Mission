import SignUpController from './signUpController.js';
import SignUpView from './signUpView.js';
import SignUpService from './SignupService.js';
import user from '../domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }

  const signUpView = new SignUpView();
  const signUpService = new SignUpService(signUpView, user);
  new SignUpController(signUpView, user, signUpService);
});
