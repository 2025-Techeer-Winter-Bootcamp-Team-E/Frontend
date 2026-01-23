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
    ],
  },
};

export const ShoppingResearchQuestion = {
  status: 200,
  message: '질문 생성 성공',
  data: {
    search_id: 'sr-1234-5678',
    questions: [
      { question_id: 1, question: '주요 사용 목적은 무엇인가요?' },
      { question_id: 2, question: '생각하시는 예산 범위는?' },
      { question_id: 3, question: '디스플레이에서 가장 중요한 점은?' },
      { question_id: 4, question: '휴대성을 어느 정도 고려하시나요?' },
    ],
  },
};

export const ShoppingResearchResule = {
  status: 200,
  message: '쇼핑 리서치 결과 분석 성공 (상위 5개 상품)',
  data: {
    user_query: '전문가용 영상편집 노트북 찾아줘',
    product: [
      {
        similarity_score: 0.98,
        product_image_url: 'https://s3.amazonaws.com/my-bucket/products/macbook-pro-14.jpg',
        product_name: 'Apple 2024 맥북 프로 14 M3 Max',
        product_code: 78528252,
        recommendation_reason:
          '영상 편집 성능과 휴대성에서 가장 높은 점수를 기록한 최적의 선택입니다.',
        price: 2490000,
        performance_score: 0.98,
        product_specs: {
          cpu: 'M3 Max',
          ram: '32GB',
          weight: '1.4kg',
        },
        ai_review_summary: '렌더링 속도가 압도적이라는 평이 지배적입니다.',
        product_detail_url: 'https://myshop.com/products/123',
        optimal_product_info: {
          match_rank: 1,
          is_lowest_price: true,
        },
      },
      {
        similarity_score: 0.94,
        product_image_url: 'https://s3.amazonaws.com/my-bucket/products/galaxy-book-4-pro.jpg',
        product_name: '삼성전자 갤럭시북4 프로',
        product_code: 78528251,
        recommendation_reason: '디스플레이 화질이 우수하며 삼성 생태계 활용 시 유리합니다.',
        price: 1890000,
        performance_score: 0.89,
        product_specs: {
          cpu: 'Intel Core Ultra 7',
          ram: '16GB',
          weight: '1.23kg',
        },
        ai_review_summary: '터치스크린 기능과 얇은 두께에 대한 만족도가 높습니다.',
        product_detail_url: 'https://myshop.com/products/456',
        optimal_product_info: {
          match_rank: 2,
          is_lowest_price: false,
        },
      },
    ],
  },
};
