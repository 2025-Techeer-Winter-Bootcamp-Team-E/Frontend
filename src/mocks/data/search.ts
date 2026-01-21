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

export const deleteRecentSearch = {
  status: 200,
  message: '최근 검색어가 삭제 되었습니다',
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

export const searchAutoComplete = {
  status: 200,
  message: '자동완성 목록 조회 성공',
  data: {
    suggestions: ['노트북', '노트북 파우치', '노트북 거치대', '게이밍 노트북'],
  },
};

export const llmSearch = {
  status: 200,
  message: 'AI 맞춤형 상품 추천 성공',
  data: {
    analysis_message: '휴대성(무게)과 컴파일 속도(RAM)를 중요하게 고려하여 상품을 찾았습니다.',
    recommended_products: [
      {
        product_id: 501,
        product_code: 123456,
        product_image_url: 'https://s3.amazonaws.com/my-bucket/products/galaxy-book4-pro.jpg',
        product_name: '삼성전자 갤럭시북4 프로',
        recommendation_reason:
          '1.23kg의 초경량 무게로 전공 서적과 함께 휴대하기 좋으며, 16GB RAM으로 개발 환경 구동에 충분합니다.',
        price: 1890000,
        specs: {
          cpu: 'Intel Core Ultra 7',
          ram: '16GB',
          weight: '1.23kg',
          display: 'Dynamic AMOLED 2X',
        },
        product_detail_url: 'https://myshop.com/products/501',
      },
      // ... 상위 5개 상품 리스트
    ],
  },
};
