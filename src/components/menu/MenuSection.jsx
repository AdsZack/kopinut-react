import CheckoutCard from "../checkout/CheckoutCard";
import MenuList from "./MenuList";
import SubCategoryFilter from "./SubCategoryFilter";

function MenuSection({
  menus,
  loading,
  error,
  subcategories,
  activeSubcategory,
  onSelectSubcategory,
}) {
  return (
    <div className="grid min-h-0 min-w-0 grid-cols-[minmax(0,1fr)_minmax(340px,420px)] gap-4 p-4">
      <div className="flex min-h-0 min-w-0 flex-col gap-4">
        <SubCategoryFilter
          subcategories={subcategories}
          activeSubcategory={activeSubcategory}
          onSelectSubcategory={onSelectSubcategory}
        />
        <MenuList menus={menus} loading={loading} error={error} />
      </div>
      <CheckoutCard />
    </div>
  );
}
export default MenuSection;
