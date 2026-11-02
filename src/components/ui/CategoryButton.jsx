function CategoryButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className="category-btn"
    >
      {label}
    </button>
  );
}
export default CategoryButton;
