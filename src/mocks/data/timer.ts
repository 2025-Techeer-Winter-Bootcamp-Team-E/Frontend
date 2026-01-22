export const myPageAllTImerPaging = {
  status: 200,
  message: '사용자별 타이머 목록 조회가 완료되었습니다.',
  data: {
    user_id: 101,
    page_info: {
      current_page: 0,
      page_size: 10,
      total_elements: 5,
      total_pages: 2,
      is_last: true,
    },
    timers: [
      {
        timer_id: 45,
        product_code: 501221,
        product_name: 'Apple 2024 맥북 프로 14',
        target_price: 520000,
        predicted_price: 530000, // 상승
        confidence_score: 92.5,
        recommendation_score: 85,
        thumbnail_url: 'https://img.example.com/macbook-air-m3.jpg',
        reason_message: '현재 역대 최저가에 근접한 저점 구간입니다. 구매를 강력 추천합니다.',
        predicted_at: '2026-01-14T21:00:00',
      },
      {
        timer_id: 48,
        product_code: 123452,
        product_name: '삼성전자 갤럭시북4 프로',
        target_price: 1800000,
        predicted_price: 1850000, // 상승
        confidence_score: 88.0,
        recommendation_score: 70,
        thumbnail_url: 'https://img.example.com/macbook-air-m3.jpg',
        reason_message: '가격 변동폭이 작아 안정적인 구간입니다.',
        predicted_at: '2026-01-15T10:00:00',
      },
      {
        timer_id: 52,
        product_code: 789123,
        product_name: 'LG 울트라기어 노트북',
        target_price: 1500000,
        predicted_price: 1600000, // 상승
        confidence_score: 75.0,
        recommendation_score: 60,
        thumbnail_url: 'https://img.example.com/lg-ultragear.jpg',
        reason_message: '최근 수요 증가로 가격 상승 예상입니다.',
        predicted_at: '2026-01-16T09:00:00',
      },
      {
        timer_id: 55,
        product_code: 456789,
        product_name: '델 XPS 13',
        target_price: 1300000,
        predicted_price: 1280000, // 하락
        confidence_score: 80.0,
        recommendation_score: 75,
        thumbnail_url: 'https://img.example.com/dell-xps13.jpg',
        reason_message: '가격이 점진적으로 하락 중입니다.',
        predicted_at: '2026-01-16T11:00:00',
      },
      {
        timer_id: 60,
        product_code: 321654,
        product_name: 'HP 스펙터 x360',
        target_price: 1400000,
        predicted_price: 1450000, // 상승
        confidence_score: 85.0,
        recommendation_score: 80,
        thumbnail_url: 'https://img.example.com/hp-specter.jpg',
        reason_message: '인기 모델로 가격 상승세 예상.',
        predicted_at: '2026-01-17T15:00:00',
      },
    ],
  },
};

export const successTimerDelete = {
  status: 200,
  message: '성공적으로 삭제(추적 중단)되었습니다.',
};

export const successTimePatch = {
  status: 200,
  message: '수정이 완료되었습니다.',
};

export const suceessTimerGet = {
  status: 200,
  data: {
    product_code: 78528251,
    product_name: '삼성전자 갤럭시북4 프로',
    target_price: 520000,
    predicted_price: 530000,
    confidence_score: 92.5,
    recommendation_score: 85,
    thumbnail_url: 'https://img.example.com/macbook-air-m3.jpg',
    reason_message: '현재 역대 최저가에 근접한 저점 구간입니다. 구매를 강력 추천합니다.',
    predicted_at: '2026-01-14T21:00:00',
  },
};

export const suceessTimerPost = {
  status: 201,
  message: '타이머가 성공적으로 등록되었습니다.',
  data: { timer_id: 1 },
};
