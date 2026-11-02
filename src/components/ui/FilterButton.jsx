function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel ${
        active
          ? "bg-bark text-cream"
          : "bg-cream-100 text-bark/70 hover:text-bark"
      }`}
    >
      {label}
    </button>
  );
}
export default FilterButton;
