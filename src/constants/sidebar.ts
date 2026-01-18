import { PATH } from '@/routes/path';

export type SidebarItem =
  | {
      label: string;
      enabled: true;
      path: string;
    }
  | {
      label: string;
      enabled: false;
    };

export const SIDEBAR: Record<string, SidebarItem[]> = {
  'MY 쇼핑': [
    { label: '위시 상품', enabled: false },
    { label: '최근 본 상품', enabled: false },
    { label: '타이머 보관함', enabled: true, path: PATH.TIMER },
    { label: '토큰 충전', enabled: true, path: PATH.TOKEN },
  ],
  'MY 정보': [
    { label: '내 리뷰', enabled: false },
    { label: '비밀번호 수정', enabled: false },
    { label: '회원 탈퇴', enabled: false },
  ],
};
