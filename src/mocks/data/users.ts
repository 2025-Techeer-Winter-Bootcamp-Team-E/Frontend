export const userProfile = {
  status: 200,
  message: '사용자 프로필 기본 정보입니다.',
  data: {
    name: 'user',
    email: 'user@example.com',
    nickname: 'techeer',
    phone: '010-1234-5678',
  },
};

export const usersLogin = {
  status: 200,
  message: '로그인에 성공하였습니다.',
  data: {
    user_id: 101,
    access_token: 'eyJhbGciOiJIUzI1...',
    refresh_token: 'eyJhbGciOiJIUzI1...',
    token_type: 'Bearer',
  },
};

export const userSignIn = {
  status: 201,
  message: '회원가입이 완료되었습니다.',
  data: {
    user_id: 101,
    email: 'user@example.com',
    created_at: '2026-01-14T21:08:08',
  },
};
