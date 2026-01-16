import { Image as ImageIcon } from 'lucide-react';

interface ProductInfoProps {
  productImage?: string;
  productName: string;
  badge?: string;
}

const ProductInfo = ({ productImage, productName, badge }: ProductInfoProps) => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        {productImage ? (
          <img src={productImage} alt={productName} className="h-full w-full object-cover" />
        ) : (
          <ImageIcon className="h-8 w-8 text-gray-300" />
        )}
      </div>
      <div>
        <div className="mb-1 text-xs text-blue-600">리뷰 작성 상품</div>
        {badge && (
          <span className="mb-1 inline-block rounded bg-blue-500 px-2 py-0.5 text-xs text-white">
            {badge}
          </span>
        )}
        <h3 className="font-semibold leading-tight text-gray-900">{productName}</h3>
      </div>
    </div>
  );
};

export default ProductInfo;
