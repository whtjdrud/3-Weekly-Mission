import LoginController from './loginController.js';
import LoginView from './loginView.js';
import LoginService from './loginService.js';
import user from '../domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }
  const loginView = new LoginView();
  const loginService = new LoginService(loginView, user);
  new LoginController(loginView, user, loginService);
});
