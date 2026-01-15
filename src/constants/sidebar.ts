import { PATH } from '@/routes/path';

export const SIDEBAR = {
  'MY 쇼핑': [
    { path: PATH.WISHLIST, label: '위시 상품' },
    { path: PATH.RECENT, label: '최근 본 상품' },
    { path: PATH.TIMER, label: '타이머 보관함' },
    { path: PATH.TOKEN, label: '토큰 충전' },
  ],
  'MY 정보': [
    { path: PATH.MYREVIEW, label: '내 리뷰' },
    { path: PATH.INFO, label: '내 정보 수정' },
    { path: PATH.WITHDRAW, label: '회원 탈퇴' },
  ],
};
