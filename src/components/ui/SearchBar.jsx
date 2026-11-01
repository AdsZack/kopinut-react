function SearchBar({ srcIcon }) {
  return (
    <div className="flex h-10 w-full max-w-md items-center gap-2 rounded-lg border border-cream bg-white px-3 transition focus-within:border-caramel focus-within:ring-2 focus-within:ring-caramel/20">
      <img src={srcIcon} alt="search" className="size-5 shrink-0" />
      <input
        type="search"
        id="search-input"
        className="min-w-0 flex-1 bg-transparent text-sm placeholder:text-bark/50 focus:outline-none"
        placeholder="Search for coffee, meal, etc"
      />
    </div>
  );
}
export default SearchBar;
