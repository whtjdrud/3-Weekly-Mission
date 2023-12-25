import LoginController from './loginController.js';
import LoginView from './loginView.js';
import user from '../domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }
  const loginView = new LoginView();
  new LoginController(loginView, user);
});
