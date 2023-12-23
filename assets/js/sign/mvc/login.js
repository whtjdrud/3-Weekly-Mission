import LoginController from './controller/loginController.js';

document.addEventListener('DOMContentLoaded', () => {
  // 로그인 상태 확인
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    // 엑세스 토큰이 없으면 로그인 페이지로 리다이렉트
    window.location.href = '/login.html';
    return; // 리다이렉트 후 나머지 코드는 실행하지 않음
  }
  const controller = new LoginController();
});
