export const searchRecent = {
  status: 200,
  message: '검색어 목록 조회 성공',
  data: {
    recent_terms: [
      { id: 101, term: '그래픽카드', searchedAt: '2026-01-14T20:00:00' },
      { id: 102, term: '모니터 암', searchedAt: '2026-01-13T15:00:00' },
    ],
  },
};

export const searchPopluar = {
  status: 200,
  message: '검색어 목록 조회 성공',
  data: {
    popular_terms: [
      { rank: 1, term: 'iPhone 15' },
      { rank: 2, term: '맥북 에어' },
    ],
  },
};
