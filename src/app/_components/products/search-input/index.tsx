type SearchInputProps = {
  searchValue: string;
  searchChange: (e: string) => void;
};
const SearchInput = ({ searchValue, searchChange }: SearchInputProps) => {
  return (
    <div>
      <label className="text-[#285F9D] font-semibold text-[18px]">
        Search products by keyword
      </label>
      <input
        placeholder="Search keyword"
        className="px-3 outline-none border rounded-md border-[#006483D1] w-full h-[50px] bg-[#F3F3F3] mt-2 text-[#7F7F7F]"
        type="text"
        onChange={(e) => searchChange(e.target.value)}
        value={searchValue}
      />
    </div>
  );
};

export default SearchInput;
