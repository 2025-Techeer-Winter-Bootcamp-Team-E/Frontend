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
    search_id: 'sr-174c4da8',
    questions: [
      {
        question_id: 1,
        question: '주로 어떤 분야의 개발 및 학습에 노트북을 사용하실 예정인가요?',
        options: [
          '웹/앱 프로그래밍, 알고리즘 등 일반적인 코딩 과제',
          '인공지능(AI), 머신러닝, 데이터 분석 (GPU 성능 중요)',
          '게임 개발, 3D 그래픽스 (CPU 및 GPU 고사양 필요)',
          '특정 분야 없이 다양하게 활용 예정',
        ],
      },
      {
        question_id: 2,
        question: '노트북 구매를 위한 예산은 어느 정도로 생각하고 계신가요?',
        options: [
          '100만원 미만 (가성비 좋은 입문용)',
          '100만원 ~ 150만원 (성능과 휴대성의 균형)',
          '150만원 ~ 200만원 (고성능 작업 및 프리미엄 디자인)',
          '200만원 이상 (최고 사양, MacBook 고급형 등)',
        ],
      },
      {
        question_id: 3,
        question: '카페 등 외부에서 사용할 때 가장 중요하게 생각하는 요소는 무엇인가요?',
        options: [
          '가벼운 무게 (전공 서적과 함께 휴대하기 편하도록)',
          '오래가는 배터리 (충전기 없이 사용 가능하도록)',
          '편안한 키보드와 선명한 화면 (장시간 코딩 집중)',
        ],
      },
      {
        question_id: 4,
        question: '선호하는 운영체제(OS)나 브랜드가 있으신가요?',
        options: [
          'Windows (다양한 프로그램 호환성과 범용성)',
          'macOS (Apple 생태계 연동 및 개발 환경)',
          'OS/브랜드 무관 (성능과 가성비가 최우선)',
        ],
      },
    ],
  },
};

export const ShoppingResearchResule = {
  status: 200,
  message: '쇼핑 리서치 결과 분석 성공 (상위 5개 상품)',
  data: {
    user_query: '전문가용 영상편집 노트북 찾아줘',
    products: [
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
