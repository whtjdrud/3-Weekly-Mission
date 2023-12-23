import LoginController from './controller/loginController.js';
import LoginView from './view/loginView.js';
import LoginService from './service/loginService.js';
import User from './domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return;
  }
  const loginView = new LoginView();
  const user = new User();
  const loginService = new LoginService(loginView, user);
  const controller = new LoginController(loginView, user, loginService);
});
