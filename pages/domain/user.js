class User {
  async loginUser(emailTag, passwordTag) {
    try {
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

      if (response.ok) {
        const responseData = await response.json();
        this.setTokenInLocalStorage(responseData);
        return true;
      }
      return 'INVALID_LOGIN_CREDENTIALS';
    } catch (error) {
      return 'INVALID_NETWORK_ERROR';
    }
  }

  async duplicatedEmail(emailTag) {
    try {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailTag.value,
        }),
      });

      if (response.ok) {
        return true;
      }
      if (response.status === 409) {
        return 'EMAIL_REGISTERED';
      }
    } catch (error) {
      return 'NETWORK_ERROR';
    }
  }

  async signUpUser(emailTag, passwordTag) {
    try {
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
        return 'FAILED_SIGNUP';
      }

      const responseData = await response.json();
      this.setTokenInLocalStorage(responseData);
    } catch (error) {
      return 'NETWORK_ERROR';
    }

    return true;
  }

  setTokenInLocalStorage(responseData) {
    localStorage.setItem('accessToken', responseData.data.accessToken);
    localStorage.setItem('refreshToken', responseData.data.refreshToken);
  }
}

const user = new User();
export default user;
