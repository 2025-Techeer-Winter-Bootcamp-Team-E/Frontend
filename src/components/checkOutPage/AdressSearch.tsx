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
    <div className="mb-4">
      <label className="mb-1.5 block text-sm font-bold text-[#111827]">주소</label>
      <div className="mb-2 flex gap-2">
        <input
          type="text"
          value={postalCode}
          onChange={(e) => onPostalCodeChange(e.target.value)}
          readOnly
          className="w-32 rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-sm font-light text-[#6B7280] focus:outline-none"
        />
        <button
          onClick={onSearch}
          className="rounded-lg border border-[#E5E7EB] bg-[#E5E7EB] px-4 py-3 text-sm font-medium text-[#111827] transition-colors hover:bg-[#D1D5DB]"
        >
          주소검색
        </button>
      </div>
      <input
        type="text"
        value={address}
        onChange={(e) => onAddressChange(e.target.value)}
        readOnly
        className="mb-2 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
      <input
        type="text"
        value={detailAddress}
        onChange={(e) => onDetailAddressChange(e.target.value)}
        className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm font-light text-[#111827] placeholder:text-[#6B7280] focus:border-[#0D9DDA] focus:ring-2 focus:ring-[#0D9DDA]/20 focus:outline-none"
      />
    </div>
  );
};

export default AddressSearch;
