const errorMessages = {
  EMPTY_EMAIL_FIELD: '이메일을 입력해주세요.',
  INVALID_EMAIL: '올바른 이메일 주소가 아닙니다.',
  EMAIL_NOT_FOUND: '이메일을 확인해주세요.',
  EMAIL_REGISTERED: '이미 사용 중인 이메일입니다.',
  EMPTY_PASSWORD_FIELD: '비밀번호를 입력해주세요.',
  INVALID_LOGIN_CREDENTIALS: '아이디 또는 비밀번호를 잘못 입력했습니다.',

  INVALID_PASSWORD: '비밀번호를 확인해주세요.',
  PASSWORD_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  PASSWORD_TOO_SHORT: '비밀번호는 8자 이상 20자 이하여야 합니다.',

  FAILED_SIGNUP: '시스템 장애로 회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.',
  INVALID_NETWORK_ERROR: '시스템 장애로 로그인에 실패하였습니다. 잠시 후 다시 시도해주세요',
  NETWORK_ERROR: '시스템 장애가 발생하였습니다. 잠시 후 다시 시도해주세요.',
};

const getErrorMessage = errCode => errorMessages[errCode] ?? '알 수없는 에러가 발생하였습니다.';

export default getErrorMessage;
