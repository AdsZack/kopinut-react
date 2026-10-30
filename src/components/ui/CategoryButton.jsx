function CategoryButton({ label }) {
  return (
    <button
      type="button"
      data-category={label.toLowerCase()}
      className="category-btn"
    >
      {label}
    </button>
  );
}
export default CategoryButton;
