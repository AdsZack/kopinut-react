import FilterButton from "../ui/FilterButton";

function SubCategoryFilter({
  subcategories,
  activeSubcategory,
  onSelectSubcategory,
}) {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-2 px-1">
      <FilterButton
        label="All"
        active={activeSubcategory === "all"}
        onClick={() => onSelectSubcategory("all")}
      />
      {subcategories.map((sub) => (
        <FilterButton
          key={sub.id}
          label={sub.name}
          active={activeSubcategory === sub.id}
          onClick={() => onSelectSubcategory(sub.id)}
        />
      ))}
    </div>
  );
}
export default SubCategoryFilter;
