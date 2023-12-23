import SignUpController from './controller/signUpController.js';
import SignUpView from './view/signUpView.js';
import SignUpService from './service/SignupService.js';
import User from './domain/user.js';

document.addEventListener('DOMContentLoaded', () => {
  const signUpView = new SignUpView();
  const user = new User();
  const signUpService = new SignUpService(signUpView, user);

  // 로그인 상태 확인
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    // 엑세스 토큰이 없으면 로그인 페이지로 리다이렉트
    window.location.href = '/login.html';
    return; // 리다이렉트 후 나머지 코드는 실행하지 않음
  }

  const controller = new SignUpController(signUpView, user, signUpService);
});
