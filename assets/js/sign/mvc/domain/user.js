import { emailRegex, passwordRegex } from '../../../regex.js';

export default class User {
  constructor() {}

  validateEmail(emailTag) {
    const username = emailTag.value;

    if (username.length === 0) return { valid: false, tag: emailTag, error: 'EMPTY_EMAIL_FIELD' };
    if (!emailRegex.test(username)) return { valid: false, tag: emailTag, error: 'INVALID_EMAIL' };

    return { valid: true };
  }

  validatePassword(passwordTag) {
    const passwordValue = passwordTag.value;

    if (passwordValue.length === 0) return { valid: false, tag: passwordTag, error: 'EMPTY_PASSWORD_FIELD' };

    if (!passwordRegex.test(passwordValue)) return { valid: false, tag: passwordTag, error: 'PASSWORD_TOO_SHORT' };

    return { valid: true };
  }

  async LoginUser(emailTag, passwordTag) {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailTag.value,
        password: passwordTag.value,
      }),
    });

    if (!response.ok) {
      return { valid: false, tag: emailTag, error: 'INVALID_LOGIN_CREDENTIALS' };
    }

    const responseData = await response.json();
    return { valid: true, tag: emailTag, error: null, data: responseData };
  }
}
