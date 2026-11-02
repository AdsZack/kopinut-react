import MenuSection from "../menu/MenuSection";
import Header from "./Header";

function Main({
  menus,
  loading,
  error,
  categoryLabel,
  subcategories,
  activeSubcategory,
  onSelectSubcategory,
  query,
  onQueryChange,
  isSidebarOpen,
  onOpenSidebar,
}) {
  return (
    <>
      <Header
        categoryLabel={categoryLabel}
        query={query}
        onQueryChange={onQueryChange}
        isSidebarOpen={isSidebarOpen}
        onOpenSidebar={onOpenSidebar}
      />
      <MenuSection
        menus={menus}
        loading={loading}
        error={error}
        subcategories={subcategories}
        activeSubcategory={activeSubcategory}
        onSelectSubcategory={onSelectSubcategory}
      />
    </>
  );
}
export default Main;
