import LoginController from './loginController.js';
import LoginView from './loginView.js';
import user from '../domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  if (user.isLoggedIn()) {
    window.location.href = '/folder.html';
    return;
  }

  const loginView = new LoginView();
  new LoginController(loginView, user);
});
