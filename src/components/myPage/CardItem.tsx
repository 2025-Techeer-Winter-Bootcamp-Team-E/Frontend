import { X } from 'lucide-react';

interface ItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    discount?: string;
    img: string;
  };
  onRemove: (id: string) => void;
}

const CardItem = ({ item, onRemove }: ItemProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-gray-100 border-gray-200 p-4 transition-all hover:border-cyan-100 hover:shadow-md">
      {/* 제품 이미지 아이콘 (Lucide 또는 이미지 태그) */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400 group-hover:bg-cyan-50 group-hover:text-cyan-500">
        {/* 실제 이미지 경로가 있다면 <img src={item.img} /> 사용 */}
        <span className="text-xs font-medium uppercase">{item.img}</span>
      </div>

      {/* 제품 정보 */}
      <div className="flex-1">
        <h3 className="mb-1 line-clamp-1 text-sm font-semibold text-gray-800">{item.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">{item.price.toLocaleString()}원</span>
        </div>
      </div>

      {/* 삭제 버튼 */}
      <button
        onClick={() => onRemove(item.id)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-red-50 hover:text-red-500"
        aria-label="삭제"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CardItem;
