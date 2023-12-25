import SignUpController from './signUpController.js';
import SignUpView from './signUpView.js';
import user from '../domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }

  const signUpView = new SignUpView();
  new SignUpController(signUpView, user);
});
