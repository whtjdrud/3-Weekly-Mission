// 메시지 및 css 적용
export function showErrorMessage(tag, errorMessage) {
  const target = tag.parentElement.querySelector('.error_msg');
  const inputBorder = target.parentElement.querySelector('input');

  inputBorder.classList.add('input-error');
  target.innerHTML = errorMessage;

  return false;
}

export function clearErrorMessage(tag) {
  const target = tag.parentElement.querySelector('.error_msg');
  const inputBorder = target.parentElement.querySelector('input');

  inputBorder.classList.remove('input-error');
  target.innerHTML = '';

  return true;
}

// 비밀번호 눈 모양, input type 변경
export function eyeToggle(e) {
  const eyeButton = e.target;
  const input = eyeButton.parentElement.querySelector('input');

  input.type = input.type === 'password' ? 'text' : 'password';

  eyeButton.classList.toggle('eye-on');
  eyeButton.classList.toggle('eye-off');
}
