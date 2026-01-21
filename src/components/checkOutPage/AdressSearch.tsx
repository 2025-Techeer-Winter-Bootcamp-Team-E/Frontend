const AddressSearch = ({
  postalCode,
  address,
  detailAddress,
  onPostalCodeChange,
  onAddressChange,
  onDetailAddressChange,
  onSearch,
}: {
  postalCode: string;
  address: string;
  detailAddress: string;
  onPostalCodeChange: (value: string) => void;
  onAddressChange: (value: string) => void;
  onDetailAddressChange: (value: string) => void;
  onSearch: () => void;
}) => {
  return (
    <div className="mb-6">
      <label className="mb-2 ml-1 block text-[13px] font-semibold tracking-tight text-[#86868b]">
        주소
      </label>
      <div className="mb-3 flex gap-2">
        <input
          type="text"
          value={postalCode}
          onChange={(e) => onPostalCodeChange(e.target.value)}
          readOnly
          className="w-28 rounded-xl bg-[#f5f5f7] px-4 py-3 text-[14px] font-semibold text-[#86868b] focus:outline-none"
        />
        <button
          onClick={onSearch}
          className="rounded-xl bg-[#1d1d1f] px-5 py-3 text-[13px] font-semibold text-white transition-all hover:bg-[#424245] active:scale-[0.98]"
        >
          주소 찾기
        </button>
      </div>
      <div className="space-y-3">
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          readOnly
          className="w-full rounded-xl bg-[#f5f5f7] px-4 py-3 text-[15px] font-medium text-[#1d1d1f] focus:outline-none"
        />
        <input
          type="text"
          value={detailAddress}
          onChange={(e) => onDetailAddressChange(e.target.value)}
          placeholder="상세 주소를 입력하세요"
          className="w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-[15px] font-medium text-[#1d1d1f] transition-all placeholder:text-[#d2d2d7] focus:border-[#1d1d1f] focus:ring-4 focus:ring-black/[0.03] focus:outline-none"
        />
      </div>
    </div>
  );
};
export default AddressSearch;
