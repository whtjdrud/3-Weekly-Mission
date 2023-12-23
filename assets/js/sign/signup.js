import SignUpController from './controller/signUpController.js';
import SignUpView from './view/signUpView.js';
import SignUpService from './service/SignupService.js';
import User from './domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  // 로그인 상태 확인
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    window.location.href = '/folder.html';
    return; // 리다이렉트 후 나머지 코드는 실행하지 않음
  }

  const signUpView = new SignUpView();
  const user = new User();
  const signUpService = new SignUpService(signUpView, user);
  const controller = new SignUpController(signUpView, user, signUpService);
});
