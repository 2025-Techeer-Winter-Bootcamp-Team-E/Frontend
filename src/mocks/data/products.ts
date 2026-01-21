export const productDetail = {
  status: 200,
  data: {
    product_id: 1,
    product_name: 'Apple 2024 맥북 에어 13 M3',
    product_code: 155143,
    brand: 'Apple',
    specs: {
      CPU: 'M3 8코어',
      GPU: '10코어',
      RAM: '16GB',
      SSD: '512GB',
      Display: 'Liquid Retina',
    },
    base_price: 1730000,
    category: '노트북',
    thumbnail_url: 'https://img.example.com/macbook-air-m3.jpg',
    product_image_url_list: [
      'https://s3.amazonaws.com/my-bucket/products/mbp14-01.jpg',
      'https://s3.amazonaws.com/my-bucket/products/mbp14-02.jpg',
    ],
    product_detail_url: 'https://myshop.com/products/501',
  },
};

export const productTrend = {
  status: 200,
  data: {
    product_id: 1,
    product_name: 'Apple 2024 맥북 에어 13 M3',
    period_unit: 'month',
    selected_period: 6,
    price_history: [
      { date: '2025-08-14', price: 1730000 },
      { date: '2025-09-14', price: 1680000 },
      { date: '2025-10-14', price: 1650000 },
      { date: '2025-11-14', price: 1590000 },
      { date: '2025-12-14', price: 1620000 },
      { date: '2026-01-14', price: 1600000 },
    ],
  },
};

export const productPrices = {
  status: 200,
  data: [
    { mall_name: '쿠팡', price: 1750000, url: 'https://coupang...' },
    { mall_name: '11번가', price: 1780000, url: 'https://11st...' },
  ],
};

export const productReviews = {
  status: 200,
  data: {
    pagination: {
      current_page: 1, // 현재 페이지 번호
      size: 5, // 한 페이지당 보여줄 개수
      total_elements: 156, // 전체 리뷰 개수 (기존 total_count)
      total_pages: 16, // 전체 페이지 수 (total_elements / size 올림)
    },
    average_rating: 4.8, // 상품 전체 평점
    reviews: [
      {
        review_id: 501,
        review_images:
          'https://img.danawa.com/ui_category/plan/rightContents/rightContents311165New.jpg?t=1768377021', // 실제로는 S3에서 사진 가져옴
        author_name: '테커열혈수강생',
        rating: 5,
        content: '맥북 에어 M3 정말 가볍고 성능도 끝내주네요! 부트캠프 코딩용으로 강추입니다.',
        created_at: '2026-01-10T14:20:00',
      },
      {
        review_id: 498,
        review_images:
          'https://img.danawa.com/ui_category/plan/rightContents/rightContents311165New.jpg?t=1768377021', // 실제로는 S3에서 사진 가져옴
        author_name: '코딩하는곰',
        rating: 4,
        content: '배송은 조금 느렸지만 제품 자체는 만족스럽습니다. 화면이 정말 선명해요.',
        created_at: '2026-01-08T09:15:00',
      },
    ],
    has_next: true, // 다음 페이지 존재 여부
  },
};

export const productAIReviews = {
  status: 'success',
  data: {
    product_id: 1,
    product_code: 123415,
    total_review_count: 85,
    ai_summary:
      '이 노트북은 가벼운 무게와 강력한 성능으로 대학생들에게 매우 긍정적인 평가를 받고 있습니다. 특히 코딩 작업 시 소음이 적어 만족도가 높습니다.',
    pros: ['1.2kg의 가벼운 무게', 'M3 칩의 빠른 처리 속도', '선명한 디스플레이 화질'],
    cons: ['부족한 외부 확장 포트', '상대적으로 높은 가격대'],
    recommendation_score: 92,
    score_reason: '85건의 리뷰 중 90% 이상이 성능과 휴대성에 대해 만족을 표했습니다.',
    last_updated: '2026-01-17T15:30:00',
  },
};

export const productListPaging = {
  status: 200,
  data: {
    pagination: {
      current_page: 1,
      size: 20,
      count: 128,
      total_pages: 16,
    },
    products: [
      {
        product_code: 78528251,
        product_name: 'Apple 2024 맥북 에어 13 M3',
        brand: 'Apple',
        specs: {
          CPU: 'M3 8코어',
          GPU: '10코어',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'Liquid Retina',
        },
        base_price: 1730000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/macbook-air-m3.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1750000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1780000,
            url: 'https://11st...',
          },
        ],
      },
    ],
  },
};
