import { validateEmail, validatePassword, verifyUserLogin, validatePasswordCheck } from './validation.js';

export function validateLogin(e) {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const userVerified = verifyUserLogin();

  if (emailValid && passwordValid && userVerified) {
    e.target.submit();
  }
}

// signup.html
export function validateJoin() {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const passwordCheckValid = validatePasswordCheck();

  if (emailValid && passwordValid && passwordCheckValid) {
    e.target.submit();
  }
}
