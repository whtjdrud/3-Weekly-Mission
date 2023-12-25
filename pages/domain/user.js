import { emailRegex, passwordRegex } from '../common/config/regex.js';

class User {
  validateEmail(emailTag) {
    const username = emailTag.value;

    console.log(emailTag);
    console.log(username);

    if (username.length === 0) {
      return { valid: false, tag: emailTag, error: 'EMPTY_EMAIL_FIELD' };
    }

    if (!emailRegex.test(username)) {
      return { valid: false, tag: emailTag, error: 'INVALID_EMAIL' };
    }

    return { valid: true, tag: emailTag };
  }

  validatePassword(passwordTag) {
    const passwordValue = passwordTag.value;

    if (passwordValue.length === 0) {
      return { valid: false, tag: passwordTag, error: 'EMPTY_PASSWORD_FIELD' };
    }
    if (!passwordRegex.test(passwordValue)) {
      return { valid: false, tag: passwordTag, error: 'PASSWORD_TOO_SHORT' };
    }

    return { valid: true, tag: passwordTag };
  }

  validatePasswordCheck(passwordTag, reEnteredPasswordTag) {
    if (passwordTag.value === reEnteredPasswordTag.value) {
      return { valid: true, tag: reEnteredPasswordTag, error: null };
    }
    return { valid: false, tag: reEnteredPasswordTag, error: 'PASSWORD_NOT_MATCH' };
  }

  async loginUser(emailTag, passwordTag) {
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
    this.setTokenInLocalStorage(responseData);

    return { valid: true, tag: emailTag, error: null };
  }

  async duplicatedEmail(emailTag) {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailTag.value,
      }),
    });

    if (!response.ok) {
      return { valid: false, tag: emailTag, error: 'EMAIL_REGISTERED' };
    }
    return { valid: true, tag: emailTag, error: null };
  }

  async signUpUser(emailTag, passwordTag) {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
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
      return { valid: false, tag: emailTag, error: 'FAILED_SIGNUP' };
    }

    const responseData = await response.json();
    this.setTokenInLocalStorage(responseData);

    return { valid: true, tag: emailTag, error: null };
  }

  setTokenInLocalStorage(responseData) {
    localStorage.setItem('accessToken', responseData.data.accessToken);
    localStorage.setItem('refreshToken', responseData.data.refreshToken);
  }
}

const user = new User();
export default user;
