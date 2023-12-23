import LoginController from './controller/loginController.js';
import LoginView from './view/loginView.js';
import LoginService from './service/loginService.js';
import User from './domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginView = new LoginView();
  const user = new User();
  const loginService = new LoginService(loginView, user);

  // 로그인 상태 확인
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return; // 리다이렉트 후 나머지 코드는 실행하지 않음
  }
  const controller = new LoginController(loginView, user, loginService);
});
