function FilterButton({ label }) {
  return (
    <button
      type="button"
      data-subcategory={label}
      className="rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
    >
      ${label}
    </button>
  );
}
export default FilterButton;
