export const myTokenCharge = {
  status: 200,
  data: { current_tokens: 125000 },
};

export const successTokenCharge = {
  status: 200,
  message: '50,000 토큰이 성공적으로 충전되었습니다.',
  data: { current_tokens: 150000 },
};

export const cartItems = {
  status: 200,
  message: '장바구니 목록 조회 성공',
  data: [
    {
      cart_item_id: 1001,
      product_code: 78528251,
      product_name: 'Apple 2024 맥북 프로 14',
      product_resentative_image_url: 'https://s3.amazonaws.com/...',
      quantity: 1,
      price: 2490000,
      total_price: 2490000,
    },
    {
      cart_item_id: 1002,
      product_code: 78528252,
      product_name: '로지텍 MX Master 3S',
      product_resentative_image_url: 'https://s3.amazonaws.com/...',
      quantity: 2,
      price: 129000,
      total_price: 258000,
    },
  ],
};

export const cartDelete = {
  status: 200,
  message: '장바구니 항목이 삭제되었습니다.',
};

export const cartAdd = {
  status: 200,
  message: '장바구니에 상품을 담았습니다.',
  data: {
    cart_item_id: 1006,
    product_code: 78528251,
    quantity: 2,
    added_at: '2026-01-17T13:54:06',
  },
};

export const cartItemCheckout = {
  items: [
    { cart_item_id: 12, quantity: 2 },
    { cart_item_id: 15, quantity: 1 },
  ],
  total_price: 2500000,
};
