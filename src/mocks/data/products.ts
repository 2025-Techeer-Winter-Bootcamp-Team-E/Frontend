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
      current_page: 1,
      size: 5,
      total_elements: 156,
      total_pages: 16,
    },
    average_rating: 4.8,
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
    has_next: true,
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
      total_pages: 7,
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
      {
        product_code: 78528252,
        product_name: 'LG 그램 17',
        brand: 'LG전자',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'WQXGA',
        },
        base_price: 2190000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/lg-gram-17.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2200000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 2150000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528253,
        product_name: '삼성 갤럭시북4 프로',
        brand: '삼성전자',
        specs: {
          CPU: 'i7 14세대',
          GPU: 'Arc Graphics',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'AMOLED',
        },
        base_price: 1890000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/galaxy-book4.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1890000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1920000,
            url: 'https://11st...',
          },
          {
            mall_name: '옥션',
            price: 1850000,
            url: 'https://auction...',
          },
        ],
      },
      {
        product_code: 78528254,
        product_name: 'ASUS ROG Strix G16',
        brand: 'ASUS',
        specs: {
          CPU: 'i9 13세대',
          GPU: 'RTX 4060',
          RAM: '32GB',
          SSD: '1TB',
          Display: 'QHD 240Hz',
        },
        base_price: 2590000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/asus-rog.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2590000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 2650000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528255,
        product_name: 'HP 엔비 x360',
        brand: 'HP',
        specs: {
          CPU: 'i5 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD Touch',
        },
        base_price: 1450000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/hp-envy.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1450000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1480000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528256,
        product_name: 'MSI 프레스티지 14',
        brand: 'MSI',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'RTX 3050',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'QHD+',
        },
        base_price: 1790000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/msi-prestige.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1790000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 1820000,
            url: 'https://gmarket...',
          },
          {
            mall_name: '옥션',
            price: 1750000,
            url: 'https://auction...',
          },
        ],
      },
      {
        product_code: 78528257,
        product_name: '레노버 ThinkPad X1 Carbon',
        brand: '레노버',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'WUXGA',
        },
        base_price: 2290000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/lenovo-thinkpad.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2290000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 2350000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528258,
        product_name: 'ACER Swift 3',
        brand: 'ACER',
        specs: {
          CPU: 'i5 12세대',
          GPU: 'Iris Xe',
          RAM: '8GB',
          SSD: '256GB',
          Display: 'FHD',
        },
        base_price: 890000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/acer-swift.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 890000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 920000,
            url: 'https://gmarket...',
          },
          {
            mall_name: '11번가',
            price: 870000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528259,
        product_name: '한성 TFG5',
        brand: '한성',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'RTX 4050',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD 144Hz',
        },
        base_price: 1590000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/hansung-tfg5.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1590000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1620000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528260,
        product_name: 'Apple 맥북 프로 14 M3 Pro',
        brand: 'Apple',
        specs: {
          CPU: 'M3 Pro 12코어',
          GPU: '18코어',
          RAM: '18GB',
          SSD: '512GB',
          Display: 'Liquid Retina XDR',
        },
        base_price: 2990000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/macbook-pro-14.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2990000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 3050000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528261,
        product_name: 'LG 그램 16',
        brand: 'LG전자',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '1TB',
          Display: 'WQXGA',
        },
        base_price: 2090000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/lg-gram-16.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2090000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 2120000,
            url: 'https://11st...',
          },
          {
            mall_name: '옥션',
            price: 2050000,
            url: 'https://auction...',
          },
        ],
      },
      {
        product_code: 78528262,
        product_name: '삼성 갤럭시북3 360',
        brand: '삼성전자',
        specs: {
          CPU: 'i5 13세대',
          GPU: 'Iris Xe',
          RAM: '8GB',
          SSD: '256GB',
          Display: 'FHD Touch',
        },
        base_price: 1290000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/galaxy-book3-360.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1290000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 1320000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528263,
        product_name: 'ASUS 비보북 15',
        brand: 'ASUS',
        specs: {
          CPU: 'i5 12세대',
          GPU: 'MX550',
          RAM: '8GB',
          SSD: '512GB',
          Display: 'FHD',
        },
        base_price: 990000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/asus-vivobook.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 990000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1020000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528264,
        product_name: 'HP 파빌리온 15',
        brand: 'HP',
        specs: {
          CPU: 'i5 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD',
        },
        base_price: 1190000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/hp-pavilion.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1190000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 1220000,
            url: 'https://gmarket...',
          },
          {
            mall_name: '11번가',
            price: 1170000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528265,
        product_name: 'MSI 크리에이터 Z16',
        brand: 'MSI',
        specs: {
          CPU: 'i9 13세대',
          GPU: 'RTX 4060',
          RAM: '32GB',
          SSD: '1TB',
          Display: 'QHD+ Touch',
        },
        base_price: 3290000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/msi-creator.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 3290000,
            url: 'https://coupang...',
          },
          {
            mall_name: '옥션',
            price: 3250000,
            url: 'https://auction...',
          },
        ],
      },
      {
        product_code: 78528266,
        product_name: '레노버 IdeaPad Slim 5',
        brand: '레노버',
        specs: {
          CPU: 'i5 13세대',
          GPU: 'Iris Xe',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD',
        },
        base_price: 1090000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/lenovo-ideapad.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1090000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1120000,
            url: 'https://11st...',
          },
        ],
      },
      {
        product_code: 78528267,
        product_name: 'ACER Predator Helios 300',
        brand: 'ACER',
        specs: {
          CPU: 'i7 13세대',
          GPU: 'RTX 4070',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD 165Hz',
        },
        base_price: 2490000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/acer-predator.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2490000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 2550000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528268,
        product_name: '한성 보스몬스터 DX5',
        brand: '한성',
        specs: {
          CPU: 'i7 12세대',
          GPU: 'RTX 3060',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'FHD 144Hz',
        },
        base_price: 1690000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/hansung-boss.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 1690000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 1720000,
            url: 'https://11st...',
          },
          {
            mall_name: '옥션',
            price: 1650000,
            url: 'https://auction...',
          },
        ],
      },
      {
        product_code: 78528269,
        product_name: 'Apple 맥북 에어 15 M3',
        brand: 'Apple',
        specs: {
          CPU: 'M3 8코어',
          GPU: '10코어',
          RAM: '16GB',
          SSD: '512GB',
          Display: 'Liquid Retina',
        },
        base_price: 2090000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/macbook-air-15.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 2090000,
            url: 'https://coupang...',
          },
          {
            mall_name: 'G마켓',
            price: 2150000,
            url: 'https://gmarket...',
          },
        ],
      },
      {
        product_code: 78528270,
        product_name: 'LG 울트라PC 15',
        brand: 'LG전자',
        specs: {
          CPU: 'i5 12세대',
          GPU: 'Iris Xe',
          RAM: '8GB',
          SSD: '256GB',
          Display: 'FHD',
        },
        base_price: 790000,
        category: '노트북',
        thumbnail_url: 'https://img.example.com/lg-ultrapc.jpg',
        mall_price: [
          {
            mall_name: '쿠팡',
            price: 790000,
            url: 'https://coupang...',
          },
          {
            mall_name: '11번가',
            price: 820000,
            url: 'https://11st...',
          },
        ],
      },
    ],
  },
};
