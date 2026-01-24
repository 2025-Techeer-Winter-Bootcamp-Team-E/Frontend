import {
  productAIReviews,
  productDetail,
  productListPaging,
  productPrices,
  productReviews,
  productTrend,
} from '@/mocks/data/products';
import { http, HttpResponse } from 'msw';

export const productsHandler = [
  // 상품 상세
  http.get('/products/:product_code', ({ params }) => {
    const { product_code } = params;

    return HttpResponse.json({
      ...productDetail,
      product_code: Number(product_code),
    });
  }),

  // 가격 추이
  http.get('/products/:product_code/price-trend', ({ params }) => {
    const { product_code } = params;

    return HttpResponse.json({
      ...productTrend,
      product_code: Number(product_code),
    });
  }),

  // 가격 목록
  http.get('/products/:product_code/prices', ({ params }) => {
    const { product_code } = params;

    return HttpResponse.json({
      ...productPrices,
      product_code: Number(product_code),
    });
  }),

  // 리뷰 리스트
  http.get('/products/:product_code/reviews', ({ params }) => {
    const { product_code } = params;

    return HttpResponse.json({
      ...productReviews,
      product_code: Number(product_code),
    });
  }),

  // AI 리뷰 요약
  http.get('/products/:product_code/reviews/summary', ({ params }) => {
    const { product_code } = params;

    return HttpResponse.json({
      ...productAIReviews,
      product_code: Number(product_code),
    });
  }),

  http.get('/products', ({ request }) => {
    const url = new URL(request.url);

    // 쿼리 파라미터 추출
    const page = Number(url.searchParams.get('page')) || 1;
    const pageSize = Number(url.searchParams.get('page_size')) || 20; // ← 수정
    const mainCat = url.searchParams.get('main_cat');
    const subCat = url.searchParams.get('sub_cat');
    const brand = url.searchParams.get('brand');
    const minPrice = url.searchParams.get('min_price');
    const maxPrice = url.searchParams.get('max_price');
    const sort = url.searchParams.get('sort') || 'popular';

    // 필터링 로직
    let filteredProducts = [...productListPaging.data.products];

    // 카테고리 필터 - ID 기반으로 수정 (임시로 필터링 제거하거나 매핑 필요)
    // 실제로는 CATEGORY 상수를 import해서 ID → 이름 매핑 필요
    // if (mainCat) {
    //   const categoryName = CATEGORY.find(c => c.id === Number(mainCat))?.name;
    //   filteredProducts = filteredProducts.filter((p) => p.category === categoryName);
    // }

    // 임시: 카테고리 필터 제거 (모든 상품 반환)

    // 브랜드 필터
    if (brand) {
      const brands = brand.split(',');
      filteredProducts = filteredProducts.filter((p) => brands.includes(p.brand));
    }

    // 가격 필터
    if (minPrice) {
      filteredProducts = filteredProducts.filter((p) => p.base_price >= Number(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter((p) => p.base_price <= Number(maxPrice));
    }

    // 정렬
    if (sort === 'price_low') {
      filteredProducts.sort((a, b) => a.base_price - b.base_price);
    } else if (sort === 'price_high') {
      filteredProducts.sort((a, b) => b.base_price - a.base_price);
    }

    // 페이지네이션
    const totalCount = filteredProducts.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return HttpResponse.json({
      status: 200,
      data: {
        pagination: {
          current_page: page,
          size: pageSize,
          count: totalCount,
          total_pages: totalPages,
        },
        products: paginatedProducts,
      },
    });
  }),
];
